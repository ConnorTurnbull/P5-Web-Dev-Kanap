//Display order number:
const search = window.location.search;
urlParams = new URLSearchParams(search);
const orderNo = urlParams.get('id');
const orderID = document.getElementById('orderId');
orderID.innerHTML = orderNo;

