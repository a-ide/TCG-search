import React    from 'react'
import request  from 'superagent'
import Form     from './Form.jsx'
import ListItem from './ListItem.jsx'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faFemale, faMale } from '@fortawesome/free-solid-svg-icons'

library.add(faFemale, faMale)

class App extends React.Component {
  constructor(props) {
    super(props)
    this.originList = []
    this.filter = this.filter.bind(this)
    this.setFilterValue = this.setFilterValue.bind(this)
    this.state = {
      list: [],
      options: [],
      filterBy: {
        age: '選択してください',
        sex: '選択してください'
      }
    }
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
    this.setState({ list: res.body })
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

  // filterBy を元にリストを再生成
  filter(newObj) {
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
    const noListMsg = this.state.list.length === 0 ? <p>条件に該当するにゃんこはいません</p> : null

    return (
      <div>
        <Form
          options={this.state.options}
          filter={this.filter}
          setFilterValue={this.setFilterValue} />
        {noListMsg}
        <ListItem
          listData={this.state.list} />
      </div>
    )
  }
}

export default App
