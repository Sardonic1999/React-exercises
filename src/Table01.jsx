import React, { Component } from "react";
import Student from "./Student";
// import "./Student_style.css";

export default class Table01 extends Component {
  state = {
    count: [{ id: 1 }],
  };
  render() {
    const onAdd = () => {
      this.setState({
        count: [...this.state.count, { id: this.state.count.length }],
      });
    };
    return (
      <div className="App">
        <button className="add" onClick={onAdd}>
          Add
        </button>
        {this.state.count.map((value) => (
          <Student />
        ))}
      </div>
    );
  }
}
