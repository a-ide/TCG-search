const SetHeaderHeight = () => {
  const height = document.getElementById('js-target-header')
  
  if (height !== null) {
    const newHeight = height.offsetHeight
    document.getElementById('js-target-content').style.paddingTop = `${newHeight}px`
  }
}

export default SetHeaderHeight
