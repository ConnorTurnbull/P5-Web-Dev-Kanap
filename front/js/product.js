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
    const imageContainer = document.getElementsByName('item__img');
    const nameContainer = document.getElementById('title');
    const priceContainer = document.getElementById('price');
    const descContainer = document.getElementById('description');
    const colorContainer = document.getElementById('colors')

    //Request data to be inserted from the API:
    imageUrl = data.imageUrl;
    altTxt = data.altTxt;

    const imageSRC = `<div class="item__img"><img src="${imageUrl}" alt="${altTxt}"></div>`
    const nameHTML = `<h1 id="title">${name}</h1>`;
    const priceHTML = `<p>Prix : <span id="price">${price}</span>€</p>`;
    const descHTML = `<p id="description">${description}</p>`;

    console.log(imageSRC)
  //Populate the defined container with the API data:
    imageContainer.innerHTML += imageSRC;
    nameContainer.innerHTML = data.name;
    priceContainer.innerHTML = data.price;
    descContainer.innerHTML = data.description;

  })



/*



*/