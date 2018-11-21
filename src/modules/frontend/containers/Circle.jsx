import React, { Component } from "react";

export default class Circle extends Component {
  render() {
    const { list, filteredValue } = this.props;
    let newList = [];

    const filteredList = (items, conditions) =>
      items.filter(item => {
        /* eslint-disable no-unused-vars */
        const matches = Object.entries(conditions).map(
          ([key, value]) =>
            value === "選択してください" || item.status[key] === value
        );

        return matches.every(isMatched => isMatched);
      });

    newList = filteredList(list, filteredValue);

    return (
      <div className="circle">
        <p className="circle__inner">
          <span>{newList.length}</span>
          <span>{list.length}</span>
        </p>
      </div>
    );
  }
}
