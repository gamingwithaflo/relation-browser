import React from "react";

class Vierkant extends React.Component {
  constructor() {
    super();
  }
  render() {
    let x = this.props.x;
    let y = this.props.y;
    let zeide1 = this.props.zeide1;
    let zeide2 = this.props.zeide2;

    return (
      <React.Fragment>
        <rect
          x={x}
          y={y}
          width={zeide1}
          height={zeide2}
          fill="#c0c0c0"
          stroke="black"
          strokeWidth="0.1"
        ></rect>
      </React.Fragment>
    );
  }
}

export default Vierkant;
