fetch('http://localhost:3000/api/products')
    .then(res => {return res.json()})
    .then(data => {console.log(data)
        
        //Specify the container in which the content is to be inserted:
        let container = document.getElementById('items');
        
        //Request data to be inserted from the API:
        data.forEach(item => {
            const itemHTML = 
            `<a href="./product.html?id=${item._id}">
            <article>
              <img src="${item.imageUrl}" alt="${item.altTxt}">
              <h3 class="productName">${item.name}</h3>
              <p class="productDescription">${item.description}</p>
            </article>
            </a>`;
        
        //Populate the defined container with the API data:    
        container.innerHTML += itemHTML;
        })})
        
        //Error log:
        .catch(error => console.log(error));
