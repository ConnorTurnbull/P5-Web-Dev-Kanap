//Obtaining the product ID using URLSearchParams
const search = window.location.search;
const urlParams = new URLSearchParams(search);
const ID = urlParams.get('id');

//Find product data based on ID number
fetch('http://localhost:3000/api/products/' + ID)
  .then(res => {return res.json()})
  .then(data => {console.log(data)

  //Specify the container in which the content is to be inserted:
  const imageContainer = document.getElementsByClassName('item__img')[0];
  const nameContainer = document.getElementById('title');
  const priceContainer = document.getElementById('price');
  const descContainer = document.getElementById('description');
  const colorContainer = document.getElementById('colors');

  //Request data to be inserted from the API:
  const {imageUrl, altTxt, name, price, description:desc, colors} = data
  
  const imageSRC = `<div class="item__img"><img src="${imageUrl}" alt="${altTxt}"></div>`;
  const nameHTML = `<h1 id="title">${name}</h1>`;
  const priceHTML = `<span id="price">${price}</span>`;
  const descHTML = `<p id="description">${desc}</p>`;
  
  //For loop for color select dropdown:
  colors.forEach(function(color) {
    const newOption = document.createElement("option");
    newOption.text = color;
    newOption.value = color;
    colorContainer.appendChild(newOption);
  });

  //Populate the defined container with the API data:
  imageContainer.innerHTML = imageSRC;
  nameContainer.innerHTML = nameHTML;
  priceContainer.innerHTML = priceHTML;
  descContainer.innerHTML = descHTML;
 
  //Adding 'Add to Cart' button functionality:
  const cartButton = document.getElementById('addToCart');
  const quantity = document.getElementById('quantity');
  
  cartButton.addEventListener('click', function() {
    const {value:selectedColor} = colorContainer;
    const {value:selectedQuantity} = quantity;
    const item = {ID, selectedColor, imageUrl, altTxt, name, price, selectedQuantity};
    
    //Input validation:
    if (selectedColor == '') {
      window.alert('Please select a color.');
      return;
    }

    if (selectedQuantity < 1) {
      window.alert('Quantity must be at least 1.');
      return;
    }
    
    //Store item in cart / local storage:
    const localStorageContents = localStorage.getItem('cart');

    let cart;
    if (localStorageContents === null) {
      cart = [];

    }

    else {
      cart = JSON.parse(localStorageContents);

    }

    cart.push(item);
    localStorage.setItem('cart', JSON.stringify(cart));
    console.log(localStorage);
    console.log(cart);
    window.alert('Item added to cart!');
  })
})
  


/*
- fixed unused values & removed / consolidated unused code.
- cart page render finished
- total quantity and price done - auto update needed from cart page?

TO DO:
Prevent decimal input
Prevent duplicate items / quantity update
business logic for updating cart, etc - dozen or so lines


*/