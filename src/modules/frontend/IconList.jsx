import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

class IconList extends React.Component {
  constructor(props) {
    super(props)
    this.iconList = [
      { icon: "car-side", name: "譲渡会参加予定", color: "#F7AF31", link: "https://tokyocatguardian.org/yellow_car/" },
      { icon: "birthday-cake", name: "近日デビュー", color: "#EE411E" },
      { icon: "video", name: "紹介動画有り", color: "#E2E448" },
      { icon: "video", name: "その他の動画有り", color: "#174395" },
      { icon: "home", name: "シェアハウス入居", color: "#C23D86" }
    ]
  }

  render() {
    const listItem = this.iconList.map(item => {
      return (
        <dl className="iconList__item" key={item.color}>
          <dt className="iconList__icon"><FontAwesomeIcon icon={item.icon} color={item.color} /></dt>
          <dd>{item.name}</dd>
        </dl>
      )
    })
    return(
      <div className="iconList">
        <div id="js-toggle-trigger" className="iconList__trigger">
          <FontAwesomeIcon icon="question-circle" />
        </div>
        <div className="iconList__list">
          {listItem}
        </div>
      </div>
    )
  }
}

export default IconList
