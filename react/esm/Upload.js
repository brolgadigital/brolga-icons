import * as React from "react";

function Upload(props, svgRef) {
  return /*#__PURE__*/React.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 64 64",
    width: props.size,
    height: props.size,
    strokeWidth: props.stroke,
    ref: svgRef
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M32 40.22V16.78",
    stroke: "#13386e",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    fill: "#fff"
  }), /*#__PURE__*/React.createElement("path", {
    d: "m23 26.47 9-9.69 9 9.69M51 31.22v11c0 2.76-2.24 5-5 5H18c-2.76 0-5-2.24-5-5v-11",
    fill: "none",
    stroke: "#13386e",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }));
}

const ForwardRef = React.forwardRef(Upload);
export default ForwardRef;