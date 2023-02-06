//Obtaining the product ID using URLSearchParams
const search = window.location.search;
const urlParams = new URLSearchParams(search);
const ID = urlParams.get('id');
console.log(ID);

//Find product data based on ID number
const product = fetch('http://localhost:3000/api/products/' + ID)
  .then(res => {return res.json()})
  .then(data => {console.log(data)

  //Specify the container in which the content is to be inserted:
  const imageContainer = document.getElementsByClassName('item__img')[0];
  const nameContainer = document.getElementById('title');
  const priceContainer = document.getElementById('price');
  const descContainer = document.getElementById('description');
  const colorContainer = document.getElementById('colors');

  //Request data to be inserted from the API:
  const imageUrl = data.imageUrl;
  const altTxt = data.altTxt;
  const name = data.name;
  const price = data.price;
  const desc = data.description;
  const colors = data.colors;
  
  const imageSRC = `<div class="item__img"><img src="${imageUrl}" alt="${altTxt}"></div>`;
  const nameHTML = `<h1 id="title">${name}</h1>`;
  const priceHTML = `<p>Prix : <span id="price">${price}</span>€</p>`;
  const descHTML = `<p id="description">${description}</p>`;
  
  //For loop for color select dropdown:
  colors.forEach(function(color) {
    const newOption = document.createElement("option");
    newOption.text = color;
    newOption.value = color;
    colorContainer.appendChild(newOption);
  });

  //Populate the defined container with the API data:
  imageContainer.innerHTML = imageSRC;
  nameContainer.innerHTML = data.name;
  priceContainer.innerHTML = data.price;
  descContainer.innerHTML = data.description;
 
  //Adding 'Add to Cart' button functionality:
  const cartButton = document.getElementById('addToCart');
  

  cartButton.addEventListener('click', function() {
    console.log(name, price,)
    })


})
  


/*
local storage - stringify before sending to storage, parse when retrieving from storage.


*/