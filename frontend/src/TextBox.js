import React from "react";

class TextBox extends React.Component {
  constructor() {
    super();
  }
  render() {
    let x = this.props.x;
    let y = this.props.y;
    let x1 = this.props.x1;
    let y1 = this.props.y1;
    let name = this.props.name;
    let w = this.props.breedte;

    return (
      <React.Fragment>
        <rect
          x={x}
          y={y}
          width={w}
          height="2.5"
          fill="white"
          stroke="black"
          strokeWidth="0.1"
        ></rect>
        <text x={x1} y={y1} fontFamily="Open Sans" fontSize="1" fill="black">
          {name}
        </text>
      </React.Fragment>
    );
  }
}

export default TextBox;
