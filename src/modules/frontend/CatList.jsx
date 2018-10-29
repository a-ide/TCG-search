import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class CatList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      list: props.listData
    };
  }

  // マウントされる時
  componentWillReceiveProps(nextProps) {
    this.setState({ list: nextProps.listData });
  }

  render() {
    // JSONデータの読み込みが完了してるか
    if (!this.state.list) {
      return <div className="App">現在読み込み中</div>;
    }

    // 読み込んだデータからアイテムを作る
    const listItem = this.state.list.map(elm => {
      const sex =
        elm.status.sex === "女の子" ? (
          <span className="catList__icon">
            <i>
              <FontAwesomeIcon icon="venus" size="2x" color="#E19CD2" />
            </i>
          </span>
        ) : (
          <span>
            <i>
              <FontAwesomeIcon icon="mars" size="2x" color="#4CBFDA" />
            </i>
          </span>
        );
      const yellow = elm.status.yellowCar ? (
        <span className="catList__icon">
          <i>
            <FontAwesomeIcon icon="car-side" color="#F7AF31" />
          </i>
        </span>
      ) : null;
      const debut = !elm.status.debut ? (
        <span className="catList__icon">
          <i>
            <FontAwesomeIcon icon="birthday-cake" color="#EE411E" />
          </i>
        </span>
      ) : null;
      const profVideo = elm.status.profVideo ? (
        <span className="catList__icon">
          <i>
            <FontAwesomeIcon icon="video" color="#E2E448" />
          </i>
        </span>
      ) : null;
      const otherVideo = elm.status.otherVideo ? (
        <span className="catList__icon">
          <i>
            <FontAwesomeIcon icon="video" color="#174395" />
          </i>
        </span>
      ) : null;
      const shareHouse = elm.status.shareHouse ? (
        <span className="catList__icon">
          <i>
            <FontAwesomeIcon icon="home" color="#C23D86" />
          </i>
        </span>
      ) : null;

      return (
        <li className="catList__item" key={elm.status.num}>
          <a href={elm.url} target="_blank" rel="noopener noreferrer">
            <p className="catList__gender">{sex}</p>
            <figure className="catList__thumb">
              <img src={`img/${elm.status.num}.jpg`} alt={elm.status.num} />
            </figure>
            <div className="catList__label">
              <p className="catList__num">
                No.
                {elm.status.num}
              </p>
              <div>
                <p className="catList__status">
                  <span>{elm.status.age}</span>
                  {yellow}
                  {debut}
                  {profVideo}
                  {otherVideo}
                  {shareHouse}
                </p>
              </div>
            </div>
          </a>
        </li>
      );
    });

    return <ul className="catList">{listItem}</ul>;
  }
}

export default CatList;
