class List {
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

class GoodsList extends List {
    
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
        const RESULT = fetch(`database${this._databaseIndex}.json`)
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

class BasketList extends List {

    constructor(item, button, basket, basItem) {
        super(item, button, basket, basItem)
        this.sumPrice()
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

class GoodsItem {
    name = 'Товар'
    price = 0

    constructor({name, price}) {
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

class BasketItem extends GoodsItem {
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

class CreateButton {
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

const BASKET_LIST = new BasketList(GoodsItem, CreateButton, BasketList, BasketItem)
const GOODS_LIST = new GoodsList(GoodsItem, CreateButton, BASKET_LIST, BasketItem)