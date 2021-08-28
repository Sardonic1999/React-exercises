import React, { Component } from "react";
import { lists } from "./mock";

export default class App extends Component {
  state = {
    name: "",
    status: "",
    lists: lists,
    selected: null,
  };
  render() {
    const onEdit = (value) => {
      this.setState({
        selected: value.id,
        name: value.name,
        status: value.status,
      });
    };
    const onSave = () => {
      this.setState({ selected: null });
      const newData = this.state.lists.map((elem) =>
        elem.id === this.state.selected
          ? { ...elem, name: this.state.name, status: this.state.status }
          : elem
      );
      this.setState({ lists: newData });
    };
    return (
      <div>
        <table border="1" width="500px">
          <thead>
            <tr>
              <th>ID</th>
              <th>NAME</th>
              <th>STATUS</th>
              <th>ACTIONS</th>
            </tr>
          </thead>
          <tbody>
            {this.state.lists.map((value) => (
              <tr key={value.id}>
                <td>{value.id}</td>
                <td>
                  {this.state.selected === value.id ? (
                    <input
                      value={this.state.name}
                      type="text"
                      onChange={(e) => this.setState({ name: e.target.value })}
                    />
                  ) : (
                    value.name
                  )}
                </td>
                <td>
                  {this.state.selected === value.id ? (
                    <input
                      value={this.state.status}
                      type="text"
                      onChange={(e) =>
                        this.setState({ status: e.target.value })
                      }
                    />
                  ) : (
                    value.status
                  )}
                </td>
                <td>
                  {this.state.selected === value.id ? (
                    <button onClick={onSave}>Save</button>
                  ) : (
                    <button onClick={() => onEdit(value)}>Edit</button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}
