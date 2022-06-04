const React = require("react");

function CloudDownloadIcon(props, svgRef) {
  return /*#__PURE__*/React.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 64 64",
    ref: svgRef
  }, props), /*#__PURE__*/React.createElement("path", {
    style: {
      stroke: "#13386e",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: 2,
      fill: "#fff"
    },
    d: "M32 29.55V53"
  }), /*#__PURE__*/React.createElement("path", {
    style: {
      fill: "none",
      stroke: "#13386e",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: 2
    },
    d: "M41 43.31 32 53l-9-9.69M5 35c0 4.42 3.58 8 8 8h35c6.08 0 11-4.92 11-11s-4.92-11-11-11c-.53 0-1.05.05-1.56.12C44.76 15.28 39.38 11 33 11s-11.84 4.35-13.48 10.26c-.48-.15-.99-.26-1.52-.26-2.76 0-5 2.24-5 5 0 .34.04.68.1 1.01H13c-4.42 0-8 3.58-8 8Z"
  }));
}

const ForwardRef = React.forwardRef(CloudDownloadIcon);
module.exports = ForwardRef;