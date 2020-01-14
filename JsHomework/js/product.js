
var resultProduct = document.getElementById('js-result');

var products = JSON.parse(localStorage.getItem('product'));

function render() {
  var content = "";

  for (var i = 0; i < products.length; i++) {         
    content += '<div class="services-item">' + 
                  '<div class="services-img">'
                    + '<a href="#"><img src =' + products[i].img + '></a>' + 
                  '</div>' +
                  '<div class = "services-title">' + 
                    '<h4 class = "services-name">' 
                      + products[i].name + 
                    '</h4>' +
                    '<h4 class ="services-cost">' + 
                      '<span>'
                        + products[i].cost +
                      '</span><sup>đ</sup></h4>' + 
                  '</div>' + 
                  '<p class="services-content" id = "js-description">'
                    + products[i].description +
                  '</p>' +
                  '<button id = "' + i +'" class="btn-add" onclick="addCart(' + products[i].id + ')" type="button">Add to card</button></div>'
                '</div> ';
    resultProduct.innerHTML = content;
  }
}
render();

function addCart(id) {
  var row = id;
  console.log(row);
  var count = 1;
  var cart = localStorage.getItem('cart');
  
  if (cart) {
    cart = JSON.parse(cart);
    for (var i = 0; i < cart.length; i++) {
      if (row === cart[i]['id']) {
        cart[i]['count']++;
        break;
      }
      else if (i === (cart.length -1)){
        cart.push({id: row, count: count});
        break;
      }
      
    }
    
  } else {
    cart = [];
    cart.push({id: row, count: count});
  }

  localStorage.setItem('cart', JSON.stringify(cart));
  numberCart();
}

// onclick 
// var cart = JSON.parse(localStorage.getItem('cart'));

// for (var j = 0; j < cart.length; j++) {
//   document.getElementById(cart[j].id).disabled = true;
// }

// function render(){
//   var item = null;
//   var part = null;
//   var a = null;
//   var b = null;

//   for (var i = 0; i < products.length; i++){
//     item = document.createElement("div");
//     item.classList.add("services-item");

//     // Product Image
//     part = document.createElement("div");
//     part.classList.add("services-img");
//     item.appendChild(part);

//     a = document.createElement("a");
//     part.appendChild(a);

//     b = document.createElement("img");
//     b.src = products[i].img;
//     a.appendChild(b);

//     // Product Name
//     part = document.createElement("div");
//     part.classList.add("services-title");
//     item.appendChild(part);

//     a = document.createElement("h4");
//     a.innerHTML = products[i].name;
//     a.classList.add("services-name");
//     part.appendChild(a);

//     // Product Price
//     a = document.createElement("h4");
//     a.classList.add("services-cost");
//     part.appendChild(a);

//     b = document.createElement("span");
//     b.innerHTML = products[i].cost;
//     a.appendChild(b);

//     b = document.createElement("sup");
//     b.innerHTML = "$"
//     a.appendChild(b);

    
//     // Product Description
//     part = document.createElement("p");
//     part.innerHTML = products[i].description;
//     part.classList.add("services-content");
//     item.appendChild(part);

//     // Add to cart
//     part = document.createElement("button");
//     part.type = "button";
//     part.innerHTML = "Add to Cart";
//     part.classList.add("btn-add");
//     // part.onclick = addCart(products[i].id);
//     part.onclick = addCart;
//     part.id = i;
//     item.appendChild(part);

//     resultProduct.appendChild(item);
//   }
// }
// render();