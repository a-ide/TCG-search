import React from "react";
import filteredList from "../FilterList";

const Circle = props => {
  const { list, filteredValue } = props;
  const newList = filteredList(list, filteredValue);

  return (
    <div className="circle">
      <p className="circle__inner">
        <span>{newList.length}</span>
        <span>{list.length}</span>
      </p>
    </div>
  );
};

export default Circle;
