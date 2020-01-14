var resultInf = document.getElementById('js-cart');

function showCart() {
  var content = '<table><tr><th>#</th><th>Images</th><th>Name</th><th>Quatity</th>'+
                '<th>Price</th><th>Sub Total</th><th>Delete</th><th>Update</th></tr>';
  
  cart = JSON.parse(localStorage.getItem('cart'));
  product = JSON.parse(localStorage.getItem('product'));
  sum = 0;

  for (var i = 0; i < cart.length; i++) {
    sum += product[cart[i].id].cost * cart[i].count;
    content += '<tr><td>' + i + '</td><td><img src= "' 
                + product[cart[i].id].img + 
                ' "></td><td>' 
                + product[cart[i].id].name + 
                '</td><td><input class="js-count" type="text" value="'
                + cart[i].count +
                '"></input> '+ 
                '</td><td>' 
                + product[cart[i].id].cost + 
                '</td><td>' 
                + product[cart[i].id].cost * cart[i].count + 
                '</td><td>' 
                + '<button onclick = "deleteCart(this)"><i class="fas fa-trash-alt"></i></button>' +
                '</td>'
                + '<input class="js-id" type="hidden" value="' + cart[i].id + '">'+
                '<td>' 
                + '<button onclick = "updateCart(this)"><i class="fas fa-user-edit"></i></button>' +
                '</td></tr>';   
  }
  content += '<tr><td></td><td></td><td></td><td><b>Total:</b></td><td>' +
              sum + '</td><td></td><td></td><td></td></tr></table>';
  resultInf.innerHTML = content;
}

showCart();

function updateCart(btn) {
  var row = btn.parentElement.parentElement.querySelectorAll(".js-id")[0].value;
  var count = btn.parentElement.parentElement.querySelectorAll(".js-count")[0].value;
  console.log(row);

  if (!isNaN(count) && count > 0) {
  var cart = JSON.parse(localStorage.getItem("cart"));
    for (var i = 0 ; i < cart.length; i++) {
      if (cart[i].id == row) {
        console.log(cart[i].id);
        cart[i].count = count; 
        localStorage.setItem("cart", JSON.stringify(cart));
        alert("Update thanh cong");
        break;
      }
    }
  } else {
    alert("Ban nhap khong dung dinh dang!");
  }
  location.reload();
  // numberCart();
}

function deleteCart(btn) {
  var row = btn.parentElement.parentElement.querySelectorAll(".js-id")[0].value;
  console.log(row);

  var cart = JSON.parse(localStorage.getItem("cart"));
  for (var i = 0; i < cart.length; i++) {
    if (cart[i].id == row) {
     cart.splice(i,1);
     i--; 
     localStorage.setItem("cart", JSON.stringify(cart));
     alert("Delete thanh cong");  
     numberCart();
     break;
    }
  }
  location.reload();
}
