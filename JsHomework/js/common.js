
var result = document.getElementById('js-numberCart');

function numberCart() {
  var cart = JSON.parse(localStorage.getItem("cart"));
  var number = "";
  number += cart.length;
  result.innerHTML = number;
}
numberCart();
