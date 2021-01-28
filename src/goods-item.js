export default class GoodsItem {
  name = 'Товар'
  price = 0

  constructor({ name, price }) {
    this.name = name
    this.price = price
  }

  render(buttonClass, basketClass) {
    const PLACE_TO_RENDER = document.querySelector('.goods-list')
    if (PLACE_TO_RENDER) {
      const GOODS = PLACE_TO_RENDER.querySelectorAll('.goods-list_item').length + 1
      const DIV = document.createElement('div')
      DIV.classList.add('goods-list_item')
      DIV.id = `good-${GOODS}`
      DIV.innerHTML = `
        <h3>${this.name}</h3>
        <span>${this.price}</span>
      `
      const ITEM_ADD = new buttonClass('Добавить в корзину', `item-add-${GOODS}`, DIV)
      const BUTTON = DIV.querySelector('button')
      BUTTON.addEventListener('click', () => {
        basketClass.addMassive(this.name, this.price)
        const PROMISE_RES = Promise.resolve()
        return PROMISE_RES
        .then(() => {
          basketClass.sumPrice()
        })
        
      })
      PLACE_TO_RENDER.appendChild(DIV)
    }
  }
}