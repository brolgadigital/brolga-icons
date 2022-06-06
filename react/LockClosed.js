const React = require("react");

function LockClosed(props, svgRef) {
  return /*#__PURE__*/React.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 64 64",
    width: props.size,
    height: props.size,
    strokeWidth: props.stroke,
    ref: svgRef
  }, props), /*#__PURE__*/React.createElement("rect", {
    x: 8.31,
    y: 24.07,
    width: 48.69,
    height: 35.93,
    rx: 5,
    ry: 5,
    fill: "none",
    stroke: "#13386e",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: 32.5,
    cy: 39.5,
    r: 5.5,
    fill: "none",
    stroke: "#13386e",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M18 24.07V17.5C18 9.49 24.49 3 32.5 3S47 9.49 47 17.5v6.57M32.5 53v-8",
    fill: "none",
    stroke: "#13386e",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }));
}

const ForwardRef = React.forwardRef(LockClosed);
module.exports = ForwardRef;