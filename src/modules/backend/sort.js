const sort = async (list) => {
  let childArray = []
  let adultArray = []

  list.map(item => {
    const age = item.status.age
    
    if((/歳/).test(age)) {
      adultArray.push(item)
    } else {
      childArray.push(item)
    }
  })

  // 1 歳未満の猫を若い順にソート
  childArray.sort((a, b) => {
    const aAge = a.status.age.substr(0, 1)
    const bAge = b.status.age.substr(0, 1)
    if (aAge > bAge) return 1
    if (aAge < bAge) return -1
    return 0
  })

  // 1 歳以上の猫を若い順にソート
  adultArray.sort((a, b) => {
    const aAge = parseInt(a.status.age.replace(/[^0-9]/g, ''))
    const bAge = parseInt(b.status.age.replace(/[^0-9]/g, ''))
    if (aAge > bAge) return 1
    if (aAge < bAge) return -1
    return 0
  })

  // ソートしたリストを合体
  return childArray.concat(adultArray)
}

export default sort
