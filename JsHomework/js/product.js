
var resultProduct = document.getElementById('js-product');

var products = JSON.parse(localStorage.getItem('product'));

function render() {
  var item = null;
  var part = null;
  var a = null;
  var content = null;

  for (var i = 0; i < products.length; i++) {
    item = document.createElement("div");
    item.classList.add("services-item");

    // Product Image
    part = document.createElement("div");
    part.classList.add("services-img");
    item.appendChild(part);

    a = document.createElement("a");
    part.appendChild(a);

    content = document.createElement("img");
    content.src = products[i].img;
    content.setAttribute('alt', 'product images');
    a.appendChild(content);

    // Product Name
    part = document.createElement("div");
    part.classList.add("services-title");
    item.appendChild(part);

    a = document.createElement("h4");
    a.innerHTML = products[i].name;
    a.classList.add("services-name");
    part.appendChild(a);

    // Product Price
    a = document.createElement("h4");
    a.classList.add("services-cost");
    part.appendChild(a);

    content = document.createElement("span");
    content.innerHTML = products[i].cost;
    a.appendChild(content);

    content = document.createElement("sup");
    content.innerHTML = "$";
    a.appendChild(content);

    
    // Product Description
    part = document.createElement("p");
    part.innerHTML = products[i].description;
    part.classList.add("services-content");
    item.appendChild(part);

    // Add to cart
    part = document.createElement("button");
    part.type = "button";
    part.innerHTML = "Add to Cart";
    part.classList.add("btn-add");
    part.dataset.id = products[i].id;
    part.addEventListener('click', addCart);
    item.appendChild(part);
    resultProduct.appendChild(item);
  }
}
render();

function addCart(event) {
  var cart = JSON.parse(localStorage.getItem('cart'));
  var count = 1;
  var row = event.target.dataset.id;
  if (cart && cart.length) {
    // if (cart.length > 0) { 
      for (var i = 0; i < cart.length; i++) {
        console.log(cart[i]['id']);
        if (+row === cart[i]['id']) {
          cart[i].count++;
          break;
        }
        else if (i === (cart.length -1)) {
          cart.push({id: +row, count: count});
          break;
        }    
      }
    // } else {
    //   cart.push({id: +row, count: count});
    // }
  } else {
    cart = [];
    cart.push({id: +row, count: count});
  }
  localStorage.setItem('cart', JSON.stringify(cart));
  numberCart();
}
