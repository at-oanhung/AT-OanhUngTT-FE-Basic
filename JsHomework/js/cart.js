var resultInf = document.getElementById('js-cart');
var product = JSON.parse(localStorage.getItem('product'));

function showCart() {
  //getLs 
  var cart = JSON.parse(localStorage.getItem('cart'));
  if (!cart) {
    cart = [];
  }

  //Handle 
  var tbody = null;
  var temp = null;
  var tr = null;
  var table = null;
  var btn = null;
  var input = null;
  var b = null;
  var iEl = null;

  resultInf.innerHTML = '';

  tbody = document.createElement('tbody');
  tr = document.createElement('tr');

  temp = document.createElement('th');
  temp.innerHTML = '#';
  tr.appendChild(temp);

  temp = document.createElement('th');
  temp.innerHTML = 'Images';
  tr.appendChild(temp);

  temp = document.createElement('th');
  temp.innerHTML = 'Name';
  tr.appendChild(temp);

  temp = document.createElement('th');
  temp.innerHTML = 'Quantity';
  tr.appendChild(temp);

  temp = document.createElement('th')
  temp.innerHTML = 'Price';
  tr.appendChild(temp);

  temp = document.createElement('th')
  temp.innerHTML = 'Sub-total';
  tr.appendChild(temp);
  
  temp = document.createElement('th')
  temp.innerHTML = 'Delete';
  tr.appendChild(temp);

  temp = document.createElement('th');
  temp.innerHTML = 'Update';
  tr.appendChild(temp);

  tbody.appendChild(tr);  

  table = document.createElement('table');
  table.id = "js-table";
  
  var sum = 0;
  
  for (var i = 0; i < cart.length; i++) {
    for (var j = 0; j < product.length; j++) {
      if (cart[i].id === product[j].id){
        var subtotal = product[j].cost * cart[i].count;
        sum += subtotal;
        tr = document.createElement('tr');

        temp = document.createElement('td');
        temp.innerHTML = (i + 1);
        tr.appendChild(temp);

        temp = document.createElement('td');
        tr.appendChild(temp);
        images = document.createElement("img");
        images.src = product[j].img;
        temp.appendChild(images);

        temp = document.createElement('td');
        temp.innerHTML = product[j].name;
        tr.appendChild(temp);

        temp = document.createElement('td');
        
        input = document.createElement('input');
        // input.classList = "js-count";
        input.type = "text";
        input.value = cart[i].count;
        input.id = 'js-update-' + product[j].id;
        temp.appendChild(input);

        tr.appendChild(temp);

        temp = document.createElement('td');
        temp.innerHTML = product[j].cost;
        tr.appendChild(temp);

        temp = document.createElement('td');
        temp.innerHTML = subtotal;
        tr.appendChild(temp);

        // Delete
        temp = document.createElement('td');
        btn = document.createElement("button");
        btn.type = "button";
        // btn.innerHTML = "X";
        btn.classList.add("btn-delete");
        btn.dataset.id = product[j].id;
        btn.addEventListener('click', deleteCart);

        iEl = document.createElement('i');
        iEl.classList = "fas fa-trash-alt";
        btn.appendChild(iEl);
        temp.appendChild(btn);
        tr.appendChild(temp);

        // Update
        temp = document.createElement('td');
        btn = document.createElement("button");
        btn.type = "button";
        // btn.innerHTML = "Update";
        btn.classList.add("btn-update");
        btn.dataset.id = product[j].id;
        btn.addEventListener('click', updateCart);

        iEl = document.createElement('i');
        iEl.classList = "fas fa-user-edit";
        btn.appendChild(iEl);
        temp.appendChild(btn);
        tr.appendChild(temp);
        tbody.appendChild(tr);
      }
    }
  }

  tr = document.createElement('tr');
  temp = document.createElement('td');
  tr.appendChild(temp);
  temp = document.createElement('td');
  tr.appendChild(temp);
  temp = document.createElement('td');
  tr.appendChild(temp);
  temp = document.createElement('td');
  tr.appendChild(temp);

  temp = document.createElement('td');
  tr.appendChild(temp);
  b = document.createElement('b');
  b.innerHTML = 'Total: ';
  temp.appendChild(b);
  
  temp = document.createElement('td');
  temp.innerHTML = sum;
  
  tr.appendChild(temp);
  temp = document.createElement('td');
  tr.appendChild(temp);
  temp = document.createElement('td');
  tr.appendChild(temp);


  tbody.appendChild(tr)
  table.appendChild(tbody)
  resultInf.appendChild(table);

  console.log(resultInf);
}

showCart();

function deleteCart(e) {
  var cart = JSON.parse(localStorage.getItem("cart"));
  var rowDe = +e.target.dataset.id;
  console.log(rowDe);
  for (var i = 0; i < cart.length; i++) {
    if (cart[i].id == rowDe) {
      console.log(cart[i].id);
      cart.splice(i,1);
      // i--; 
      localStorage.setItem("cart", JSON.stringify(cart));
      alert("Delete thanh cong");   
      numberCart();     
      showCart();
      // location.reload();
      break;
    }
  }
}

function updateCart(event) {
  var row = event.target.dataset.id;
  var count = document.getElementById('js-update-' + row).value;
  console.log(count);
  if (count > 0 && (Math.ceil(count)-count === 0)) {
    var cart = JSON.parse(localStorage.getItem("cart"));
    for (var i = 0 ; i < cart.length; i++) {
      if (cart[i].id == row) {
        console.log(cart[i].id);
        cart[i].count = count; 
        localStorage.setItem("cart", JSON.stringify(cart));
        alert("Update thanh cong");
        showCart();
        break;
      }
    }
  } else {
    alert("Ban nhap khong dung dinh dạng!");
    // location.reload();
  }
}
