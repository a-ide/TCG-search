import { combineReducers } from "redux";
import { REQUEST_DATA, RECEIVE_DATA, FILTER_VALUE } from "./actions";

// リストを設定
const initialState = {
  list: {
    isFetching: false,
    items: [],
    lastUpdated: null
  },
  option: { age: "選択してください", sex: "選択してください" }
};

const filteredList = (state = initialState.list, action) => {
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
const filteredValue = (state = initialState.option, action) => {
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
