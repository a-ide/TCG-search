class Modal {
  constructor() {
    this.modalClass = 'modal'
  }

  addModal() {
    const newDiv = document.createElement('div')
    const newP = document.createElement('p')
    const newText = document.createTextNode('Now loading...')
    newDiv.classList.add(this.modalClass)
    newP.appendChild(newText)
    newDiv.appendChild(newP)
    document.body.appendChild(newDiv)
  }

  removeModal() {
    const modal = document.getElementsByClassName(this.modalClass)
    if (modal.length > 0) {
      document.body.removeChild(modal[0])
    }
  }
}

export default Modal
