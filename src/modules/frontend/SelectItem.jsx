import React from 'react'

class SelectItem extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      items: props.items,
      value: props.value,
    }
  }

  componentWillReceiveProps(nextProps) {
    this.setState({ items: nextProps.items })
  }

  // セレクトボックスの値が変化した時
  changeValue(e) {
    this.setState({ value: e.target.value })
  }

  render() {
    console.log(this.state.items)
    const options = this.state.items.map(val => {
      return(
        <option key={val} value={val}>{val}</option>
      )
    })
    return(
      <select
        value={this.state.value}
        onChange={e => this.changeValue(e)}>
        {options}
      </select>
    )
  }
}

export default SelectItem
