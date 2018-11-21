import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchDataIfNeeded } from "../actions";
import Header from "../components/Header";
import List from "./List";
import Remark from "../components/Remark";
import Circle from "./Circle";
import Modal from "../Modal";

class AsyncApp extends Component {
  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(fetchDataIfNeeded());
  }

  render() {
    const { isFetching, items, lastUpdated, filteredValue } = this.props;

    const modal = new Modal();
    if (isFetching === undefined) {
      modal.addModal();
    }
    if (!isFetching) {
      modal.removeModal();
    }

    return (
      <div>
        <Header list={items} isFetching={isFetching} />
        <div id="js-target-content" className="l-main">
          <div className="l-main__inner">
            <Remark lastUpdated={lastUpdated} />
            {items.length > 0 && (
              <div className="l-main__list">
                <List
                  list={items}
                  filteredValue={filteredValue}
                  lastUpdated={lastUpdated}
                />
              </div>
            )}
            <div className="l-main__result">
              <Circle list={items} filteredValue={filteredValue} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  const { filteredList, filteredValue } = state;
  const { isFetching, items, lastUpdated } = filteredList || {
    isFetching: true,
    items: []
  };
  return { isFetching, items, lastUpdated, filteredValue };
};

export default connect(mapStateToProps)(AsyncApp);
