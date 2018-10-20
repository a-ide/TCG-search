import React from 'react'

class SelectItem extends React.Component {
  constructor(props) {
    super(props)
    this.name = props.name
    this.state = {
      list: props.options,
    }
  }

  componentWillReceiveProps(nextProps) {
    this.setState({ list: nextProps })
  }

  // セレクトボックスの値が変化した時、value を変更
  changeValue(e) {
    const currentCondition = this.props.setFilterValue(e.target.name, e.target.value)
    this.props.filter(currentCondition)
  }

  render() {
    let optionList

    if (this.state.list !== undefined) {
      if (this.state.list.options !== undefined) {
        optionList = this.state.list.options.map(value => {
          return (
            <option key={value} option={value} value={value}>{value}</option>
          )
        })
      }
    }

    return (
      <div className="c-selectItem">
        <label htmlFor={this.props.name}>
          <span>{this.props.label}</span>
          <select
            name={this.name}
            id={this.props.name}
            onChange={e => this.changeValue(e)}
          >
            <option>選択してください</option>
            {optionList}
          </select>
        </label>
      </div>
    )
  }
}

export default SelectItem
