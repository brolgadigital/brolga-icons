const React = require("react");

function Calendar(props, svgRef) {
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
  }));
}

const ForwardRef = React.forwardRef(Calendar);
module.exports = ForwardRef;