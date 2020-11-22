
// Массив для корзины
const BasketMassive = {
    massive: [],
    
    // добавить товар в массив
    addMassive(name, price) {
        const massiveItem = new NewMassiveItem(name, price);
        this.massive.push(massiveItem);
    },

    dellMassive(id) {
        this.massive.splice(id, 1);
    }

}
// Новый элемент массива корзины
class NewMassiveItem {
    name = '';
    price = 0;
    amount = 1;

    constructor(name, price) {
        this.name = name;
        this.price = price;
    }
}



class CreateItem {
    name = '';
    price = 1;
    place = '';
    number = 0;
    buttonInnerText = '';
    

    constructor({ name, price }, index) {
        this.name = name;
        this.price = price;
        this.number = index;
    }

    createButton() {
        const button = document.createElement('button');
        button.innerText = this.buttonInnerText;
        button.id = 'btn-' + this.number;
        
        button.addEventListener('click', this.buttonClick);
        return button;
    }

    render() {
        const placeToRender = document.querySelector(this.place);

        if (placeToRender) {
            const innerH = document.createElement('h3');
            innerH.innerHTML = `${this.name}`;
            const innerP = document.createElement('p');
            innerP.innerHTML = `${this.price}`;

            


            const block = document.createElement('div');
            block.id = 'div-' + this.number;
            block.classList.add('list-item');
            block.appendChild(innerH);
            block.appendChild(innerP);

            // СОЗДАНИЕ КНОПКИ
            const button = this.createButton(this.buttonAction);

            block.appendChild(button);

            placeToRender.appendChild(block);
        }
    }
}

class GoodItem extends CreateItem {
    place = '.goods-list';
    buttonInnerText = '+';
    
    constructor(i, j) {
        super(i, j);
    }

    buttonClick() {
        // получили доступ к карточке нашего товара
        const thisGood = document.querySelector('.goods-list').querySelector(`#div-${this.id.split('-')[1]}`);
        // взяли название и цену
        const thisName = thisGood.querySelector('h3').innerText;
        const thisPrice = thisGood.querySelector('p').innerText;
        BasketMassive.addMassive(thisName, thisPrice);
        document.querySelector('.basket-list').innerHTML = '';
        new BasketList(BasketItem);

    }
}

class BasketItem extends CreateItem {
    place = '.basket-list';
    buttonInnerText = '-';
    buttonAction = BasketMassive.dellMassive;
    
    constructor(i, j) {
        super(i, j);
    }

    buttonClick() {
        // взяли индекс кнопки
        const thisId = this.id.split('-')[1];
        // и передали его
        BasketMassive.dellMassive(thisId);
        document.querySelector('.basket-list').innerHTML = '';
        new BasketList(BasketItem);

    }
    
}


class List {
    items = [];

    constructor(i) {
        let goods = this.fetchGoods();

        goods = goods.map((cur, index) => {
            return new i(cur, index);
        });

        this.items.push(...goods);

        this.render();
    }

    fetchGoods() {
        return [
            { name: 'apple', price: 11500 }
          ] 
    }

    render() {
        this.items.forEach(good => {
            good.render()
        })
      }
}

class GoodsList extends List {
    
    constructor(i) {
        super(i);
    }

    fetchGoods() {
        return [
            { name: 'apple', price: 11500 },
            { name: 'samsung', price: 10450 },
            { name: 'xiaomi', price: 9020 },
            { name: 'meizu', price: 108 },
            { name: 'asus', price: 1500 },
            { name: 'acer', price: 1350 },
            { name: 'motorola', price: 980 },
            { name: 'sony', price: 450 },
            { name: 'lenovo', price: 378 },
            { name: 'braun', price: 46 },
            { name: 'toshiba', price: 578 },
            { name: 'vitek', price: 4500 },
        ] 
    }
}

class BasketList extends List {
    
    constructor(i) {
        super(i);
    }

    fetchGoods() {
        return BasketMassive.massive;
    }
}


const ListInstance = new GoodsList(GoodItem);
const ListInstanc = new BasketList(BasketItem);



