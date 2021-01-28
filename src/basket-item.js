import GoodsItem from './goods-item.js';

export default class BasketItem extends GoodsItem {
  amount = 1
  basket = null
   
  constructor({name, price, amount}, basket) {
    super({name, price})
    if (amount) {
      this.amount = amount
    }
    this.basket = basket
  }

  render(buttonClass) {
    const PLACE_TO_RENDER = document.querySelector('.basket-list')
    if (PLACE_TO_RENDER) {
      const GOODS = PLACE_TO_RENDER.querySelectorAll('.basket-list_item').length
      const DIV = document.createElement('div')
      DIV.classList.add('basket-list_item')
      DIV.id = `basket-good-${GOODS}`
      DIV.innerHTML = `
        <h3>${this.name}</h3>
        <span>${this.price}</span>
      `
      const ITEM_ADD = new buttonClass('+', `item-add-${GOODS}`, DIV)
      const AMOUNT = document.createElement('span')
      AMOUNT.innerText = this.amount
      DIV.appendChild(AMOUNT)
      const ITEM_DELL = new buttonClass('-', `item-dell-${GOODS}`, DIV)
      const ITEM_ERASE = new buttonClass('Удалить', `item-erase-${GOODS}`, DIV)
      const BUTTON_ADD = DIV.querySelector(`#btn-item-add-${GOODS}`)
      BUTTON_ADD.addEventListener('click', () => {
        this.basket.increaseAmount(GOODS)
        this.basket.sumPrice()
        const PROMISE_RES = Promise.resolve()
        return PROMISE_RES
        .then(() => {
          this.basket.buttonAction()
          return
        })
      })
      const BUTTON_DELL = DIV.querySelector(`#btn-item-dell-${GOODS}`)
      BUTTON_DELL.addEventListener('click', () => {
        this.basket.reduceAmount(GOODS)
        this.basket.sumPrice()
        const PROMISE_RES = Promise.resolve()
        return PROMISE_RES
        .then(() => {
          this.basket.buttonAction()
          return
        })
      })
      const BUTTON_ERASE = DIV.querySelector(`#btn-item-erase-${GOODS}`)
      BUTTON_ERASE.addEventListener('click', () => {
        this.basket.dellMassive(GOODS)
        this.basket.sumPrice()
        const PROMISE_RES = Promise.resolve()
        return PROMISE_RES
        .then(() => {
          this.basket.buttonAction()
          return
        })
      })
      PLACE_TO_RENDER.appendChild(DIV)
    }
  }
}