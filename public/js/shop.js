(()=>{"use strict";var e={705:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n=e(t);return t[2]?"@media ".concat(t[2]," {").concat(n,"}"):n})).join("")},t.i=function(e,n,r){"string"==typeof e&&(e=[[null,e,""]]);var i={};if(r)for(var s=0;s<this.length;s++){var o=this[s][0];null!=o&&(i[o]=!0)}for(var a=0;a<e.length;a++){var l=[].concat(e[a]);r&&i[l[0]]||(n&&(l[2]?l[2]="".concat(n," and ").concat(l[2]):l[2]=n),t.push(l))}},t}},426:(e,t,n)=>{n.d(t,{Z:()=>s});var r=n(705),i=n.n(r)()((function(e){return e[1]}));i.push([e.id,"* {\r\n  margin: 0;\r\n  padding: 0;\r\n}\r\nbody {\r\n  display: flex;\r\n  font-family: 'Roboto', sans-serif;\r\n  color: rgb(19, 19, 19);\r\n  background-color: rgb(237, 237, 237);\r\n}\r\nheader {\r\n  width: 100%;\r\n  height: 50px;\r\n  padding-right: 30px;\r\n  padding-left: 30px;\r\n  box-sizing: border-box;\r\n  position: fixed;\r\n  display: flex;\r\n  justify-content: space-between;\r\n  top: 0;\r\n  background-color:rgb(65, 65, 65);\r\n}\r\nheader span {\r\n  margin-top: auto;\r\n  margin-bottom: auto;\r\n  color: #ffffff;\r\n}\r\naside {\r\n  width: 300px;\r\n  height: 100vh;\r\n  padding-top: 50px;\r\n  box-sizing: border-box;\r\n  display: flex;\r\n  background-color: rgb(215, 215, 215);\r\n}\r\n\r\n.form-wrap {\r\n  width: 250px;\r\n  margin: auto;\r\n  display: flex;\r\n  flex-direction: column;\r\n}\r\n.form-wrap>form {\r\n  width: 100%;\r\n  display: flex;\r\n  box-sizing: border-box;\r\n  flex-direction: column;\r\n}\r\n.form-wrap>form input {\r\n  height: 25px;\r\n  margin: 10px;\r\n  padding: 7px;\r\n  box-sizing: border-box;\r\n}\r\n.form-wrap>button {\r\n  margin: auto;\r\n}\r\n\r\nmain {\r\n  width: calc(100% - 300px);\r\n  height: 100vh;\r\n  padding-top: 50px;\r\n  box-sizing: border-box;\r\n  display: flex;\r\n}\r\n.goods-list {\r\n  width: 100%;\r\n  height: calc(100% - 70px);\r\n  overflow-y: scroll;\r\n  box-sizing: border-box;\r\n  justify-content: center;\r\n  display: flex;\r\n  flex-wrap: wrap;\r\n}\r\n.goods {\r\n  width: 100%;\r\n  height: 100%;\r\n  box-sizing: border-box;\r\n  justify-content: center;\r\n  display: flex;\r\n  flex-direction: column;\r\n}\r\n.goods-button {\r\n  width: 100%;\r\n  height: 70px;\r\n  align-items: center;\r\n  text-align: center;\r\n  box-sizing: border-box;\r\n  padding: 15px;\r\n  background-color:rgb(65, 65, 65);\r\n}\r\n.basket {\r\n  width: 500px;\r\n  height: 300px;\r\n  margin-left: auto;\r\n  box-sizing: border-box;\r\n  display: flex;\r\n  flex-direction: column;\r\n}\r\n.basket-button-wrap {\r\n  height: 50px;\r\n  display: flex;\r\n  margin-left: auto;\r\n}\r\n.basket-button-wrap>button {\r\n  margin-top: auto;\r\n  margin-bottom: auto;\r\n  margin-left: auto;\r\n\r\n}\r\n.basket-list {\r\n  width: 100%;\r\n  height: calc(100% - 50px);\r\n  margin-top: 6px;\r\n  overflow-y: scroll;\r\n  box-sizing: border-box;\r\n  display: none;\r\n  background-color:rgb(75, 75, 75);\r\n}\r\n.basket-sum {\r\n  width: 100%;\r\n  height: 35px;\r\n  text-align: center;\r\n  box-sizing: border-box;\r\n  padding: 5px;\r\n  display: none;\r\n  background-color:rgb(65, 65, 65);\r\n}\r\n.basket-block {\r\n  display: block !important;\r\n}\r\n.h-50 {\r\n  height: 50px !important;\r\n}\r\n.goods-list_item {\r\n  width: 250px;\r\n  height: 200px;\r\n  margin: 10px;\r\n  justify-content: center;\r\n  align-items: center;\r\n  text-transform: uppercase;\r\n  display: flex;\r\n  flex-direction: column;\r\n  box-sizing: border-box;\r\n  border: 1px solid rgb(57, 57, 57);\r\n  background-color: rgb(237, 237, 237);\r\n}\r\n.basket-list_item {\r\n  height: 35px;\r\n  margin: 5px;\r\n  padding: 5px;\r\n  text-transform: uppercase;\r\n  display: flex;\r\n  /* justify-content: space-between; */\r\n  box-sizing: border-box;\r\n  border: 1px solid rgb(57, 57, 57);\r\n  background-color: rgb(237, 237, 237);\r\n}\r\n.basket-list_item > :nth-child(1) {\r\n  margin-right: 20px;\r\n}\r\n.basket-list_item > :nth-child(3) {\r\n  margin-left: auto;\r\n}\r\n.basket-list_item > :nth-child(4) {\r\n  margin-left: 10px;\r\n  margin-right: 10px;\r\n}\r\n.basket-list_item > :nth-child(5) {\r\n  margin-right: 10px;\r\n}\r\n\r\n\r\n.list_item {\r\n  width: 150px;\r\n  height: 200px;\r\n  margin: 10px;\r\n  justify-content: center;\r\n  align-items: center;\r\n  text-transform: uppercase;\r\n  display: flex;\r\n  flex-direction: column;\r\n  box-sizing: border-box;\r\n  background-color: rgb(54, 69, 138);\r\n}\r\n\r\n.btn {\r\n  background: rgb(43, 43, 43);\r\n  border: none !important;\r\n  padding: 10px;\r\n  cursor: pointer;\r\n  border-radius: 5px;\r\n  color: #ffffff;\r\n}\r\n.btn:hover {\r\n  background: rgb(33, 33, 33);\r\n  border: none !important;\r\n}",""]);const s=i},379:(e,t,n)=>{var r,i=function(){var e={};return function(t){if(void 0===e[t]){var n=document.querySelector(t);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}e[t]=n}return e[t]}}(),s=[];function o(e){for(var t=-1,n=0;n<s.length;n++)if(s[n].identifier===e){t=n;break}return t}function a(e,t){for(var n={},r=[],i=0;i<e.length;i++){var a=e[i],l=t.base?a[0]+t.base:a[0],c=n[l]||0,d="".concat(l," ").concat(c);n[l]=c+1;var u=o(d),h={css:a[1],media:a[2],sourceMap:a[3]};-1!==u?(s[u].references++,s[u].updater(h)):s.push({identifier:d,updater:p(h,t),references:1}),r.push(d)}return r}function l(e){var t=document.createElement("style"),r=e.attributes||{};if(void 0===r.nonce){var s=n.nc;s&&(r.nonce=s)}if(Object.keys(r).forEach((function(e){t.setAttribute(e,r[e])})),"function"==typeof e.insert)e.insert(t);else{var o=i(e.insert||"head");if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(t)}return t}var c,d=(c=[],function(e,t){return c[e]=t,c.filter(Boolean).join("\n")});function u(e,t,n,r){var i=n?"":r.media?"@media ".concat(r.media," {").concat(r.css,"}"):r.css;if(e.styleSheet)e.styleSheet.cssText=d(t,i);else{var s=document.createTextNode(i),o=e.childNodes;o[t]&&e.removeChild(o[t]),o.length?e.insertBefore(s,o[t]):e.appendChild(s)}}function h(e,t,n){var r=n.css,i=n.media,s=n.sourceMap;if(i?e.setAttribute("media",i):e.removeAttribute("media"),s&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(s))))," */")),e.styleSheet)e.styleSheet.cssText=r;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(r))}}var m=null,b=0;function p(e,t){var n,r,i;if(t.singleton){var s=b++;n=m||(m=l(t)),r=u.bind(null,n,s,!1),i=u.bind(null,n,s,!0)}else n=l(t),r=h.bind(null,n,t),i=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)};return r(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;r(e=t)}else i()}}e.exports=function(e,t){(t=t||{}).singleton||"boolean"==typeof t.singleton||(t.singleton=(void 0===r&&(r=Boolean(window&&document&&document.all&&!window.atob)),r));var n=a(e=e||[],t);return function(e){if(e=e||[],"[object Array]"===Object.prototype.toString.call(e)){for(var r=0;r<n.length;r++){var i=o(n[r]);s[i].references--}for(var l=a(e,t),c=0;c<n.length;c++){var d=o(n[c]);0===s[d].references&&(s[d].updater(),s.splice(d,1))}n=l}}}}},t={};function n(r){if(t[r])return t[r].exports;var i=t[r]={id:r,exports:{}};return e[r](i,i.exports,n),i.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{function e(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}class t{constructor(t,n,r){e(this,"_innerText","Кнопка"),e(this,"_id",""),this._innerText=t,this._id=n,this.render(r)}render(e){const t=document.createElement("button");t.innerText=this._innerText,t.classList.add("btn"),t.id=`btn-${this._id}`,e.appendChild(t)}}function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}class s{constructor({name:e,price:t}){i(this,"name","Товар"),i(this,"price",0),this.name=e,this.price=t}render(e,t){const n=document.querySelector(".goods-list");if(n){const r=n.querySelectorAll(".goods-list_item").length+1,i=document.createElement("div");i.classList.add("goods-list_item"),i.id=`good-${r}`,i.innerHTML=`\n        <h3>${this.name}</h3>\n        <span>${this.price}</span>\n      `,new e("Добавить в корзину",`item-add-${r}`,i),i.querySelector("button").addEventListener("click",(()=>(t.addMassive(this.name,this.price),Promise.resolve().then((()=>{t.sumPrice()}))))),n.appendChild(i)}}}function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}class a extends s{constructor({name:e,price:t,amount:n},r){super({name:e,price:t}),o(this,"amount",1),o(this,"basket",null),n&&(this.amount=n),this.basket=r}render(e){const t=document.querySelector(".basket-list");if(t){const n=t.querySelectorAll(".basket-list_item").length,r=document.createElement("div");r.classList.add("basket-list_item"),r.id=`basket-good-${n}`,r.innerHTML=`\n        <h3>${this.name}</h3>\n        <span>${this.price}</span>\n      `,new e("+",`item-add-${n}`,r);const i=document.createElement("span");i.innerText=this.amount,r.appendChild(i),new e("-",`item-dell-${n}`,r),new e("Удалить",`item-erase-${n}`,r),r.querySelector(`#btn-item-add-${n}`).addEventListener("click",(()=>(this.basket.increaseAmount(n),this.basket.sumPrice(),Promise.resolve().then((()=>{this.basket.buttonAction()}))))),r.querySelector(`#btn-item-dell-${n}`).addEventListener("click",(()=>(this.basket.reduceAmount(n),this.basket.sumPrice(),Promise.resolve().then((()=>{this.basket.buttonAction()}))))),r.querySelector(`#btn-item-erase-${n}`).addEventListener("click",(()=>(this.basket.dellMassive(n),this.basket.sumPrice(),Promise.resolve().then((()=>{this.basket.buttonAction()}))))),t.appendChild(r)}}}function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}class c{constructor(e,t,n,r){l(this,"items",[]),l(this,"goodsItemClass",null),l(this,"buttonClass",null),l(this,"basketClass",null),l(this,"basketItemClass",null),l(this,"_databaseIndex",0),this.goodsItemClass=e,this.buttonClass=t,this.basketClass=n,this.basketItemClass=r}fetchGoods(){return[{name:"apple",price:11500},{name:"samsung",price:10450},{name:"xiaomi",price:9020}]}render(){this.items.forEach((e=>{e.render(this.buttonClass,this.basketClass)}))}}class d extends c{constructor(e,t,n,r){super(e,t,n,r),this.sumPrice(),this.buttonBasket(t)}buttonBasket(e){const t=document.querySelector(".basket"),n=document.querySelector(".basket-button-wrap"),r=document.querySelector(".basket-list"),i=document.querySelector(".basket-sum");new e("Корзина","basket",n),document.querySelector("#btn-basket").addEventListener("click",(()=>{r.classList.toggle("basket-block"),i.classList.toggle("basket-block"),t.classList.toggle("h-50")}))}sumPrice(){let e=0;this.items.forEach((t=>{const n=t.price*t.amount;e+=n})),document.querySelector(".basket-sum").innerText=e}addMassive(e,t,n){document.querySelector(".basket-list").innerHTML="",this.fetchGoods(e,t,n).then((()=>{this.render(this.buttonClass)}))}buttonAction(){document.querySelector(".basket-list").innerHTML="",this.mappingItems().then((()=>{this.render(this.buttonClass)}))}mappingItems(){return Promise.resolve().then((()=>{this.items=this.items.map((e=>new this.basketItemClass(e,this)))}))}fetchGoods(e,t){let n={name:e,price:t};return Promise.resolve(n).then((e=>{if(0==this.items.length)this.items.push(e);else{for(var t=!1,n=0;n<this.items.length;){if(e.name===this.items[n].name){this.increaseAmount(n),t=!0;break}n++}1!=t&&(this.items.push(e),t=!0)}this.items=this.items.map((e=>new this.basketItemClass(e,this)))})).catch((e=>{console.log(e)}))}reduceAmount(e){0==--this.items[e].amount&&this.dellMassive(e)}increaseAmount(e){++this.items[e].amount}dellMassive(e){this.items.splice(e,1)}}var u=n(379),h=n.n(u),m=n(426);h()(m.Z,{insert:"head",singleton:!1}),m.Z.locals;const b=new d(s,t,d,a);new class extends c{constructor(e,t,n,r){super(e,t,n,r),this.fetchGoods().then((()=>{this.render(this.buttonClass)})),this._buttonLoadMore()}_buttonLoadMore(){const e=document.querySelector(".goods-button");new this.buttonClass("Загрузить еще!","load-more",e),document.querySelector(".goods-button .btn").addEventListener("click",(()=>{this.fetchGoods().then((()=>{this.render(this.buttonClass)}))}))}fetchGoods(){return++this._databaseIndex,fetch(`database/database${this._databaseIndex}.json`).then((e=>e.json())).then((e=>{this.items=e.data,this.items=this.items.map((e=>new this.goodsItemClass(e)))})).catch((e=>{this.items=[],console.log(e),alert("Больше товаров нет!")}))}}(s,t,b,a),new class{constructor(e){r(this,"patternName",/[A-ZА-Я][a-zа-яё]+/),r(this,"_patternTel",/\+7\([0-9]{3}\)[0-9]{3}-[0-9]{4}/),r(this,"_patternMail",/[0-9a-z]{2}[.-]*[0-9a-z]{4}@mail\.ru/),r(this,"_buttonClass",null),this._buttonClass=e,this.render()}render(){const e=document.querySelector("aside");if(e){const t=document.createElement("div");t.classList.add("form-wrap"),t.innerHTML='\n        <form>\n          <input type="text" id="form-name" placeholder="Иван">\n          <input type="text" id="form-tel" placeholder="+7(900)000-0000">\n          <input type="text" id="form-amail" placeholder="mymail@mail.ru">\n        </form>\n      ',new this._buttonClass("Отправить","form-submit",t),t.querySelector("button").addEventListener("click",(()=>{this.validation()})),e.appendChild(t)}}validation(){const e=document.getElementById("form-name"),t=document.getElementById("form-tel"),n=document.getElementById("form-amail");e.value&&console.log(this.patternName.test(e.value)?e.value:"Ошибка ввода имени!"),t.value&&console.log(this._patternTel.test(t.value)?t.value:"Ошибка ввода телефона!"),n.value&&console.log(this._patternMail.test(n.value)?n.value:"Ошибка ввода почты!")}}(t),console.log("lesson5")})()})();