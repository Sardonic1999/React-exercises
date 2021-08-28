import React, { Component } from "react";
import Table from "./Table";
import Table01 from "./Table01";

export default class Table_all extends Component {
  render() {
    return (
      <div className="table">
        <Table />,
        <Table01 />
      </div>
    );
  }
}
