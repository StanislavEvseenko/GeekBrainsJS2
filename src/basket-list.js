import List from './list.js';

export default class BasketList extends List {

  constructor(item, button, basket, basItem) {
    super(item, button, basket, basItem)
    this.sumPrice()
    this.buttonBasket(button)
  }

  buttonBasket(buttonClass) {
    const BASKET = document.querySelector('.basket')
    const BASKET_BTN_WRAP = document.querySelector('.basket-button-wrap')
    const BASKET_LIST = document.querySelector('.basket-list')
    const BASKET_SUM = document.querySelector('.basket-sum')
    const NEW_BUTTON = new buttonClass('Корзина', 'basket', BASKET_BTN_WRAP)
    const BUTTON = document.querySelector('#btn-basket')
    BUTTON.addEventListener('click', () => {
      BASKET_LIST.classList.toggle('basket-block')
      BASKET_SUM.classList.toggle('basket-block')
      BASKET.classList.toggle('h-50')
    })
    

  }
  sumPrice() {
    let itemsPrice = 0
    this.items.forEach(item => {
      const itemPrice = item.price * item.amount
      itemsPrice += itemPrice
    });
    document.querySelector('.basket-sum').innerText = itemsPrice
  }

  addMassive(name, price, action) {
    const BASKET = document.querySelector('.basket-list')
    BASKET.innerHTML = ''
    let goods = this.fetchGoods(name, price, action)
    goods.then(() => {
      this.render(this.buttonClass)
    })
    
  }

  buttonAction() {
    const BASKET = document.querySelector('.basket-list')
    BASKET.innerHTML = ''
    let goods = this.mappingItems()
    goods.then(() => {
      this.render(this.buttonClass)
    })
    
  }

  mappingItems() {
    const PROMISE_RES = Promise.resolve()
    return PROMISE_RES
    .then(() => {
      this.items = this.items.map((cur) => {
        return new this.basketItemClass(cur, this)
      })
    })
  }

  fetchGoods(name, price) {
    let NEW_ITEM = { "name": name, "price": price }
    const PROMISE_RES = Promise.resolve(NEW_ITEM)
    return PROMISE_RES
    .then(res => {
      if (this.items.length == 0) {
        this.items.push(res)
      } else {
        var keyItem = false
        var index = 0
        while (index < this.items.length) {
          if (res.name === this.items[index].name) {
            this.increaseAmount(index)
            keyItem = true
            break
          }
          index++
        }
        if (keyItem != true) {
          this.items.push(res)
          keyItem = true
        }
      }
      this.items = this.items.map((cur) => {
        return new this.basketItemClass(cur, this)
      })
    })
    .catch(res => {
      console.log(res)
    })
  }

  reduceAmount(id)  {
    const item = --this.items[id].amount
    if (item == 0) {
      this.dellMassive(id)
    }
  }

  increaseAmount(id) {
    ++this.items[id].amount
  }

  dellMassive(id) {
    this.items.splice(id, 1)
  }

}