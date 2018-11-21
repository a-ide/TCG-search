import React, { Component } from "react";
import Icon from "../components/Icon";

export default class List extends Component {
  render() {
    const { isFetching, list, filteredValue } = this.props;
    let newList = [];

    const filteredList = (items, conditions) =>
      items.filter(item => {
        /* eslint-disable no-unused-vars */
        const matches = Object.entries(conditions).map(
          ([key, value]) =>
            value === "選択してください" || item.status[key] === value
        );

        return matches.every(isMatched => isMatched);
      });

    newList = filteredList(list, filteredValue);

    const createIcon = type => {
      switch (type) {
        case "yelloCar":
          return <Icon icon="car-side" color="color-yellow" />;
        case "debut":
          return <Icon icon="birthday-cake" color="color-red" />;
        case "profVideo":
          return <Icon icon="video" color="color-green" />;
        case "otherVideo":
          return <Icon icon="video" color="color-navy-blue" />;
        case "shareHouse":
          return <Icon icon="home" color="color-purple" />;
        default:
          return null;
      }
    };

    return (
      <div>
        {!isFetching &&
          newList.length === 0 && <p>条件に該当するにゃんこはいません。</p>}
        <ul className="catList">
          {newList.map(item => {
            const sex =
              item.status.sex === "女の子" ? (
                <span className="catList__icon">
                  <i>
                    <Icon icon="venus" size="2x" color="color-pink" />
                  </i>
                </span>
              ) : (
                <span>
                  <i>
                    <Icon icon="mars" size="2x" color="color-blue" />
                  </i>
                </span>
              );
            const yellow = (
              <span className="catList__icon">
                <i>
                  <Icon icon="car-side" color="color-yellow" />
                </i>
              </span>
            );
            const debut = (
              <span className="catList__icon">
                <i>
                  <Icon icon="birthday-cake" color="color-red" />
                </i>
              </span>
            );
            const profVideo = (
              <span className="catList__icon">
                <i>
                  <Icon icon="video" color="color-green" />
                </i>
              </span>
            );
            const otherVideo = (
              <span className="catList__icon">
                <i>
                  <Icon icon="video" color="color-navy-blue" />
                </i>
              </span>
            );
            const shareHouse = (
              <span className="catList__icon">
                <i>
                  <Icon icon="home" color="color-purple" />
                </i>
              </span>
            );

            return (
              <li className="catList__item" key={item.status.num}>
                <a href={item.url} target="_blank" rel="noopener noreferrer">
                  <p className="catList__gender">{sex}</p>
                  <figure className="catList__thumb">
                    <img
                      src={`img/${item.status.num}.jpg`}
                      alt={item.status.num}
                    />
                  </figure>
                  <div className="catList__label">
                    <p className="catList__num">
                      No.
                      {item.status.num}
                    </p>
                    <div>
                      <p className="catList__status">
                        <span>{item.status.age}</span>
                        {!item.status.debut && createIcon("debut")}
                        {item.status.profVideo && createIcon("profVideo")}
                        {item.status.otherVideo && createIcon("otherVideo")}
                        {item.status.shareHouse && createIcon("shareHouse")}
                      </p>
                    </div>
                  </div>
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}
