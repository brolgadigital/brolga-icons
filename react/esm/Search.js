import * as React from "react";

function Search(props, svgRef) {
  return /*#__PURE__*/React.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 64 64",
    width: true,
    height: true,
    strokeWidth: true,
    ref: svgRef
  }, props), /*#__PURE__*/React.createElement("circle", {
    cx: 27,
    cy: 27,
    r: 22,
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
    d: "m42.73 44 16.13 15"
  }));
}

const ForwardRef = React.forwardRef(Search);
export default ForwardRef;