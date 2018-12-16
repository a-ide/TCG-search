import React from "react";
import Icon from "./Icon";

const ICON_LIST = [
  { icon: "car-side", name: "譲渡会参加予定", color: "yellow" },
  { icon: "birthday-cake", name: "近日デビュー", color: "red" },
  { icon: "video", name: "紹介動画有り", color: "green" },
  { icon: "video", name: "その他の動画有り", color: "navy-blue" },
  { icon: "home", name: "シェアハウス入居", color: "purple" }
];

class IconList extends React.Component {
  state = {
    iconListDisplay: false
  };

  toggleDisplayed = () => {
    this.setState({ iconListDisplay: !this.state.iconListDisplay });
  };

  render() {
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
          {ICON_LIST.map(item => (
            <dl className="iconList__item" key={item.color}>
              <dt className="iconList__icon">
                <Icon icon={item.icon} color={`color-${item.color}`} />
              </dt>
              <dd>{item.name}</dd>
            </dl>
          ))}
        </div>
      </div>
    );
  }
}

export default IconList;
