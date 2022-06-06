import * as React from "react";

function ArrowDownCircle(props, svgRef) {
  return /*#__PURE__*/React.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 64 64",
    width: props.size,
    height: props.size,
    strokeWidth: props.stroke,
    ref: svgRef
  }, props), /*#__PURE__*/React.createElement("circle", {
    cx: 32,
    cy: 32,
    r: 28,
    fill: "none",
    stroke: "#13386e",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M32 14.13V48",
    stroke: "#13386e",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    fill: "#fff"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M45 34 32 48 19 34",
    fill: "none",
    stroke: "#13386e",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }));
}

const ForwardRef = React.forwardRef(ArrowDownCircle);
export default ForwardRef;