import * as React from "react";

function CalendarLayout(props, svgRef) {
  return /*#__PURE__*/React.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 64 64",
    ref: svgRef
  }, props), /*#__PURE__*/React.createElement("path", {
    style: {
      fill: "none",
      stroke: "#13386e",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: 2
    },
    d: "M4.65 27.74h56M4.65 38.37h56M4.65 49h56M15.85 16.98V59.5M27.05 16.98V59.5M38.25 16.98V59.5M49.45 16.98V59.5"
  }), /*#__PURE__*/React.createElement("rect", {
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
  }));
}

const ForwardRef = React.forwardRef(CalendarLayout);
export default ForwardRef;