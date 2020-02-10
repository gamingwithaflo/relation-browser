import React from "react";

class Circles extends React.Component {
  constructor() {
    super();
  }
  render() {
    let cx = this.props.cx;
    let cy = this.props.cy;
    let r = this.props.r;

    return (
      <circle
        cx={cx}
        cy={cy}
        r={r}
        stroke="black"
        strokeWidth="0.1"
        fill="none"
      />
    );
  }
}

export default Circles;
