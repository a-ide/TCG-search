import React, { Component } from "react";
import { connect } from "react-redux";
import { setFilteredValue } from "../actions";

class SelectItem extends Component {
  handleChange(e) {
    e.persist();
    this.props.dispatch(setFilteredValue(e.target.name, e.target.value));
  }

  render() {
    const { options, name, label } = this.props;

    return (
      <div className="c-selectItem">
        <label htmlFor={name}>
          <span>{label}</span>
          <select name={name} onChange={e => this.handleChange(e)}>
            <option>選択してください</option>
            {options &&
              options.map(option => <option key={option}>{option}</option>)}
          </select>
        </label>
      </div>
    );
  }
}

export default connect()(SelectItem);
