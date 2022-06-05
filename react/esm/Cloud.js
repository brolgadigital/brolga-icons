import * as React from "react";

function Cloud(props, svgRef) {
  return /*#__PURE__*/React.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 64 64",
    ref: svgRef
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M5 40c0 4.42 3.58 8 8 8h35c6.08 0 11-4.92 11-11s-4.92-11-11-11c-.53 0-1.05.05-1.56.12C44.76 20.28 39.38 16 33 16s-11.84 4.35-13.48 10.26c-.48-.15-.99-.26-1.52-.26-2.76 0-5 2.24-5 5 0 .34.04.68.1 1.01H13c-4.42 0-8 3.58-8 8Z",
    style: {
      fill: "none",
      stroke: "#13386e",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: 2
    }
  }));
}

const ForwardRef = React.forwardRef(Cloud);
export default ForwardRef;