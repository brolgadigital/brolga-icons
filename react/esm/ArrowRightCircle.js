import * as React from "react";

function ArrowRightCircle(props, svgRef) {
  return /*#__PURE__*/React.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 64 64",
    width: true,
    height: true,
    strokeWidth: true,
    ref: svgRef
  }, props), /*#__PURE__*/React.createElement("circle", {
    cx: 32,
    cy: 32,
    r: 28,
    style: {
      fill: "none",
      stroke: "#13386e",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: 2
    }
  }), /*#__PURE__*/React.createElement("path", {
    style: {
      stroke: "#13386e",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: 2,
      fill: "#fff"
    },
    d: "M14.13 32H48"
  }), /*#__PURE__*/React.createElement("path", {
    style: {
      fill: "none",
      stroke: "#13386e",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: 2
    },
    d: "m34 19 14 13-14 13"
  }));
}

const ForwardRef = React.forwardRef(ArrowRightCircle);
export default ForwardRef;