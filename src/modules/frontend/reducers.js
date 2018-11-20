import { combineReducers } from "redux";
import { REQUEST_DATA, RECEIVE_DATA, FILTER_VALUE } from "./actions";

// リストを設定
const initialState = {
  isFetching: false,
  items: [],
  lastUpdated: null
};

const filteredList = (state = initialState, action) => {
  switch (action.type) {
    case REQUEST_DATA:
      return { ...state, isFetching: true };
    case RECEIVE_DATA:
      return {
        ...state,
        isFetching: false,
        items: action.lists,
        lastUpdated: action.lastUpdated
      };
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
      return { ...state, [action.name]: action.value };
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
