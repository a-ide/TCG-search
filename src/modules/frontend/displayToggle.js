const displayToggle = (target) => {
  document.getElementById(target)
    .addEventListener('click', (e) => {
      e.target.classList.toggle('is-open')
      e.target.nextElementSibling.classList.toggle('is-open')
    })
}

export default displayToggle
