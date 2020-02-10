interface Article {
	id: number,
	title: string,
	images: string,
	content: {
		describe: string,
		titleContent: string,
		detailContent: string,
	},
	status: number,
}

let articles: Article[] = [
  {
    id:  1,
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
];

localStorage.setItem('article', JSON.stringify(articles));

let articleEl: HTMLElement = document.getElementById('js-article');
let article: Article[];
function getArticleLs(): void {
  article = JSON.parse(localStorage.getItem('article'));
  if (!article) {
    article = [];
  }  
}

function renderArticle(): void {
  //getLs
  getArticleLs();

  // Handle 
  articleEl.innerHTML = '';
  let content: string = '';
  for (let i =0; i < article.length; i++) {
    content += '<h2 class="title-new">' +
                  article[i].title +
                '</h2>' +
                '<section class="section-content">' +
                  '<img src="' + article[i].images + '" alt="Milk Tea images">' +
                  '<div class="content-new">' +
                      '<p class="content-describe"><em>' + article[i].content.describe + '</em></p>' +
                      '<h3 class="content-title">' + article[i].content.titleContent + '</h3>' +
                      '<p class="content-detail">' + article[i].content.detailContent + '</em></p>' +
                  '</div>' +
                '</section>';
    articleEl.innerHTML = content;
  }
}
renderArticle();
