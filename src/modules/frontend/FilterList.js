const FilterList = (items, conditions) =>
  items.filter(item => {
    /* eslint-disable no-unused-vars */
    const matches = Object.entries(conditions).map(
      ([key, value]) =>
        value === "選択してください" || item.status[key] === value
    );
    return matches.every(isMatched => isMatched);
  });

export default FilterList;
