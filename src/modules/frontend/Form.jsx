import React from "react";
import SelectItem from "./SelectItem";

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      optionGroup: props.options
    };
  }

  componentWillReceiveProps(nextProps) {
    this.setState({ optionGroup: nextProps });
  }

  render() {
    const optionGroup = this.state.optionGroup.options;
    let array = [];
    if (optionGroup !== undefined && optionGroup !== []) array = optionGroup;

    return (
      <form className="c-form">
        <SelectItem
          name="age"
          options={array[0]}
          filter={this.props.filter}
          value="選択してください"
          label="年齢"
          setFilterValue={this.props.setFilterValue}
        />
        <SelectItem
          name="sex"
          options={array[1]}
          filter={this.props.filter}
          value="選択してください"
          label="性別"
          setFilterValue={this.props.setFilterValue}
        />
      </form>
    );
  }
}

export default Form;
