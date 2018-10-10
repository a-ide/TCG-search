import React from 'react'
import request from 'superagent'
import SelectItem from './SelectItem.jsx'
import ListItem from './ListItem.jsx'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      name: props.name,
      list: [],
      options: [],
      filterBy: null
    }
  }

  async componentWillMount() {
    try {
      const res = await request.get('./data/catList.json')
        .accept('application/json')
      this.loadedJSON(res)
      this.filter()
    } catch (err) {
      console.log(err)
    }
  }

  // データを読み込んだ時
  loadedJSON(res) {
    // 状態を更新
    this.setState({
      list: res.body,
    })
  }

  // 猫リストから選択肢を抽出
  filter() {
    const listItem = this.state.list.map(e => e.status.age)
    const result = listItem.filter((value, index, array) => {
      return array.indexOf( value ) === index;
    })
    this.setState({ options: result })
  }

  render() {
    // console.log(this.state.options)
    return (
      <div>
        <SelectItem
          name='age'
          items={this.state.options}
          value='選択してください'
          onChange={e => this.changeValue(e)} />
        {/* <SelectItem
          name='sex'
          items={options2}
          value='選択してください'
          onChange={e => this.changeValue(e)} /> */}
        <ListItem />
      </div>
    )
  }
}

export default App
