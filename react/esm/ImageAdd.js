import * as React from "react";

function ImageAdd(props, svgRef) {
  return /*#__PURE__*/React.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 64 64",
    ref: svgRef
  }, props), /*#__PURE__*/React.createElement("rect", {
    x: 4,
    y: 10,
    width: 56,
    height: 44,
    rx: 5,
    ry: 5,
    style: {
      fill: "none",
      stroke: "#13386e",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: 2
    }
  }), /*#__PURE__*/React.createElement("circle", {
    cx: 45.5,
    cy: 21.5,
    r: 5.5,
    style: {
      fill: "none",
      stroke: "#13386e",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: 2
    }
  }), /*#__PURE__*/React.createElement("path", {
    d: "m4 42.67 15.23-16.12a4.93 4.93 0 0 1 7.38.1l10.58 12.24c1.8 2.08 4.94 2.3 7 .48l3.29-2.91a4.927 4.927 0 0 1 6.82.28l5.7 5.92",
    style: {
      fill: "none",
      stroke: "#13386e",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: 2
    }
  }), /*#__PURE__*/React.createElement("circle", {
    cx: 47.43,
    cy: 47.43,
    r: 12.57,
    style: {
      stroke: "#13386e",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: 2,
      fill: "#fff"
    }
  }), /*#__PURE__*/React.createElement("path", {
    style: {
      fill: "none",
      stroke: "#13386e",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: 2
    },
    d: "M47.43 40.17v14.51M40.17 47.43h14.51"
  }));
}

const ForwardRef = React.forwardRef(ImageAdd);
export default ForwardRef;