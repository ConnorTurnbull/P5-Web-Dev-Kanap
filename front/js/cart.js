//Retrieve item from local storage:
const item = localStorage.getItem('item');
const itemParse = JSON.parse(item);
console.log(itemParse);

//Find product data based on ID number
const product = fetch('http://localhost:3000/api/products/' + itemParse.ID)
  .then(res => {return res.json()})
  .then(data => {console.log(data)

//Define container:
const container = document.getElementById('cart__items');

//Display item(s) on page:
data.forEach(itemParse => {
    const itemHTML = 
    `<!--  <article class="cart__item" data-id="${itemParse.ID}" data-color="${itemParse.selectedColor}">
                <div class="cart__item__img">
                  <img src="${data.imageUrl}" alt="${data.altTxt}">
                </div>
                <div class="cart__item__content">
                  <div class="cart__item__content__description">
                    <h2>${data.name}</h2>
                    <p>${itemParse.selectedColor}</p>
                    <p>${data.price}</p>
                  </div>
                  <div class="cart__item__content__settings">
                    <div class="cart__item__content__settings__quantity">
                      <p>Quantity : ${itemParse.selectedQuantity}</p>
                      <input type="number" class="itemQuantity" name="itemQuantity" min="1" max="100" value="42">
                    </div>
                    <div class="cart__item__content__settings__delete">
                      <p class="deleteItem">Delete</p>
                    </div>
                  </div>
                </div>
              </article> -->`;

//Populate container:
container.innerHTML += itemHTML;

})
})








    
