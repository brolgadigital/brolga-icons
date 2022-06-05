import * as React from "react";

function CalendarEventAdd(props, svgRef) {
  return /*#__PURE__*/React.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 64 64",
    ref: svgRef
  }, props), /*#__PURE__*/React.createElement("rect", {
    x: 4,
    y: 8,
    width: 56,
    height: 52,
    rx: 5,
    ry: 5,
    style: {
      fill: "none",
      stroke: "#13386e",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: 2
    }
  }), /*#__PURE__*/React.createElement("path", {
    style: {
      fill: "none",
      stroke: "#13386e",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: 2
    },
    d: "M5 18h55M47 4v7M17 4v7"
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

const ForwardRef = React.forwardRef(CalendarEventAdd);
export default ForwardRef;