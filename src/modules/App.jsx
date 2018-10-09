import React from 'react'
import request from 'superagent'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      items: null,
    }
  }

  // マウントされる時
  componentWillMount() {
    request.get('./data/catList.json')
      .accept('application/json')
      .end((err, res) => {
        this.loadedJSON(err, res)
      })
  }

  // データを読み込んだ時
  loadedJSON(err, res) {
    if (err) {
      console.log(err)
      return
    }
    // 状態を更新
    this.setState({
      items: res.body,
    })
  }

  render() {
    // JSONデータの読み込みが完了してるか
    if (!this.state.items) {
      return <div className="App">現在読み込み中</div>
    }

    // 読み込んだデータからアイテムを作る
    const listItem = this.state.items.map(elm => {
      const yellow = elm.images.yellowCar ? <p>譲渡会参加</p> : null
      const debut = !elm.status.debut ? <p>近日デビュー</p> : null
      const profVideo = elm.images.profVideo ? <p>紹介動画あり</p> : null
      const otherVideo = elm.images.otherVideo ? <p>その他動画あり</p> : null
      const shareHouse = elm.status.shareHouse ? <p>シェアハウス入居</p> : null
      return (
        <div className="list__item" key={elm.status.num}>
          <div className="list__thumb">
            <img src={elm.images.thumb} alt={elm.status.num} />
          </div>
          <div className="list__status">
            <a href={elm.url}>
              No.{elm.status.num}
            </a>
            <span>{elm.status.sex}</span>
            <p>{elm.status.age}</p>
            {yellow}
            {debut}
            {profVideo}
            {otherVideo}
            {shareHouse}
          </div>
        </div>
      )
    })
    return (
      <div className="list">
        {listItem}
      </div>
    )
  }
}

export default App
