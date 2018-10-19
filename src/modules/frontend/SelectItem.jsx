import React from 'react'

class SelectItem extends React.Component {
  constructor(props) {
    super(props)
    this.name = props.name
    this.state = {
      list: props.options,
      value: props.value
    }
  }

  componentWillReceiveProps(nextProps) {
    this.setState({ list: nextProps })
    this.setState({ value: nextProps.value })
  }

  // セレクトボックスの値が変化した時、value を変更
  changeValue(e) {
    this.setState({ value: e.target.value })
    const currentCondition = this.props.setFilterValue(e.target.name, e.target.value)
    this.props.filter(currentCondition)
  }

  render() {
    let optionList
    
    if (this.state.list !== undefined) {
      if (this.state.list.options !== undefined) {
        optionList = this.state.list.options.map(value => {
          return(
            <option key={value} option={value} value={value}>{value}</option>
          )
        })
      }
    }

    return(
      <div className="c-selectItem">
        <label>{this.props.label}</label>
        <select name={this.name}
          onChange={e => this.changeValue(e)}>
          <option>選択してください</option>
          {optionList}
        </select>
      </div>
    )
  }
}

export default SelectItem
