var listCommentEl = document.getElementById('js-list-comment');
var formCommentEl = document.getElementById('js-form-comment');

function renderComment() {
  //get Ls
  var comment = JSON.parse(localStorage.getItem('listComment'));
  if (!comment) {
    comment = [];
  }
  var article = JSON.parse(localStorage.getItem('article'));
  if (!article) {
    article = [];
  }

  //Handle 
  listCommentEl.innerHTML = '';
  var content = '';
  if (comment.length) {
    for (var i = 0; i < comment.length; i++) { 
      if (comment[i].isDelete === false) {
        content += '<li class="comment-item">' + 
                      '<a href="#" class="comment-item-avartar">' +
                        '<img src="' + comment[i].user.avartar + '" alt="Avartar">' +
                      '</a>' +
                      '<div class="comment-item-inf">' + 
                        '<span class="comment-item-username clr">' + comment[i].user.name + '</span>' +
                        '<span class="comment-item-cmt clr js-content">' + comment[i].content + '</span>' +
                        '<button type="button" class="btn-second delete js-delete-cm" data-id="' + comment[i].id +'" id="a">Delete</button>' +
                      '</div>' + 
                    '<li>';
      }    
    }
  }
  listCommentEl.innerHTML = content;
  deleteComment();
}

function renderForm() {
  var contentForm = "";
  contentForm+= '<li class="comment-item">' + 
                  '<a href="#" class="comment-item-avartar">' +
                    '<img src="images/avartar.png" alt="Avartar">' +
                  '</a>' +
                  '<form class="comment-item-inf">' + 
                    '<input type="text" name="comment" placeholder="Comment" id="js-input">' +
                    '<button type="button" class="btn-primary add" id="js-add-cm">+</button>' +
                  '</form>' + 
                '<li>';
  formCommentEl.innerHTML = contentForm;
}

renderComment();
renderForm();

var add = document.getElementById("js-add-cm");
add.addEventListener("click", function(){
  //get Ls
  var comment = JSON.parse(localStorage.getItem('listComment'));
  if (!comment) {
    comment = [];
  }

  var row = document.getElementById('js-input').value;
  if (row === ''){
    alert('You have not entered a comment. Error!');  
  } else {
    var id = 1;
    var isDelete = false;
    var idArticle = 1;
    if (comment && comment.length) {
      for (var i = 0; i < comment.length; i++) {
        console.log("i" + i);
        id = i + 1;
        console.log("id" + id);
        if (id === comment.id){
          continue;
        } else if (id === (comment.length)) {
          comment.push({
            id: (id + 1), 
            content: row, 
            isDelete: isDelete, 
            idArticle: idArticle,
            user: {
              id: 1,
              name: 'Oanh Thuy',
              avartar: 'images/avartar.png',
            }
          });
          break;
        } 
      }
    } else {
      comment.push({
        id: id, 
        content: row, 
        isDelete: isDelete, 
        idArticle: idArticle,
        user: {
          id: 1,
          name: 'Oanh Thuy',
          avartar: 'images/avartar.png',
        }
      });
    }
  }
  console.log(comment);
  //Add comment 
  document.getElementById('js-input').value = '';
  localStorage.setItem('listComment', JSON.stringify(comment));
  renderComment();
});


function deleteComment() {
  var comment = JSON.parse(localStorage.getItem('listComment'));
  var clickDelete = document.getElementsByClassName("js-delete-cm");
  console.log(clickDelete);
  for (var i = 0; i < clickDelete.length; i++) {
    console.log(clickDelete[i]);
    clickDelete[i].addEventListener("click", function() {
      var rowDe = + this.dataset.id;
      console.log(rowDe);
      for (var i = 0; i < comment.length; i++) {
        if (rowDe === comment[i].id) {
          comment[i].isDelete = true;
          localStorage.setItem('listComment', JSON.stringify(comment));
          alert('Delete sussces!');   
          renderComment();
        }
      }
    });    
  }
}
