import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

class CatList extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      list: props.listData,
      filterBy: props.filter
    }
  }

  // マウントされる時
  componentWillReceiveProps(nextProps) {
    this.setState({ list: nextProps.listData})
  }

  render() {
    // JSONデータの読み込みが完了してるか
    if (!this.state.list) {
      return <div className="App">現在読み込み中</div>
    }

    // 読み込んだデータからアイテムを作る
    const listItem = this.state.list.map(elm => {
      const sex = elm.status.sex === "女の子" ? <span><i><FontAwesomeIcon icon="female" size="2x" color="#E19CD2" /></i></span> : <span><i><FontAwesomeIcon icon="male" size="2x" color="#4CBFDA" /></i></span>
      const yellow = elm.status.yellowCar ? <span><i><FontAwesomeIcon icon="car-side" color="#F7AF31" /></i></span> : null
      const debut = !elm.status.debut ? <span><i><FontAwesomeIcon icon="birthday-cake" color="#EE411E" /></i></span> : null
      const profVideo = elm.status.profVideo ? <span><i><FontAwesomeIcon icon="video" color="#E2E448" /></i></span> : null
      const otherVideo = elm.status.otherVideo ? <span><i><FontAwesomeIcon icon="video" color="#174395" /></i></span> : null
      const shareHouse = elm.status.shareHouse ? <span><i><FontAwesomeIcon icon="home" color="#C23D86" /></i></span> : null

      return (
        <li className="catList__item" key={elm.status.num}>
          <a href={elm.url} target="_blank">
            <p className="catList__gender">{sex}</p>
            <figure className="catList__thumb">
              <img src={`img/${elm.status.num}.jpg`} alt={elm.status.num} />
            </figure>
            <div className="catList__label">
              <p className="catList__num">No.{elm.status.num}</p>
              <p className="catList__status">
                <span>{elm.status.age}</span>
                {yellow}
                {debut}
                {profVideo}
                {otherVideo}
                {shareHouse}
              </p>
            </div>
          </a>
        </li>
      )
    })

    return (
      <div>
        <ul className="catList">
          {listItem}
        </ul>
      </div>
    )
  }
}

export default CatList
