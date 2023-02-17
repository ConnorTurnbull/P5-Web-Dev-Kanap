//Obtaining the product ID using URLSearchParams
const search = window.location.search;
const urlParams = new URLSearchParams(search);
const ID = urlParams.get('id');
console.log(ID);

//Find product data based on ID number
fetch('http://localhost:3000/api/products/' + ID)
  .then(res => {return res.json()})
  .then(data => {//console.log(data)

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
    const itemString = JSON.stringify(item);
    
    //Input verification:
    if (selectedColor == '') {
      window.alert('Please select a color.');
      return;
    }

    if (selectedQuantity < 1) {
      window.alert('Quantity must be at least 1.');
      return;
    }
    
    //TO DO:
    //Prevent decimal input
    //Prevent duplicate items / quantity update

    //Store item in local storage:
    else {
    console.log(item);
    localStorage.setItem('item', itemString);
    window.alert('Item added to cart!')
    }
    
  })
})
  


/*

array of objects rather than array
business logic for updating cart, etc
dozen or so lines for logic

*/