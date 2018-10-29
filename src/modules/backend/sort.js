const sort = async list => {
  const childArray = [];
  const adultArray = [];

  list.forEach(item => {
    const { age } = item.status;

    if (/歳/.test(age)) {
      adultArray.push(item);
    } else {
      childArray.push(item);
    }
  });

  // 1 歳未満の猫を若い順にソート
  childArray.sort((a, b) => {
    const getFirtNum = item => item.status.age.substr(0, 1);
    const [aAge, bAge] = [getFirtNum(a), getFirtNum(b)];

    if (aAge > bAge) return 1;
    if (aAge < bAge) return -1;
    return 0;
  });

  // 1 歳以上の猫を若い順にソート
  adultArray.sort((a, b) => {
    const getNum = item => parseInt(item.status.age.replace(/[^0-9]/g, ""), 10);
    const [aAge, bAge] = [getNum(a), getNum(b)];

    if (aAge > bAge) return 1;
    if (aAge < bAge) return -1;
    return 0;
  });

  // ソートしたリストを合体
  return childArray.concat(adultArray);
};

export default sort;
