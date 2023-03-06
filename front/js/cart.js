//Retrieve item from local storage:
const cart = localStorage.getItem('cart');
const cartParse = JSON.parse(cart);
console.log(cartParse);

//Specify container:
const itemContainer = document.getElementById('cart__items');

//Insert Data:
cartParse.forEach(cartParse => {

const itemHTML =
`<article class="cart__item" data-id="${cartParse.ID}" data-color="${cartParse.selectedColor}">
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
    <p class="deleteItem ${cartParse.selectedColor}-${cartParse.ID}">Delete</p>
  </div>
</div>
</div>
</article>`;

//Populate container with data:
itemContainer.innerHTML += itemHTML;


});

//Modify quantity:
const quantInputs = Array.from(document.getElementsByClassName('itemQuantity'));

quantInputs.forEach(quantInput => {
  quantInput.addEventListener('change', (e) => {
  console.log(quantInput.value)
  const newQuant = parseInt(quantInput.value);

  const target = e.target.closest('.cart__item');
  const {id, color} = target.dataset;
  console.log(target.dataset);
  
  const existingItem = cartParse.find(
    item => item.id = id && item.selectedColor == color
  );
  
  if (existingItem) {
    selectedQuantity = existingItem.selectedQuantity = 0 + newQuant;
    console.log(existingItem);
    localStorage.setItem('cart', JSON.stringify(cartParse.selectedQuantity));
    console.log(cartParse);
  }
});
});

//Delete Item:
const deleteButtons = Array.from(document.getElementsByClassName('deleteItem'));

deleteButtons.forEach(deleteButton => {
  deleteButton.addEventListener('click', (e) => {
  const target = e.target.closest('.cart__item');
  const {id, color} = target.dataset;
  const newCart = cartParse.filter(item => item.id != id && item.selectedColor != color);
  localStorage.setItem('cart', JSON.stringify(newCart));
  target.remove();
});
});




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







    
