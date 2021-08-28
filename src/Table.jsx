import React, { Component } from "react";
import { lists } from "./mock";
import "./Student_style.css";

export default class Table extends Component {
  state = {
    name: "",
    status: "",
    selected: null,
    lists: lists,
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
      const newData = this.state.lists.map((element) =>
        element.id === this.state.selected
          ? { ...element, name: this.state.name, status: this.state.status }
          : element
      );
      this.setState({ lists: newData });
    };
    return (
      <div>
        <table
          border="1"
          style={{ borderCollapse: "collapse", width: "500px" }}
        >
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Status</th>
              <th>Action</th>
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
