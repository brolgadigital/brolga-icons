import * as React from "react";

function UserAdd(props, svgRef) {
  return /*#__PURE__*/React.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 64 64",
    width: props.size,
    height: props.size,
    strokeWidth: props.stroke,
    ref: svgRef
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M53.64 55v-4.28c0-11.73-9.12-21.72-20.85-22.14-12.31-.44-22.43 9.41-22.43 21.62V55c0 2.76 2.24 5 5 5h33.28c2.76 0 5-2.24 5-5Z",
    fill: "none",
    stroke: "#13386e",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: 32,
    cy: 16.28,
    r: 12.28,
    fill: "none",
    stroke: "#13386e",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: 47.43,
    cy: 47.43,
    r: 12.57,
    stroke: "#13386e",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    fill: "#fff"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M47.43 40.17v14.51M40.17 47.43h14.51",
    fill: "none",
    stroke: "#13386e",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }));
}

const ForwardRef = React.forwardRef(UserAdd);
export default ForwardRef;