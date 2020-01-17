var product = [
  {
    id: 1,
    img: './images/product/TsSocola.png' ,
    name: 'Trà Sữa Socola',
    cost: '20000',
    description: 'Trà sữa truyền thống kết hợp cùng bột sô nguyên chất, không đường.Ngọt vừa, đậm đà vị sô.',
  },

  {
    id: 2,
    img: './images/product/TsBacHa.png' ,
    name: 'Trà Sữa Bạc Hà',
    cost: '22000',
    description: 'Trà sữa truyền thống kết hợp vị bạc hà mát lạnh sảng khoái.',
  },

  {
    id: 3,
    img: './images/product/TraKemPhoMai.png' ,
    name: 'Trà Sữa Nướng Kem Pho Mai',
    cost: '18000',
    description: 'Trà xanh nướng thuần Việt không ướp hương kết hợp cùng lớp kem phô mai macchiato vị béo thơm, ngọt dịu bên trên.',
  },

  {
    id: 4,
    img: './images/product/SuaTuoiPhoMai.png' ,
    name: 'Sữa Tươi Phô Mai Matcha',
    cost: '24000',
    description: 'Sản phẩm dạng đá xay không gây ngán, vị matcha mang đến trải nghiệm khác biệt.',
  },

  {
    id: 5,
    img: './images/product/HongTraTraiCay.png' ,
    name: 'Hong Tra Trai Cay',
    cost: '32000',
    description: 'Hồng trà trái cây mang vị ngọt chua đến từ chanh dây cùng hương thơm của sirup ổi hồng, điểm thêm là những lát cam xinh tươi chín mọng kèm dưa hấu tươi mát thơm lành.',
  },  
  
  {
    id: 7,
    img: './images/product/TraTacMatOng.png' ,
    name: 'Trà Tắc Mật Ong',
    cost: '32000',
    description: 'Lục trà thanh mát kết hợp vị chua chua của tắc cùng chút vị ngọt ngọt, thơm nồng cùa mật ong.Sản phẩm hoàn toàn không có đường.',
  },
  
  {
    id: 6,
    img: './images/product/LucTraKiwi.png' ,
    name: 'Lục Trà Kiwi',
    cost: '28000',
    description: 'Lục trà thanh mát kết hợp vị Kiwi xay chua ngọt, thơm mát.',
  },

  {
    id: 8,
    img: './images/product/SuaTuoiMatCha.png' ,
    name: 'Sữa Tươi Match',
    cost: '36000',
    description: 'Sữa tươi nguyên chất vị matcha dùng kèm trân châu tươi matcha. Sản phẩm vị ngọt nhẹ, thơm mát.',
  }
];

var resultCart = document.getElementById('js-number-cart');

// localStorage.product = JSON.stringify(product);
localStorage.setItem('product', JSON.stringify(product));


/**
 * Output number cart -> icon cart
 * @method numberCart
 */
function numberCart() {
  var cart = JSON.parse(localStorage.getItem('cart'));
  var number = 0;
    number += cart.length;
  resultCart.innerHTML = number;
}
numberCart();
