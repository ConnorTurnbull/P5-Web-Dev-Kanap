//Retrieve item from local storage:
const item = localStorage.getItem('item');
const itemParse = JSON.parse(item);
console.log(itemParse);

//Specify container:
const itemContainer = document.getElementById('cart__items');

//Insert Data:
const itemID = itemParse.ID;
const itemColor = itemParse.selectedColor;
const imageUrl = itemParse.imageUrl;
const imageAlt = itemParse.altTxt;
const itemName = itemParse.name;
const itemPrice = itemParse.price;
const quantity = itemParse.selectedQuantity;

const itemHTML =
`<article class="cart__item" data-id="${itemParse.ID}" data-color="${itemParse.selectedColor}">
<div class="cart__item__img">
  <img src="${itemParse.imageUrl}" alt="${itemParse.altTxt}">
</div>
<div class="cart__item__content">
  <div class="cart__item__content__description">
    <h2>${itemParse.name}</h2>
    <p>${itemParse.selectedColor}</p>
    <p>€${itemParse.price}</p>
  </div>
  <div class="cart__item__content__settings">
    <div class="cart__item__content__settings__quantity">
      <p>Quantity : </p>
      <input type="number" class="itemQuantity" name="itemQuantity" min="1" max="100" value="${itemParse.selectedQuantity}">
    </div>
    <div class="cart__item__content__settings__delete">
      <p class="deleteItem">Delete</p>
    </div>
  </div>
</div>
</article>`;

//Populate container with data:
itemContainer.innerHTML = itemHTML;











    
