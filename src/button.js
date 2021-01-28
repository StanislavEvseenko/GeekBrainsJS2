export default class Button {
  _innerText = 'Кнопка'
  _id = ''

  constructor(text, id, place) {
    this._innerText = text
    this._id = id
    this.render(place)
  }

  render(placeToRender) {
    const BUTTON = document.createElement('button')
    BUTTON.innerText = this._innerText
    BUTTON.classList.add('btn')
    BUTTON.id = `btn-${this._id}`
    placeToRender.appendChild(BUTTON)
  }
}