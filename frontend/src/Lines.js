import React from "react";

class Lines extends React.Component {
  constructor() {
    super();
  }
  render() {
    let x1 = this.props.x1;
    let y1 = this.props.y1;
    let x2 = this.props.x2;
    let y2 = this.props.y2;

    return (
      <line x1={x1} y1={y1} x2={x2} y2={y2} stroke="black" strokeWidth="0.2" />
    );
  }
}

export default Lines;
