import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

class ListItem extends React.Component {
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
      const sexIcon = elm.status.sex === "女の子" ? "female" : "male" 
      const yellow = elm.images.yellowCar ? <p>譲渡会参加</p> : null
      const debut = !elm.status.debut ? <p>近日デビュー</p> : null
      const profVideo = elm.images.profVideo ? <p>紹介動画あり</p> : null
      const otherVideo = elm.images.otherVideo ? <p>その他動画あり</p> : null
      const shareHouse = elm.status.shareHouse ? <p>シェアハウス入居</p> : null

      return (
        <li className="list__item" key={elm.status.num}>
          <FontAwesomeIcon icon={sexIcon} />
          <div className="list__thumb">
            <img src={`img/${elm.status.num}.jpg`} alt={elm.status.num} />
          </div>
          <div className="list__status">
            <a href={elm.url} target="_blank">
              No.{elm.status.num}
            </a>
            <p>{elm.status.age}</p>
            {yellow}
            {debut}
            {profVideo}
            {otherVideo}
            {shareHouse}
          </div>
        </li>
      )
    })

    return (
      <div>
        <ul className="list">
          {listItem}
        </ul>
      </div>
    )
  }
}

export default ListItem
