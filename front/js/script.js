fetch('http://localhost:3000/api/products')
    .then(res => {return res.json()})
    //.then(data => {console.log(data)})
    .then(data => 
        {data.forEach(item => {
            const heading = '<h3>${item.name}</h3>';

            document.querySelector('h3').insertAdjacentHTML('beforeend', heading);
        })})
    .catch(error => console.log(error))

//Create new elements
let articleElement = document.createElement('article');
//let imageElement = document.createElement('image');
let headingElement = document.createElement('h3');
//let paraElement = document.createElement('p');

//Add content to the new elements



//Add the elements to the web page
let container = document.getElementById('items');

container.appendChild(articleElement);
articleElement.appendChild(headingElement);
//articleElement.appendChild(paraElement);
