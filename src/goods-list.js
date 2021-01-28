import List from './list.js';

export default class GoodsList extends List {
  
  constructor(item, button, basket, basItem) {
    super(item, button, basket, basItem)
    let goods = this.fetchGoods()
      goods.then(() => {
      this.render(this.buttonClass) 
    })
    this._buttonLoadMore()
  }
    
  _buttonLoadMore() {
    const PLACE_TO_RENDER = document.querySelector('.goods-button')
    const LOAD_MORE = new this.buttonClass('Загрузить еще!', 'load-more', PLACE_TO_RENDER)
    const BUTTON = document.querySelector('.goods-button .btn')
    BUTTON.addEventListener('click', () => {
      this.fetchGoods()
      .then(() => {
        this.render(this.buttonClass)
      })
    })
  }
  
  fetchGoods() {
    ++this._databaseIndex
    const RESULT = fetch(`database/database${this._databaseIndex}.json`)
    return RESULT
      .then(res => {
        return res.json()
      })
      .then(data => {
        this.items = data.data
        this.items = this.items.map((cur) => {
          return new this.goodsItemClass(cur)
        })
      })
      .catch(res => {
        this.items = []
        console.log(res)
        alert("Больше товаров нет!")
      })
  }
}