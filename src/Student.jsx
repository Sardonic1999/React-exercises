import React, { Component } from "react";
import "./Student_style.css";

export default class student extends Component {
  state = {
    count: 0,
  };
  render() {
    return (
      <div className="but">
        <button
          className="button"
          onClick={() => this.setState({ count: this.state.count - 1 })}
        >
          -
        </button>
        <h1>{this.state.count}</h1>
        <button
          className="button"
          onClick={() => this.setState({ count: this.state.count + 1 })}
        >
          +
        </button>
      </div>
    );
  }
}
