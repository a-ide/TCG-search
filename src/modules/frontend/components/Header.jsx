import React, { Component } from "react";
import Form from "../containers/Form";
import Icon from "./Icon";
import IconList from "./IconList";

export default class Header extends Component {
  state = {
    searchDisplay: false
  };

  toggleDisplayed = () => {
    this.setState({ searchDisplay: !this.state.searchDisplay });
  };

  render() {
    return (
      <header id="js-target-header" className="l-header">
        <div
          className={
            this.state.searchDisplay
              ? "l-header__inner is-open"
              : "l-header__inner"
          }
        >
          <h1 className="l-header__logo">
            <i className="c-icon">
              <Icon icon="paw" />
            </i>
            <span>TCG Search</span>
            <i className="c-icon">
              <Icon icon="paw" />
            </i>
          </h1>
          <div className="l-header__iconList">
            <IconList />
          </div>
        </div>
        <div
          className={
            this.state.searchDisplay
              ? "l-header__search is-open"
              : "l-header__search"
          }
        >
          <button onClick={this.toggleDisplayed} type="button">
            <Icon icon="search" color="color-gray" size="2x" />
          </button>
        </div>
        <div
          className={
            this.state.searchDisplay
              ? "l-header__form is-open"
              : "l-header__form"
          }
        >
          <Form list={this.props.list} isFetching={this.props.isFetching} />
        </div>
      </header>
    );
  }
}
