const fs = require("fs").promises;
const camelcase = require("camelcase");
const { promisify } = require("util");
const rimraf = promisify(require("rimraf"));
const svgr = require("@svgr/core").default;
const babel = require("@babel/core");
const { dirname } = require("path");

let transform = {
    react: async (svg, componentName, format) => {
        let component = await svgr(
            svg,
            {
                ref: true,
                svgProps: {
                    width: "{props.size}",
                    height: "{props.size}",
                    strokeWidth: "{props.stroke}",
                },
            },
            { componentName }
        );
        let { code } = await babel.transformAsync(component, {
            plugins: [
                [
                    require("@babel/plugin-transform-react-jsx"),
                    { useBuiltIns: true },
                ],
            ],
        });

        if (format === "esm") {
            return code;
        }

        return code
            .replace(
                'import * as React from "react"',
                'const React = require("react")'
            )
            .replace("export default", "module.exports =");
    },
};

async function getIcons() {
    let files = await fs.readdir(`./optimized/icons`);
    return Promise.all(
        files.map(async (file) => ({
            svg: await fs.readFile(`./optimized/icons/${file}`, "utf8"),
            componentName: `${camelcase(file.replace(/\.svg$/, ""), {
                pascalCase: true,
            })}`,
        }))
    );
}

function exportAll(icons, format, includeExtension = true) {
    return icons
        .map(({ componentName }) => {
            let extension = includeExtension ? ".js" : "";
            if (format === "esm") {
                return `export { default as ${componentName} } from './${componentName}${extension}'`;
            }
            return `module.exports.${componentName} = require("./${componentName}${extension}")`;
        })
        .join("\n");
}

async function ensureWrite(file, text) {
    await fs.mkdir(dirname(file), { recursive: true });
    await fs.writeFile(file, text, "utf8");
}

async function ensureWriteJson(file, json) {
    await ensureWrite(file, JSON.stringify(json, null, 2));
}

async function buildIcons(package, format) {
    let outDir = `./${package}`;
    if (format === "esm") {
        outDir += "/esm";
    }

    let icons = await getIcons();

    await Promise.all(
        icons.flatMap(async ({ componentName, svg }) => {
            let content = await transform[package](svg, componentName, format);

            let types = `import * as React from 'react';\ndeclare function ${componentName}(props: React.ComponentProps<'svg'>): JSX.Element;\nexport default ${componentName};\n`;

            return [
                ensureWrite(`${outDir}/${componentName}.js`, content),
                ...(types
                    ? [ensureWrite(`${outDir}/${componentName}.d.ts`, types)]
                    : []),
            ];
        })
    );

    await ensureWrite(`${outDir}/index.js`, exportAll(icons, format));

    await ensureWrite(`${outDir}/index.d.ts`, exportAll(icons, "esm", false));
}

async function main(package) {
    const cjsPackageJson = { module: "./esm/index.js", sideEffects: false };
    const esmPackageJson = { type: "module", sideEffects: false };

    console.log(`Building ${package} package...`);

    await Promise.all([rimraf(`./${package}/icons/*`)]);

    await Promise.all([
        buildIcons(package, "esm"),
        buildIcons(package, "cjs"),
        ensureWriteJson(`./${package}/icons/package.json`, cjsPackageJson),
        ensureWriteJson(`./${package}/icons/esm/package.json`, esmPackageJson),
    ]);

    return console.log(`Finished building ${package} package.`);
}

let [package] = process.argv.slice(2);

if (!package) {
    throw new Error("Please specify a package");
}

main(package);
