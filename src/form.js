export default class Form {
  patternName = /[A-ZА-Я][a-zа-яё]+/
  _patternTel = /\+7\([0-9]{3}\)[0-9]{3}-[0-9]{4}/
  _patternMail = /[0-9a-z]{2}[.-]*[0-9a-z]{4}@mail\.ru/
  _buttonClass = null

  constructor(buttonClass) {
    this._buttonClass = buttonClass
    this.render()
  }

  render() {
    const PLACE_TO_RENDER = document.querySelector('aside')
    if (PLACE_TO_RENDER) {
      const DIV = document.createElement('div')
      DIV.classList.add('form-wrap')
      DIV.innerHTML = `
        <form>
          <input type="text" id="form-name" placeholder="Иван">
          <input type="text" id="form-tel" placeholder="+7(900)000-0000">
          <input type="text" id="form-amail" placeholder="mymail@mail.ru">
        </form>
      `
      const BUTTON = new this._buttonClass('Отправить', 'form-submit', DIV)
      const SUBMIT_BTN = DIV.querySelector('button')
      SUBMIT_BTN.addEventListener('click', () => {
        this.validation()
      })
      PLACE_TO_RENDER.appendChild(DIV)
    }
  }

  validation() {
    const INPUT_NAME = document.getElementById("form-name")
    const INPUT_TEL = document.getElementById("form-tel")
    const INPUT_MAIL = document.getElementById("form-amail")
    if (INPUT_NAME.value) {
      console.log(this.patternName.test(INPUT_NAME.value) ? INPUT_NAME.value : 'Ошибка ввода имени!')
    }
    if (INPUT_TEL.value) {
      console.log(this._patternTel.test(INPUT_TEL.value) ? INPUT_TEL.value : 'Ошибка ввода телефона!')
    }
    if (INPUT_MAIL.value) {
      console.log(this._patternMail.test(INPUT_MAIL.value) ? INPUT_MAIL.value : 'Ошибка ввода почты!')
    }
  }
}