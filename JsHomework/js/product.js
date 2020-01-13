
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
  },

  {
    img: './images/product/HongTraTraiCay.png' ,
    name: 'Hong Tra Trai Cay',
    cost: '32000',
    description: 'Hồng trà trái cây mang vị ngọt chua đến từ chanh dây cùng hương thơm của sirup ổi hồng, điểm thêm là những lát cam xinh tươi chín mọng kèm dưa hấu tươi mát thơm lành.',
  },

  {
    img: './images/product/LucTraKiwi.png' ,
    name: 'Lục Trà Kiwi',
    cost: '28000',
    description: 'Lục trà thanh mát kết hợp vị Kiwi xay chua ngọt, thơm mát.',
  },

  {
    img: './images/product/TraTacMatOng.png' ,
    name: 'Trà Tắc Mật Ong',
    cost: '32000',
    description: 'Lục trà thanh mát kết hợp vị chua chua của tắc cùng chút vị ngọt ngọt, thơm nồng cùa mật ong.Sản phẩm hoàn toàn không có đường.',
  },

  {
    img: './images/product/SuaTuoiMatCha.png' ,
    name: 'Sữa Tươi Match',
    cost: '36000',
    description: 'Sữa tươi nguyên chất vị matcha dùng kèm trân châu tươi matcha. Sản phẩm vị ngọt nhẹ, thơm mát.',
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
  // var btnClick = document.getElementsByClassName('btn-add');
  // console.log(btnClick);

  cart = cart ? JSON.parse(cart) : [];
  for (var i = 0; i < item.length; i++) {         
    content += '<div class="services-item">' + 
                  '<input class="js-id" type="hidden" value="' + i + '">' +
                  '<div class="services-img">'
                    + '<a href="#"><img src =' + item[i].img + '></a>' + 
                  '</div>' +
                  '<div class = "services-title">' + 
                    '<h4 class = "services-name">' 
                      + item[i].name + 
                    '</h4>' +
                    '<h4 class ="services-cost">' + 
                      '<span>'
                        + item[i].cost +
                      '</span><sup>đ</sup></h4>' + 
                  '</div>' + 
                  '<p class="services-content" id = "js-description">'
                    + item[i].description +
                  '</p>' +
                  '<button id = "' + i +'" class="btn-add" onclick="addCart(this)" type="button">Add to card</button></div>'
                '</div> ';
    result.innerHTML = content;
  }
}
render();

function addCart(btn) {
  var row = btn.parentElement.querySelectorAll(".js-id")[0].value;
  var count = 1;
  var cart = localStorage.getItem("cart");
  cart = cart ? JSON.parse(cart) : [];

  cart.push({id: row, count: count});
  btn.disabled = true;
  localStorage.setItem("cart", JSON.stringify(cart));

  numberCart();
  // location.reload();
}

var cart = JSON.parse(localStorage.getItem("cart"));
console.log(cart);
for (var j = 0; j < cart.length; j++) {
  document.getElementById(cart[j].id).disabled = 'true';
}