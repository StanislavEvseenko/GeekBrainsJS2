export default class List {
  items = []
  goodsItemClass = null
  buttonClass = null
  basketClass = null
  basketItemClass = null
  _databaseIndex = 0

  constructor(item, button, basket, basItem) {
    this.goodsItemClass = item
    this.buttonClass = button
    this.basketClass = basket
    this.basketItemClass = basItem
  }

  fetchGoods () {
    return [
      { "name": "apple", "price": 11500 },
      { "name": "samsung", "price": 10450 },
      { "name": "xiaomi", "price": 9020 }
    ]
  }

  render() {
    this.items.forEach(good => {
      good.render(this.buttonClass, this.basketClass)
    })
  }
}