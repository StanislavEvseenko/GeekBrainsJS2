class List {
    items = []

    constructor (item) {
        let goods = this.fetchGoods()
        goods = goods.map((cur, index) => {
            return new item(cur, index)
        })
        this.items.push(...goods)
        this.render()
    }
  
    fetchGoods () {
        return [
            { name: 'Shirt', price: 150 },
            { name: 'Socks', price: 15 },
            { name: 'Jacket', price: 50 },
            { name: 'Shoes', price: 1500 }
        ]
    }
  
    render () {
        this.items.forEach(good => {
            good.render()
        })
    }
}

class ListG {
    items = []
    

    constructor (item) {
        let goods = this.fetchGoods(item)
        goods.then(() => {
            this.render()
        })
    }
    
    fetchGoods(item) {
        const result = fetch(`http://localhost:3000/database${DataBase.databaseIndex}.json`)
        DataBase.databaseIndexAdd()
        return result
            .then(res => {
                return res.json()
            })
            .then(data => {
                this.items = data.data
                this.items = this.items.map((cur) => {
                    return new item(cur)
                })
            })
            .catch(res => {
                console.log(res)
                alert("Больше товаров нет!")
            })
    }
  
    render () {
        this.items.forEach(good => {
            good.render()
        })
    }
}

class GoodsList extends ListG {
    
    constructor(item) {
        super(item)
    }
    
}

const DataBase = {
    databaseIndex: 1,
    itemIndex: 0,

    databaseIndexAdd() {
        ++this.databaseIndex
    },

    itemIndexAdd() {
        ++this.itemIndex
    }
}

const BasketMassive = {
    massive: [],
    
    sumPrice() {
        let itemsPrice = 0
        this.massive.forEach(item => {
            const itemPrice = item.price * item.amount
            itemsPrice += itemPrice
        });
        document.querySelector('.basket-sum').innerText = itemsPrice
    },
    
    addMassive(name, price) {
        const massiveItem = new NewMassiveItem(name, price)
        
        if (BasketMassive.massive.length == 0) {
            BasketMassive.massive.push(massiveItem)
            
        } else {
            var keyItem = false
            var index = 0
            while (index < BasketMassive.massive.length) {
                    if (massiveItem.name === this.massive[index].name) {
                        this.increaseAmount(index)
                        keyItem = true
                        break
                    } 
                    index++
            }
            if (keyItem != true) {
                BasketMassive.massive.push(massiveItem)
                keyItem = true
            }
        }
    },

    reduceAmount(id)  {
        const item = --this.massive[id].amount
        if (item == 0) {
            this.dellMassive(id)
        }
    },

    increaseAmount(id) {
        ++this.massive[id].amount
    },

    dellMassive(id) {
        this.massive.splice(id, 1);
    }
}

class NewMassiveItem {
    name = ''
    price = 0
    amount = 1

    constructor(name, price) {
        this.name = name
        this.price = price
    }
}

class BasketList extends List {
    constructor(i) {
        super(i)
    }

    fetchGoods() {
        return BasketMassive.massive
    }
}

class CreateItem {
    name = 'item'
    price = 0
    number = 0
    class = 'list_item'
    place = 'list'
    amount = 1
    itemindex = 0
    
    constructor ({ name, price, amount }, index) {
        this.name = name
        this.price = price
        this.number = index
        this.amount = amount
    }
    renderbutton() {
        return new GoodsItemButton(DataBase.itemIndex).render()
    }
  
    render () {
        const placeToRender = document.querySelector(this.place)
        if (placeToRender) {
            const block = document.createElement('div')
            const itemName = document.createElement('h3')
            const itemPrice = document.createElement('p')
            const itemButton = this.renderbutton()
        	itemName.innerHTML = `${this.name}`
            itemPrice.innerHTML = `${this.price}`
            // block.id = 'div-' + DataBase.itemIndex
            block.id = 'div-' + this.number
            block.classList.add(this.class)
            block.appendChild(itemName)
            block.appendChild(itemPrice)
            block.appendChild(itemButton)
            placeToRender.appendChild(block)
            
        }
    }
}

class GoodsItem extends CreateItem {
    class = 'goods-list_item'
    place = '.goods-list'
    
