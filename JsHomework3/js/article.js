var articles = [
  {
    id: 1,
    title: 'How to Make the Best Iced Chai Latte',
    images: 'images/article-tea-latte.jpg',
    content: { 
      describe:'The best iced chai latte is the one made at home, from scratch. Sweet, spicy, and milky– my iced chai latte recipe is one you’ll make over and over again.',
      titleContent: 'What is Chai Tea?',
      detailContent: 'Hold on, hold on. First, let me say that the words ‘chai’ and ‘tea’ together are redundant.Chai translates to the word ‘tea’ in Hindi. That’s why it’s incorrect to say “chai tea” since you’re just saying “tea tea.”.' +
                      'Chai is any type of tea, but when we in the U.S. say “chai”, we mean a drink made of black tea and spices. This spiced chai is known as masala chai in India but we just call it chai.' +
                      'There is no single specific blend of spices that are universally used. So when you order chai at one cafe, it’ll most likely taste different at another.',
    },
    status: 1,
  }
  // {
  //   id: 1,
  //   title: 'How to Make the Best Bubble Tea (Boba Tea)',
  //   images: 'images/tea.jpg',
  //   content: 'Bubble tea is an iced drink that originated in Taiwan in the 1980s. It’s made with tea, milk, sugar, and chewy tapioca balls.<br>' +
  //             'To drink bubble tea, you need a fat straw that’s big enough to suck up the tapioca balls while drinking the tea.<br>' + 
  //             'If you love bubble tea, try making it at home. My recipe tastes just like the real thing! IT’S FREAKING DELICIOUS!' +
  //             'The Secret to My Bubble Tea <br>' + 
  //             'I had amazing bubble tea in South Korea and the secret was in the tapioca balls — they were still warm in the iced drink! </p>',
  //   status: 1,
  // }
];

localStorage.setItem('article', JSON.stringify(articles));

var articleEl = document.getElementById('js-article');

function renderArticle(argument) {
  var article = JSON.parse(localStorage.getItem('article'));
  if (!article) {
    article = [];
  }

  //Handle 
  articleEl.innerHTML = '';
  var content = '';
  for (var i =0; i < articles.length; i++) {
    content += '<h2 class="title-new">' +
                  article[i].title +
                '</h2>' +
                '<section class="section-content">' +
                  '<img src="' + article[i].images + '" alt="Milk Tea images">' +
                  '<div class="content-new">' +
                    '<div class="detail-content"' +
                      '<p><em>' + article[i].content.describe + '</em></p>' +
                      '<h2>' + article[i].content.titleContent + '</h2>' +
                      '<p>' + article[i].content.detailContent + '</em></p>' +
                    '</div>' +
                  '</div>' +
                '</section>';
    console.log(article[i].content.describe);
    articleEl.innerHTML = content;
  }
}

renderArticle();
