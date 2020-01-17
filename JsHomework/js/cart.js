var CartEl = document.getElementById('js-cart');
var product = JSON.parse(localStorage.getItem('product'));

function showCart() {
  //getLs 
  var cart = JSON.parse(localStorage.getItem('cart'));
  if (!cart) {
    cart = [];
  }

  //Handle 
  var tbodyEl;
  var theadEl;
  var tempEl;
  var trEl;
  var tableEl;
  var btnEl;
  var inputEl;
  var bEl;
  var iEl;

  CartEl.innerHTML = '';

  tableEl = document.createElement('table');
  // table.id = "js-table";
  tableEl.classList = 'table table-cart';

  theadEl = document.createElement('thead');
  trEl = document.createElement('tr');

  tempEl = document.createElement('th');
  tempEl.innerHTML = '#';
  trEl.appendChild(tempEl);

  tempEl = document.createElement('th');
  tempEl.innerHTML = 'Images';
  trEl.appendChild(tempEl);

  tempEl = document.createElement('th');
  tempEl.innerHTML = 'Name';
  trEl.appendChild(tempEl);

  tempEl = document.createElement('th');
  tempEl.innerHTML = 'Quantity';
  trEl.appendChild(tempEl);

  tempEl = document.createElement('th')
  tempEl.innerHTML = 'Price';
  trEl.appendChild(tempEl);

  tempEl = document.createElement('th')
  tempEl.innerHTML = 'Sub-total';
  trEl.appendChild(tempEl);
  
  tempEl = document.createElement('th')
  tempEl.innerHTML = 'Delete';
  trEl.appendChild(tempEl);

  tempEl = document.createElement('th');
  tempEl.innerHTML = 'Update';
  trEl.appendChild(tempEl);
  theadEl.appendChild(trEl);
  tableEl.appendChild(theadEl);

  tbodyEl = document.createElement('tbody');

  var sum = 0;
  
  for (var i = 0; i < cart.length; i++) {
    for (var j = 0; j < product.length; j++) {
      if (cart[i].id === product[j].id) {
        var subtotal = product[j].cost * cart[i].count;
        sum += subtotal;
        trEl = document.createElement('tr');

        tempEl = document.createElement('td');
        tempEl.innerHTML = (i + 1);
        trEl.appendChild(tempEl);

        tempEl = document.createElement('td');
        trEl.appendChild(tempEl);

        imagesEl = document.createElement("img");
        imagesEl.src = product[j].img;
        imagesEl.setAttribute('alt', 'cart images');
        tempEl.appendChild(imagesEl);

        tempEl = document.createElement('td');
        tempEl.innerHTML = product[j].name;
        trEl.appendChild(tempEl);

        tempEl = document.createElement('td');
        
        inputEl = document.createElement('input');
        // input.classList = "js-count";
        inputEl.type = "text";
        inputEl.value = cart[i].count;
        inputEl.id = 'js-update-' + product[j].id;
        tempEl.appendChild(inputEl);

        trEl.appendChild(tempEl);

        tempEl = document.createElement('td');
        tempEl.innerHTML = '$' + product[j].cost;
        trEl.appendChild(tempEl);

        tempEl = document.createElement('td');
        tempEl.innerHTML = '$' + subtotal;
        trEl.appendChild(tempEl);

        // Delete
        tempEl = document.createElement('td');
        btnEl = document.createElement("button");
        btnEl.type = "button";
        btnEl.classList.add("btn-primary");
        btnEl.dataset.id = product[j].id;
        btnEl.addEventListener('click', deleteCart);

        iEl = document.createElement('i');
        iEl.classList = "fas fa-trash-alt";
        btnEl.appendChild(iEl);
        tempEl.appendChild(btnEl);
        trEl.appendChild(tempEl);

        // Update
        tempEl = document.createElement('td');
        btnEl = document.createElement("button");
        btnEl.type = "button";
        // btn.innerHTML = "Update";
        btnEl.classList.add("btn-primary");
        btnEl.dataset.id = product[j].id;
        btnEl.addEventListener('click', updateCart);

        iEl = document.createElement('i');
        iEl.classList = "fas fa-user-edit";
        btnEl.appendChild(iEl);
        tempEl.appendChild(btnEl);
        trEl.appendChild(tempEl);
        tbodyEl.appendChild(trEl);  
      }
    }
  }

  trEl = document.createElement('tr');
  
  tempEl = document.createElement('td');
  tempEl.setAttribute('colspan', '4');
  trEl.appendChild(tempEl);

  tempEl = document.createElement('td');
  trEl.appendChild(tempEl);
  bEl = document.createElement('b');
  bEl.innerHTML = 'Total: ';
  tempEl.appendChild(bEl);
  
  tempEl = document.createElement('td');
  tempEl.innerHTML = '$' + sum;
  trEl.appendChild(tempEl);
  
  tempEl = document.createElement('td');
  tempEl.setAttribute('colspan', '2');
  trEl.appendChild(tempEl);

  tbodyEl.appendChild(trEl);
  tableEl.appendChild(tbodyEl);
  CartEl.appendChild(tableEl);

  console.log(CartEl);
}

showCart();

/**
 * Click on 'icon Delete' button
 * @method deleteCart
 * @param {*} [cart]
 */
function deleteCart(e) {
  var cart = JSON.parse(localStorage.getItem('cart'));
  var rowDe = + e.target.dataset.id;
  console.log(rowDe);
  for (var i = 0; i < cart.length; i++) {
    if (cart[i].id === rowDe) {
      console.log(cart[i].id);
      cart.splice(i,1);
      // i--; 
      localStorage.setItem('cart', JSON.stringify(cart));
      alert("Delete thanh cong");   
      numberCart();     
      showCart();
      break;
    }
  }
}

/**
 * Click on 'icon Update' button
 * @method updateCart
 * @param {*} [cart]
 */
function updateCart(event) {
  var row = + event.target.dataset.id;
  var count = document.getElementById('js-update-' + row).value;
  console.log(count);
  if (count > 0 && (Math.ceil(count)-count === 0)) {
    var cart = JSON.parse(localStorage.getItem('cart'));
    for (var i = 0 ; i < cart.length; i++) {
      if (cart[i].id === row) {
        console.log(cart[i].id);
        cart[i].count = count; 
        localStorage.setItem('cart', JSON.stringify(cart));
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
