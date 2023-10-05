//Obtaining the product ID using URLSearchParams
const search = window.location.search;
const urlParams = new URLSearchParams(search);
const ID = urlParams.get('id');

//Find product data based on ID number
fetch('http://localhost:3000/api/products/' + ID)
  .then(res => { return res.json() })
  .then(data => {
    console.log(data)

    //Specify the container in which the content is to be inserted:
    const imageContainer = document.getElementsByClassName('item__img')[0];
    const nameContainer = document.getElementById('title');
    const priceContainer = document.getElementById('price');
    const descContainer = document.getElementById('description');
    const colorContainer = document.getElementById('colors');

    //Request data to be inserted from the API:
    const { imageUrl, altTxt, name, price, description: desc, colors } = data

    const imageSRC = `<div class="item__img"><img src="${imageUrl}" alt="${altTxt}"></div>`;
    const nameHTML = `<h1 id="title">${name}</h1>`;
    const priceHTML = `<span id="price">${price}</span>`;
    const descHTML = `<p id="description">${desc}</p>`;


    //For loop for color select dropdown:
    colors.forEach(function (color) {
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

    cartButton.addEventListener('click', function () {
      const { value: selectedColor } = colorContainer;
      const { value: selectedQuantity } = quantity;
      const item = { ID, selectedColor, imageUrl, altTxt, name, selectedQuantity: parseInt(selectedQuantity) };

      //Input validation:
      if (selectedColor == '') {
        window.alert('Please select a color.');
        return;
      }

      if (selectedQuantity < 1) {
        window.alert('Quantity must be at least 1.');
        return;
      }

      //Create cart array:
      const cart = JSON.parse(localStorage.getItem('cart') || "[]");
      
      //Check for existing items + update quantity:
      const existingItem = cart.find(item =>
        ID == item.ID && selectedColor == item.selectedColor
      )

      if (existingItem) {
        existingItem.selectedQuantity += item.selectedQuantity
      } else {
        cart.push(item);
      }

      //Store cart in local storage:
      localStorage.setItem('cart', JSON.stringify(cart));
      console.log(localStorage);
      console.log(cart);
      window.alert('Item added to cart!');
    });
  });