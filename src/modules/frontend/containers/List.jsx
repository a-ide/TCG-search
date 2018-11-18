import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default class List extends Component {
  render() {
    const { isFetching, list, filteredValue } = this.props;
    let newList = [];

    if (list) {
      const filteredList = (items, conditions) => {
        return items.filter(item => {
          /* eslint-disable no-unused-vars */
          const matches = Object.entries(conditions).map(([key, value]) => {
            return value === "選択してください" || item.status[key] === value;
          });

          return matches.every(isMatched => isMatched);
        });
      };

      newList = filteredList(list, filteredValue);
    }

    return (
      <div>
        {newList &&
          !isFetching &&
          newList.length === 0 && <p>条件に該当するにゃんこはいません。</p>}
        <ul className="catList">
          {newList &&
            newList.map(item => {
              const sex =
                item.status.sex === "女の子" ? (
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
              const yellow = item.status.yellowCar ? (
                <span className="catList__icon">
                  <i>
                    <FontAwesomeIcon icon="car-side" color="#F7AF31" />
                  </i>
                </span>
              ) : null;
              const debut = !item.status.debut ? (
                <span className="catList__icon">
                  <i>
                    <FontAwesomeIcon icon="birthday-cake" color="#EE411E" />
                  </i>
                </span>
              ) : null;
              const profVideo = item.status.profVideo ? (
                <span className="catList__icon">
                  <i>
                    <FontAwesomeIcon icon="video" color="#E2E448" />
                  </i>
                </span>
              ) : null;
              const otherVideo = item.status.otherVideo ? (
                <span className="catList__icon">
                  <i>
                    <FontAwesomeIcon icon="video" color="#174395" />
                  </i>
                </span>
              ) : null;
              const shareHouse = item.status.shareHouse ? (
                <span className="catList__icon">
                  <i>
                    <FontAwesomeIcon icon="home" color="#C23D86" />
                  </i>
                </span>
              ) : null;

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
            })}
        </ul>
      </div>
    );
  }
}
