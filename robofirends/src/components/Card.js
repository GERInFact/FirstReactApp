import React, { Component } from "react";

class Card extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const robot = this.props.robot;
    return (
      <div className="tc dib br3 pa3 ma2 grow" style={{backgroundColor: 'rgb(22, 41, 85)', color: 'white'}}>
        <img
          src={`https://robohash.org/${robot.id}?200x200`}
          alt={`${robot.name}`}
        />
        <div>
          <h2 className="b">{robot.name}</h2>
          <p>{robot.email}</p>
        </div>
      </div>
    );
  }
}

export default Card;
