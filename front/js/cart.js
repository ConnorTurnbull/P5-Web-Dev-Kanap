//Retrieve item from local storage:
const item = localStorage.getItem('item');
const itemParse = JSON.parse(item);
console.log(itemParse);

//Find product data based on ID number
const product = fetch('http://localhost:3000/api/products/' + itemParse.ID)
  .then(res => {return res.json()})
  .then(data => {console.log(data)

//Display item(s) on page:

})

    
