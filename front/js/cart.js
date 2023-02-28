//Retrieve item from local storage:
const cart = localStorage.getItem('cart');
const cartParse = JSON.parse(cart);
console.log(cartParse);

//Specify container:
const itemContainer = document.getElementById('cart__items');

//Insert Data:
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

//Modify quantity:
const quantInput = document.getElementsByClassName('itemQuantity');

quantInput.itemQuantity.addEventListener('change', () => {
  const newQuant = quantInput.itemQuantity.value
  console.log(newQuant);
});

//Delete Item:
const deleteButton = document.getElementsByClassName('deleteItem');
//not sure how this can work as it's not a button in the html?

//Total quantity & price:
const quantContainer = document.getElementById('totalQuantity');
const priceContainer = document.getElementById('totalPrice');

const quantHTML = `<span id="totalQuantity"><!-- 2 --></span>`;
const priceHTML = `<span id="totalPrice"><!-- 84.00 --></span>`;

let quantTotal = 0;
let priceTotal = 0;

cartParse.forEach(cartParse => {
  quantTotal = quantTotal + cartParse.selectedQuantity;
  itemTotal = cartParse.price * cartParse.selectedQuantity;
  priceTotal = priceTotal + itemTotal;
});

quantContainer.innerHTML = quantTotal;
priceContainer.innerHTML = priceTotal;






/* TO DO:
- event listeners for delete + quant update
- form

*/







    
