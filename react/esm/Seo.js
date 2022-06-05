import * as React from "react";

function Seo(props, svgRef) {
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
    d: "M5 18h55M13 11h3M23 11h3M33 11h3M13 25.44V52h38.89"
  }), /*#__PURE__*/React.createElement("path", {
    d: "m13 45.67 7.89-6.94a5.009 5.009 0 0 1 6.37-.19l2.36 1.83a5.007 5.007 0 0 0 6.5-.31L50 26.99",
    style: {
      fill: "none",
      stroke: "#13386e",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: 2
    }
  }), /*#__PURE__*/React.createElement("rect", {
    x: 4,
    y: 4,
    width: 56,
    height: 56,
    rx: 5,
    ry: 5,
    style: {
      fill: "none",
      stroke: "#13386e",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: 2
    }
  }));
}

const ForwardRef = React.forwardRef(Seo);
export default ForwardRef;