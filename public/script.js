class GoodsItem {
    title = 'apple';
    price = 35

    constructor(title, price) {
        this.title = title;
        this.price = price;
    }

    render() {
        return `<div class="goods-list_item"><h3>${this.title}</h3><p>${this.price}</p></div>`;
    }
}

class GoodsList {

    constructor() {
        this.goods = [];
    }

    fetchGoods() {
        this.goods = [
          { title: 'apple', price: 11500 },
          { title: 'samsung', price: 10450 },
          { title: 'xiaomi', price: 9020 },
          { title: 'meizu', price: 108 },
          { title: 'asus', price: 1500 },
          { title: 'acer', price: 1350 },
          { title: 'motorola', price: 980 },
          { title: 'sony', price: 450 },
          { title: 'lenovo', price: 378 },
          { title: 'braun', price: 46 },
          { title: 'toshiba', price: 578 },
          { title: 'vitek', price: 4500 },
        ];
    }

    render() {
        let listHtml = '';
        this.goods.forEach(good => {
            const goodItem = new GoodsItem(good.title, good.price);
            listHtml += goodItem.render();
        });
        
        document.querySelector('.goods-list').innerHTML = listHtml;
    }
}

const list = new GoodsList();
list.fetchGoods();
list.render();