//Functions:

function updateTotals() {
  const quantContainer = document.getElementById('totalQuantity');
  const priceContainer = document.getElementById('totalPrice');

  let quantTotal = 0;
  let priceTotal = 0;

  cartParse.forEach(cartParse => {
    quantTotal = quantTotal + cartParse.selectedQuantity;
    itemTotal = cartParse.price * cartParse.selectedQuantity;
    priceTotal = priceTotal + itemTotal;
  });

  quantContainer.innerHTML = quantTotal;
  priceContainer.innerHTML = priceTotal;

}

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
    const newQuant = parseInt(quantInput.value);

    const target = e.target.closest('.cart__item');
    const { id, color } = target.dataset;

    const existingItem = cartParse.find(
      item => item.id = id && item.selectedColor == color
    );

    if (existingItem) {
      existingItem.selectedQuantity = newQuant;
      localStorage.setItem('cart', JSON.stringify(cartParse));
      updateTotals();

    }
  });
});

//Delete Item:
const deleteButtons = Array.from(document.getElementsByClassName('deleteItem'));

deleteButtons.forEach(deleteButton => {

  deleteButton.addEventListener('click', (e) => {
    const target = e.target.closest('.cart__item');
    const { id, color } = target.dataset;

    const oldCart = JSON.parse(localStorage.getItem('cart'));
    const newCart = oldCart.filter(item => item.id != id && item.selectedColor != color);
    
    localStorage.setItem('cart', JSON.stringify(newCart));
    target.remove();

    const quantContainer = document.getElementById('totalQuantity');
    const priceContainer = document.getElementById('totalPrice');

    let quantTotal = 0;
    let priceTotal = 0;

    newCart.forEach(cartParse => {
      quantTotal = quantTotal + cartParse.selectedQuantity;
      itemTotal = cartParse.price * cartParse.selectedQuantity;
      priceTotal = priceTotal + itemTotal;
    });

    quantContainer.innerHTML = quantTotal;
    priceContainer.innerHTML = priceTotal;



  });

});



//Total quantity & price:
updateTotals();

//Order form validation / submission:  
const firstName = document.getElementById('firstName');
const lastName = document.getElementById('lastName');
const address = document.getElementById('address');
const city = document.getElementById('city');
const email = document.getElementById('email');

const order = document.getElementById('order');

const firstNameError = document.getElementById('firstNameErrorMsg')
const lastNameError = document.getElementById('lastNameErrorMsg')
const addressError = document.getElementById('addressErrorMsg')
const cityError = document.getElementById('cityErrorMsg')
const emailError = document.getElementById('emailErrorMsg')

function validateInput() {
  var numbersReg = /\d/g
  var emailReg = /@/g

  //First name validation
  if (firstName.value.trim() === "" || firstName.value.trim() == null) {
    firstNameError.innerText = "First name cannot be blank";
    return false
  } else if (firstName.value.match(numbersReg)) {
    firstNameError.innerText = "First name must only contain letters";
    return false
  } else {
  }

  //Last name validation
  if (lastName.value.trim() === "" || lastName.value.trim() == null) {
    lastNameError.innerText = "Last name cannot be blank";
    return false
  } else if (lastName.value.match(numbersReg)) {
    lastNameError.innerText = "Last name must only contain letters";
    return false
  } else{
  }

  //Address validation
  if (address.value.trim() === "" || address.value.trim() == null) {
    addressError.innerText = "Address cannot be blank";
    return false
  } else{
  }

  //City validation
  if (city.value.trim() === "" || city.value.trim() == null) {
    cityError.innerText = "City cannot be blank";
    return false
  } else if (city.value.match(numbersReg)) {
    cityError.innerText = "City must only contain letters";
    return false
  } else{
  }

  //Email validation
  if (email.value.trim() === "" || email.value.trim() == null) {
    emailError.innerText = "Email address cannot be blank";
    return false
  } else if (!email.value.match(emailReg)) {
    emailError.innerText = "Not a valid email address";
    return false
  } else{
  }

  return true
}




order.addEventListener('click', (e) => {
  
  e.preventDefault();
  e.stopPropagation();
  
  
  
  const isValid = validateInput();
  console.log(validateInput())
  if (!isValid) {
    throw new Error ("Invalid form data")
  }

  
  const formData = { 
      contact: {
        firstName: firstName.value,
        lastName: lastName.value,
        address: address.value,
        city: city.value,
        email: email.value,
      },

      products: cartParse.map((p) => p.ID),
    };

    fetch('http://localhost:3000/api/products/order', {
      method: "POST",
      body: JSON.stringify(formData),
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      }
    })

      .then(
        res => res.json()
      )
      .then(
        data => { window.location.href = "confirmation.html?id=" + data.orderId }
      )
      .catch(
        error => console.error(error)
        
      )
})








