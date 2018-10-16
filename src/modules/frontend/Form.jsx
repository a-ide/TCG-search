import React      from 'react'
import SelectItem from './SelectItem.jsx';

class Form extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      optionGroup: props.options
    }
  }

  componentWillReceiveProps(nextProps) {
    this.setState({ optionGroup: nextProps })
    this.setState({ value: nextProps })
  }

  render() {
    const optionGroup = this.state.optionGroup.options
    let array = []

    if (optionGroup !== undefined) {
      for (let i in optionGroup) {
        const option = optionGroup[i].map(value => {
          return value
        })
        array.push(option)
      }
    }

    return(
      <form>
        <SelectItem
          name='age'
          options={array[0]}
          filter={this.props.filter}
          value='選択してください'
          setFilterValue={this.props.setFilterValue} />
        <SelectItem
          name='sex'
          options={array[1]}
          filter={this.props.filter}
          value='選択してください'
          setFilterValue={this.props.setFilterValue} />
      </form>
    )
  }
}

export default Form
