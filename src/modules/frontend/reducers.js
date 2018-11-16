import { combineReducers } from "redux";
import { REQUEST_DATA, RECEIVE_DATA, FILTER_VALUE } from "./actions";

const data = (
  state = {
    isFetching: false,
    items: []
  },
  action
) => {
  switch (action.type) {
    case REQUEST_DATA:
      return Object.assign({}, state, {
        isFetching: true
      });
    case RECEIVE_DATA:
      return Object.assign({}, state, {
        isFetching: false,
        items: action.lists,
        lastUpdated: action.lastUpdated
      });
    default:
      return state;
  }
};

// リストを設定
const filteredList = (state = {}, action) => {
  switch (action.type) {
    case RECEIVE_DATA:
    case REQUEST_DATA:
      return Object.assign({}, state, data(state, action));
    default:
      return state;
  }
};

// option（条件）を設定
const filteredValue = (
  state = { age: "選択してください", sex: "選択してください" },
  action
) => {
  switch (action.type) {
    case FILTER_VALUE: {
      const newObj = Object.assign({}, state);
      const key = action.name;
      newObj[key] = action.value;
      return Object.assign({}, newObj);
    }
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  filteredList,
  filteredValue
});

export default rootReducer;
