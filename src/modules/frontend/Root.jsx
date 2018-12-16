import React from "react";
import { Provider } from "react-redux";
import configureStore from "./configureStore";
import FilterApp from "./containers/FilterApp";

const store = configureStore();

const Root = () => (
  <Provider store={store}>
    <FilterApp />
  </Provider>
);

export default Root;
