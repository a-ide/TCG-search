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

const getColorCode = colorName => {
  switch (colorName) {
    case "color-gray":
      return "#777";
    case "color-pink":
      return "#e19cd2";
    case "color-blue":
      return "#4cbfda";
    case "color-yellow":
      return "#f7af31";
    case "color-red":
      return "#ee411e";
    case "color-green":
      return "#e2e448";
    case "color-navy-blue":
      return "#174395";
    case "color-purple":
      return "#c23d86";
    default:
      return null;
  }
};

const Icon = props => {
  const { icon, size, color } = props || {
    icon: null,
    size: null,
    color: null
  };

  return (
    <FontAwesomeIcon icon={icon} size={size} color={getColorCode(color)} />
  );
};

export default Icon;
