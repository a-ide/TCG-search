import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Form from "../containers/Form";
import IconList from "./IconList";

const Header = props => (
  <header id="js-target-header" className="l-header">
    <div className="l-header__inner">
      <h1 className="l-header__logo">
        <i className="c-icon">
          <FontAwesomeIcon icon="paw" />
        </i>
        <span>TCG Search</span>
        <i className="c-icon">
          <FontAwesomeIcon icon="paw" />
        </i>
      </h1>
      <div className="l-header__iconList">
        <IconList />
      </div>
    </div>
    <div id="js-toggle-search" className="l-header__search">
      <span>
        <FontAwesomeIcon icon="search" color="#777" />
      </span>
    </div>
    <div className="l-header__form is-open">
      <Form
        list={props.list}
        dispatch={props.dispatch}
        isFetching={props.isFetching}
      />
    </div>
  </header>
);

export default Header;
