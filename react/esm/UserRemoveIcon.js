import * as React from "react";

function UserRemoveIcon(props, svgRef) {
  return /*#__PURE__*/React.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 64 64",
    ref: svgRef
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M53.64 55v-4.28c0-11.73-9.12-21.72-20.85-22.14-12.31-.44-22.43 9.41-22.43 21.62V55c0 2.76 2.24 5 5 5h33.28c2.76 0 5-2.24 5-5Z",
    style: {
      fill: "none",
      stroke: "#13386e",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: 2
    }
  }), /*#__PURE__*/React.createElement("circle", {
    cx: 32,
    cy: 16.28,
    r: 12.28,
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
    d: "M40.17 47.43h14.51"
  }));
}

const ForwardRef = React.forwardRef(UserRemoveIcon);
export default ForwardRef;