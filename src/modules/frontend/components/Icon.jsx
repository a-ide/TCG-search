import React from "react";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faVenus,
  faMars,
  faVideo,
  faHome,
  faPaw,
  faCarSide,
  faBirthdayCake,
  faQuestionCircle,
  faSearch
} from "@fortawesome/free-solid-svg-icons";

library.add(
  faVenus,
  faMars,
  faVideo,
  faHome,
  faPaw,
  faCarSide,
  faBirthdayCake,
  faQuestionCircle,
  faSearch
);

const Icon = props => {
  let colorCode;
  const { icon, size, color } = props || {
    icon: null,
    size: null,
    color: null
  };

  switch (color) {
    case "color-gray":
      colorCode = "#777";
      break;
    case "color-pink":
      colorCode = "#e19cd2";
      break;
    case "color-blue":
      colorCode = "#4cbfda";
      break;
    case "color-yellow":
      colorCode = "#f7af31";
      break;
    case "color-red":
      colorCode = "#ee411e";
      break;
    case "color-green":
      colorCode = "#e2e448";
      break;
    case "color-navy-blue":
      colorCode = "#174395";
      break;
    case "color-purple":
      colorCode = "#c23d86";
      break;
    default:
      colorCode = null;
  }
  return <FontAwesomeIcon icon={icon} size={size} color={colorCode} />;
};

export default Icon;
