
var product = [
  {
    img: './images/product/TsSocola.png' ,
    name: 'Trà Sữa Socola',
    cost: '20000',
    description: 'Trà sữa truyền thống kết hợp cùng bột sô nguyên chất, không đường.Ngọt vừa, đậm đà vị sô.',
  },

  {
    img: './images/product/TsBacHa.png' ,
    name: 'Trà Sữa Bạc Hà',
    cost: '22000',
    description: 'Trà sữa truyền thống kết hợp vị bạc hà mát lạnh sảng khoái.',
  },

  {
    img: './images/product/TraKemPhoMai.png' ,
    name: 'Trà Sữa Nướng Kem Pho Mai',
    cost: '18000',
    description: 'Trà xanh nướng thuần Việt không ướp hương kết hợp cùng lớp kem phô mai macchiato vị béo thơm, ngọt dịu bên trên.',
  },

  {
    img: './images/product/SuaTuoiPhoMai.png' ,
    name: 'Sữa Tươi Phô Mai Matcha',
    cost: '24000',
    description: 'Sản phẩm dạng đá xay không gây ngán, vị matcha mang đến trải nghiệm khác biệt.',
  }
]

// localStorage.product = JSON.stringify(product);
localStorage.setItem("product", JSON.stringify(product));
var item = [];
item = JSON.parse(localStorage.getItem('product'));

var result = document.getElementById('js-result');


function render() {
  var content = "";
  var cart = localStorage.getItem("cart");
  cart = cart ? JSON.parse(cart) : [];
  for (var i = 0; i < item.length; i++) {
    var htmlButton = "";
    for (var j = 0; j < cart.length; j++) {
      if (i == cart[j].id) {
        htmlButton += "disabled";
        break;
      }
    }

    content += '<div class="services-item">' + '<input class="js-id" type="hidden" value="' + i + '">'+
                  '<div class="services-img"><a href="#"><img src =' 
                    + item[i].img + 
                  '></a></div>' +
                  '<div class = "services-title"><h4 class = "services-name">' 
                    + item[i].name + 
                  '</h4><h4 class ="services-cost"><span  id = "js-cost">'
                    + item[i].cost +
                  '</span><sup id = "js-code">đ</sup></h4></div><p class="services-content" id = "js-description">'
                    + item[i].description +
                  '</p><button ' +htmlButton + ' class="btn-add" onclick="addCart(this)" type="button">Add to card</button></div>'
                '</div> ';
    result.innerHTML = content;
  }
}
render();
