import React from 'react'
import request from 'superagent'
import Form from './Form.jsx'
import CatList from './CatList.jsx'
import IconList from './IconList.jsx'
import Modal from './Modal'
import SetHeaderHeight from './SetHeaderHeight'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faVenus, faMars, faVideo, faHome, faPaw, faCarSide, faBirthdayCake, faQuestionCircle, faSearch } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

// font awesome のアイコンを利用
library.add(faVenus, faMars, faVideo, faHome, faPaw, faCarSide, faBirthdayCake, faQuestionCircle, faSearch)

class App extends React.Component {
  constructor(props) {
    super(props)
    this.originList = []
    this.total = ''
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
    this.total = this.state.list.length;
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
    SetHeaderHeight()
    if (this.state.list.length > 0) this.modal.removeModal()
    const noListMsg = this.state.list === [] ? <p>条件に該当するにゃんこはいません。</p> : null
    
    return (
      <div>
        <header id="js-target-header" className="l-header">
          <div className="l-header__inner">
            <h1 className="l-header__logo">
              <i className="c-icon"><FontAwesomeIcon icon="paw" /></i>
              <span>TCG Search</span>
              <i className="c-icon"><FontAwesomeIcon icon="paw" /></i>
            </h1>
            <div className="l-header__iconList">
              <IconList />
            </div>
          </div>
          <div id="js-toggle-search" className="l-header__search">
            <span><FontAwesomeIcon icon="search" color="#777" /></span>
          </div>
          <div className="l-header__form is-open">
            <Form
              options={this.state.options}
              filter={this.filter}
              setFilterValue={this.setFilterValue} />
          </div>
        </header>
        <div id="js-target-content" className="l-main">
          <div className="l-main__inner">
            <p className="l-main__remark">※画像掲載元：<a href="https://tokyocatguardian.org/" target="_blank">東京キャットガーディアン</a></p>
            <CatList
              listData={this.state.list} />
            {noListMsg}
            <div className="l-main__result">
              <div className="circle">
                <p className="circle__inner">
                  <span>{this.state.list.length}</span>
                  <span>{this.total}</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App
