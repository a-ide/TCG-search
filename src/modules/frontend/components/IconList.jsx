import React from "react";
import Icon from "./Icon";

class IconList extends React.Component {
  constructor(props) {
    super(props);
    this.iconList = [
      { icon: "car-side", name: "譲渡会参加予定", color: "yellow" },
      { icon: "birthday-cake", name: "近日デビュー", color: "red" },
      { icon: "video", name: "紹介動画有り", color: "green" },
      { icon: "video", name: "その他の動画有り", color: "navy-blue" },
      { icon: "home", name: "シェアハウス入居", color: "purple" }
    ];
  }

  render() {
    const listItem = this.iconList.map(item => (
      <dl className="iconList__item" key={item.color}>
        <dt className="iconList__icon">
          <Icon icon={item.icon} color={`color-${item.color}`} />
        </dt>
        <dd>{item.name}</dd>
      </dl>
    ));

    return (
      <div className="iconList">
        <div id="js-toggle-trigger" className="iconList__trigger">
          <Icon icon="question-circle" />
        </div>
        <div className="iconList__list">{listItem}</div>
      </div>
    );
  }
}

export default IconList;
