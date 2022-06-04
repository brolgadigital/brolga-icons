import * as React from "react";

function MessageEmptyIcon(props, svgRef) {
  return /*#__PURE__*/React.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 64 64",
    ref: svgRef
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M55 45.5H17.67c-1.08 0-2.13.35-3 1L4 54.5v-40c0-2.76 2.24-5 5-5h46c2.76 0 5 2.24 5 5v26c0 2.76-2.24 5-5 5Z",
    style: {
      fill: "none",
      stroke: "#13386e",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: 2
    }
  }));
}

const ForwardRef = React.forwardRef(MessageEmptyIcon);
export default ForwardRef;