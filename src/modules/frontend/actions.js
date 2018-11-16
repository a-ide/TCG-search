import axios from "axios";

export const REQUEST_DATA = "REQUEST_DATA";
export const RECEIVE_DATA = "RECEIVE_DATA";
export const FILTER_VALUE = "FILTER_VALUE";
export const RECONDUCT_FILTER = "RECONDUCT_FILTER";

const requestData = () => ({
  type: REQUEST_DATA
});

const receiveData = data => ({
  type: RECEIVE_DATA,
  lists: data.list,
  lastUpdated: data.lastUpdated
});

export function setFilteredValue(name, value) {
  return {
    type: FILTER_VALUE,
    name,
    value
  };
}

export const fetchDate = () => dispatch => {
  dispatch(requestData());
  return axios
    .get("./data/catList.json")
    .then(response => response.data)
    .then(data => dispatch(receiveData(data)));
};

const shouldFetchDate = state => {
  const data = state.filteredList;

  if (Object.keys(data).length === 0) {
    return true;
  }

  if (data.isFetching) {
    return false;
  }

  return state;
};

// リストデータを取得し、 receiveData を実行
export const fetchDataIfNeeded = () => (dispatch, getState) => {
  if (shouldFetchDate(getState())) {
    return dispatch(fetchDate());
  }
  return Promise.resolve;
};