    constructor(i) {
        super(i)
    }
    
    renderbutton() {
        return new GoodsItemButton(DataBase.itemIndex).render()
    }

    render () {
        const placeToRender = document.querySelector(this.place)
        if (placeToRender) {
            const block = document.createElement('div')
            const itemName = document.createElement('h3')
            const itemPrice = document.createElement('p')
            const itemButton = this.renderbutton()
        	itemName.innerHTML = `${this.name}`
            itemPrice.innerHTML = `${this.price}`
            block.id = 'div-' + DataBase.itemIndex
            // block.id = 'div-' + this.number
            block.classList.add(this.class)
            block.appendChild(itemName)
            block.appendChild(itemPrice)
            block.appendChild(itemButton)
            placeToRender.appendChild(block)
            DataBase.itemIndexAdd()
        }
    }
}

class BasketItem extends CreateItem {
    class = 'basket-list_item'
    place = '.basket-list'
    
    constructor(i, j) {
        super(i, j)
    }

    renderbutton() {
        let amount = this.amount
        const div = document.createElement('div')
        const btn1 = new BasketItemButtonDell(this.number).render()
        const span = document.createElement('span')
        span.innerText = amount
        const btn2 = new BasketItemButtonAdd(this.number).render()
        const btn3 = new BasketItemButtonDellAll(this.number).render()
        div.appendChild(btn1)
        div.appendChild(span)
        div.appendChild(btn2)
        div.appendChild(btn3)
        return div
    }
}

class Button {
    text = 'Button'
    id = ''
   
    constructor(id) {
        this.id = id
    }

    action() {
        console.log('Clicked')
    }
    
    idGenerate() {
        let id = 'btn-' + this.id
        return id
    }
    
    render() {
        const button = document.createElement('button')
        button.innerText = this.text
        button.id = this.idGenerate()
        button.addEventListener('click', this.action)
        return button
    }
}

class GoodsItemButton extends Button {
    text = 'Добавить в корзину'

    constructor(i) {
        super(i)
    }

    action() {
        const thisGood = document.querySelector('.goods-list').querySelector(`#div-${this.id.split('-')[1]}`)
        const thisName = thisGood.querySelector('h3').innerText
        const thisPrice = thisGood.querySelector('p').innerText
        BasketMassive.addMassive(thisName, thisPrice)
        document.querySelector('.basket-list').innerHTML = ''
        new BasketList(BasketItem)
        BasketMassive.sumPrice()
    }
}

class BasketItemButtonDell extends Button {
    text = '--'

    constructor(i) {
        super(i)
    }

    action() {
        const thisId = this.id.split('-')[1];
        BasketMassive.reduceAmount(thisId);
        document.querySelector('.basket-list').innerHTML = '';
        new BasketList(BasketItem);
        BasketMassive.sumPrice()
    }

}

class BasketItemButtonDellAll extends Button {
    text = 'Удалить всё'

    constructor(i) {
        super(i)
    }

    action() {
        const thisId = this.id.split('-')[1];
        BasketMassive.dellMassive(thisId);
        document.querySelector('.basket-list').innerHTML = '';
        new BasketList(BasketItem);
        BasketMassive.sumPrice()
    }
}

class BasketItemButtonAdd extends Button {
    text = '+'

    constructor(i) {
        super(i)
    }

    action() {
        const thisId = this.id.split('-')[1];
        BasketMassive.increaseAmount(thisId);
        document.querySelector('.basket-list').innerHTML = '';
        new BasketList(BasketItem);
        BasketMassive.sumPrice()
    }

}

class GoodsItemsAdd extends Button {
    text = 'Загрузить еще'

    constructor(i) {
        super(i)
    }

    action() {
        new GoodsList(GoodsItem)
    }

    render() {
        const button = document.createElement('button')
        button.innerText = this.text
        button.id = this.idGenerate()
        button.addEventListener('click', this.action)
        document.querySelector('.goods-button').appendChild(button)
    }

}

function main() {
    new GoodsItemsAdd('goods-add').render()
    new GoodsList(GoodsItem)
    new BasketList(BasketItem)
}
main()