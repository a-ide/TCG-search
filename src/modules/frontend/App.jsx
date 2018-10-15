import React from 'react'
import request from 'superagent'
import Form from './Form.jsx'
import ListItem from './ListItem.jsx'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.originList = []
    this.state = {
      list: [],
      options: [],
      filterBy: {
        age: '選択してください',
        sex: '選択してください'
      }
    }
    this.filter = this.filter.bind(this)
    this.setFilterValue = this.setFilterValue.bind(this)
  }

  async componentWillMount() {
    try {
      const res = await request.get('./data/catList.json')
        .accept('application/json')
      this.loadedJSON(res)
      this.setOption({ age: [], sex: [] })
    } catch (err) {
      console.log(err)
    }
  }

  // データを読み込んだ時
  loadedJSON(res) {
    // 状態を更新
    this.originList = res.body
    this.setState({
      list: res.body,
    })
  }

  // 猫リストから選択肢を抽出
  setOption(keys) {
    let newArray = []
    const condition = Object.keys(keys)

    condition.map(key => {
      const group = this.state.list.map(e => e.status[key])
      const result = group.filter((value, index, array) => {
        return array.indexOf( value ) === index;
      })
      newArray.push(result)
    })

    this.setState({ options: newArray })
  }

  setFilterValue(name, value) {
    const newObj = Object.assign({}, this.state.filterBy)
    const key = name
    newObj[key] = value
    this.setState({ filterBy: newObj })
    return newObj
  }

  filter(newObj) {
    // filterBy を元にリストを再生成
    let newArray = this.originList
    const condition = newObj
    newArray = newArray.filter(item => {
      for (const key in condition) {
        if (item.status[key] !== condition[key] && condition[key] !== '選択してください') {
          return false
        }
      }
      return true
    })
    this.setState({ list: newArray })
  }
  render() {
    return (
      <div>
        <Form
          options={this.state.options}
          filter={this.filter}
          setFilterValue={this.setFilterValue} />
        <ListItem
          listData={this.state.list} />
      </div>
    )
  }
}

export default App
