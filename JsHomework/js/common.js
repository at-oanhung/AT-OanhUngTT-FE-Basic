function addCart(btn) {
  var row = btn.parentElement.querySelectorAll(".js-id")[0].value;
  var count = 1;
  var cart = localStorage.getItem("cart");
  cart = cart ? JSON.parse(cart) : [];

  cart.push({id: row, count: count});
  btn.disabled = true;
  localStorage.setItem("cart", JSON.stringify(cart));
}

var result = document.getElementById('js-numberCart');

function numberCart() {
  var cart = JSON.parse(localStorage.getItem("cart"));
  var number = "";
  number += cart.length;
  result.innerHTML = number;
}
numberCart();
