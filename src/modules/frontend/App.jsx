import React from 'react'
import request from 'superagent'
import Form from './Form.jsx'
import CatList from './CatList.jsx'
import IconList from './IconList.jsx'
import Modal from './Modal'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faVenus, faMars, faVideo, faHome, faPaw, faCarSide, faBirthdayCake } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

// font awesome のアイコンを利用
library.add(faVenus, faMars, faVideo, faHome, faPaw, faCarSide, faBirthdayCake)

class App extends React.Component {
  constructor(props) {
    super(props)
    this.originList = []
    this.modal = new Modal()
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
      this.modal.addModal()
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

  setHeaderHeight() {
    const height = document.getElementById('js-target-header')
    if (height !== null) {
      const newHeight = height.offsetHeight + 10
      document.getElementById('js-target-content').style.paddingTop = `${newHeight}px`
    }
  }

  render() {
    this.setHeaderHeight()
    if (this.state.list.length > 0) this.modal.removeModal()
    const noListMsg = this.state.list === [] ? <p>条件に該当するにゃんこはいません。</p> : null
    
    return (
      <div>
        <header id="js-target-header" className="l-header">
          <h1 className="l-header__logo">
            <i className="c-icon"><FontAwesomeIcon icon="paw" /></i>
            <span>TCG Search</span>
            <i className="c-icon"><FontAwesomeIcon icon="paw" /></i>
          </h1>
          <Form
            options={this.state.options}
            filter={this.filter}
            setFilterValue={this.setFilterValue} />
          <div className="l-header__iconList">
            <IconList />
          </div>
        </header>
        <div id="js-target-content" className="l-main">
          <div className="l-main__inner">
            <CatList
              listData={this.state.list} />
            {noListMsg}
          </div>
        </div>
      </div>
    )
  }
}

export default App
