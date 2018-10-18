const DisplayToggle = (target) => {
  document.getElementById(target)
    .addEventListener('click', (e) => {
      e.stopPropagation()
      e.target.classList.toggle('is-open')
      e.target.nextElementSibling.classList.toggle('is-open')
    })
}

export default DisplayToggle
