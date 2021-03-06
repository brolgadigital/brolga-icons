import * as React from "react";

function Image(props, svgRef) {
  return /*#__PURE__*/React.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 64 64",
    width: props.size,
    height: props.size,
    strokeWidth: props.stroke,
    ref: svgRef
  }, props), /*#__PURE__*/React.createElement("rect", {
    x: 4,
    y: 10,
    width: 56,
    height: 44,
    rx: 5,
    ry: 5,
    fill: "none",
    stroke: "#13386e",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: 45.5,
    cy: 21.5,
    r: 5.5,
    fill: "none",
    stroke: "#13386e",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React.createElement("path", {
    d: "m4 42.67 15.23-16.12a4.93 4.93 0 0 1 7.38.1l10.58 12.24c1.8 2.08 4.94 2.3 7 .48l3.29-2.91a4.927 4.927 0 0 1 6.82.28l5.7 5.92",
    fill: "none",
    stroke: "#13386e",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }));
}

const ForwardRef = React.forwardRef(Image);
export default ForwardRef;