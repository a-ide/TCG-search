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
    this.state = {
      iconListDisplay: false
    };
    this.toggleDisplayed = this.toggleDisplayed.bind(this);
  }

  toggleDisplayed() {
    this.setState({ iconListDisplay: !this.state.iconListDisplay });
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
        <button
          onClick={this.toggleDisplayed}
          type="button"
          className={
            this.state.iconListDisplay
              ? "iconList__trigger is-open"
              : "iconList__trigger"
          }
        >
          <Icon icon="question-circle" size="2x" />
        </button>
        <div
          className={
            this.state.iconListDisplay
              ? "iconList__list is-open"
              : "iconList__list"
          }
        >
          {listItem}
        </div>
      </div>
    );
  }
}

export default IconList;
