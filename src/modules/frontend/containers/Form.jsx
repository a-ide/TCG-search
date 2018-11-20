import React, { Component } from "react";
import SelectItem from "../components/SelectItem";

export default class Form extends Component {
  render() {
    const { list } = this.props;
    const newArray = [];
    const conditions = Object.keys({ age: [], sex: [] });

    if (list) {
      conditions.map(key => {
        const group = list.map(e => e.status[key]);
        const result = group.filter(
          (value, index, array) => array.indexOf(value) === index
        );
        return newArray.push(result);
      });
    }

    return (
      <form className="c-form">
        <SelectItem name="age" label="年齢" options={newArray[0]} />
        <SelectItem name="sex" label="性別" options={newArray[1]} />
      </form>
    );
  }
}
