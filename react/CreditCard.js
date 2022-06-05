const React = require("react");

function CreditCard(props, svgRef) {
  return /*#__PURE__*/React.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 64 64",
    width: true,
    height: true,
    strokeWidth: true,
    ref: svgRef
  }, props), /*#__PURE__*/React.createElement("path", {
    style: {
      fill: "none",
      stroke: "#13386e",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: 2
    },
    d: "M4 28.96h55M4 24.96h55"
  }), /*#__PURE__*/React.createElement("rect", {
    x: 4,
    y: 14,
    width: 56,
    height: 36,
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
    d: "M12 43.96h27M12 38.96h16"
  }));
}

const ForwardRef = React.forwardRef(CreditCard);
module.exports = ForwardRef;