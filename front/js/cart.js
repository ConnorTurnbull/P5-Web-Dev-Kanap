//Retrieve item from local storage:
const cart = localStorage.getItem('cart');

const cartParse = JSON.parse(cart);
console.log(cartParse);

//Specify container:
const itemContainer = document.getElementById('cart__items');

//Insert Data:
//const {ID:itemID, selectedColor:itemColor, imageUrl, altTxt:imageAlt, name:itemName, price:itemPrice, selectedQuantity:quantity} = cartParse;

cartParse.forEach(cartParse => {

const itemHTML =
`<article class="cart__item" data-id="${cartParse.ID}" data-color="${cartParse.Color}">
<div class="cart__item__img">
<img src="${cartParse.imageUrl}" alt="${cartParse.altTxt}">
</div>
<div class="cart__item__content">
<div class="cart__item__content__description">
  <h2>${cartParse.name}</h2>
  <p>${cartParse.selectedColor}</p>
  <p>€${cartParse.price}</p>
</div>
<div class="cart__item__content__settings">
  <div class="cart__item__content__settings__quantity">
    <p>Quantity : </p>
    <input type="number" class="itemQuantity" name="itemQuantity" min="1" max="100" value="${cartParse.selectedQuantity}">
  </div>
  <div class="cart__item__content__settings__delete">
    <p class="deleteItem">Delete</p>
  </div>
</div>
</div>
</article>`;

//Populate container with data:
itemContainer.innerHTML += itemHTML;

});









    
