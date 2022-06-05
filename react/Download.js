const React = require("react");

function Download(props, svgRef) {
  return /*#__PURE__*/React.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 64 64",
    width: true,
    height: true,
    strokeWidth: true,
    ref: svgRef
  }, props), /*#__PURE__*/React.createElement("path", {
    style: {
      stroke: "#13386e",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: 2,
      fill: "#fff"
    },
    d: "M32 16.78v23.44"
  }), /*#__PURE__*/React.createElement("path", {
    style: {
      fill: "none",
      stroke: "#13386e",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: 2
    },
    d: "m41 30.53-9 9.69-9-9.69"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M51 31.22v11c0 2.76-2.24 5-5 5H18c-2.76 0-5-2.24-5-5v-11",
    style: {
      fill: "none",
      stroke: "#13386e",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: 2
    }
  }));
}

const ForwardRef = React.forwardRef(Download);
module.exports = ForwardRef;