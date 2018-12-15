import axios from "axios";

const getCatList = () =>
  axios.get("./data/catList.json").then(response => response.data);

export default getCatList;
