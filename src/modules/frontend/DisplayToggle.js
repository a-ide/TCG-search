import SetHeaderHeight from './SetHeaderHeight'

const DisplayToggle = (target) => {
  document.getElementById(target)
    .addEventListener('click', (e) => {
      e.stopPropagation()
      e.target.classList.toggle('is-open')
      e.target.nextElementSibling.classList.toggle('is-open')


      if (e.target.getAttribute('id') === 'js-toggle-search') {
        SetHeaderHeight()
      }
    })
}

export default DisplayToggle
