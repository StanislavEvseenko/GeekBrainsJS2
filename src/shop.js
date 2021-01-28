import Button from './button.js';
import Form from './form.js';
import GoodsItem from './goods-item.js';
import BasketItem from './basket-item.js';
import List from './list.js';
import GoodsList from './goods-list.js';
import BasketList from './basket-list';
import './style.css';

const BASKET_LIST = new BasketList( GoodsItem, Button, BasketList, BasketItem );
const GOODS_LIST = new GoodsList( GoodsItem, Button, BASKET_LIST, BasketItem );
const FORM = new Form( Button );
console.log('lesson5')