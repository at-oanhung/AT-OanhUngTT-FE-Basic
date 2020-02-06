var listCommentEl = document.getElementById('js-list-comment');
var formCommentEl = document.getElementById('js-form-comment');

var comment;
function getLs() {
  comment = JSON.parse(localStorage.getItem('listComment'));
  if (!comment) {
    comment = [];
  }
}

/*
* @method renderComment
* add Delete event for the button
* ktra status Delete: showComment (if isDelete: false)
*/
function renderComment() {
  //get Ls
  getLs();

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
  var contentForm = '';
  contentForm+= '<li class="comment-item">' + 
  '<a href="#" class="comment-item-avartar">' +
  '<img src="images/avartar.png" alt="Avartar">' +
  '</a>' +
  '<form class="comment-item-inf" method="post">' + 
  '<input type="text" name="comment" placeholder="Comment" id="js-input">' +
  '<button type="button" class="btn-primary btn-add" id="js-add-cm">+</button>' +
  '</form>' + 
  '<li>';
  formCommentEl.innerHTML = contentForm;
}

renderComment();
renderForm();

/*
* click on "+" button 
* add Add comment event
* Database Comment - localStorage: id, content, isDelete, idArticle, user-inf(id, name,avatar)
* take data contentComment - from input value
*/
// function addComment() {
var add = document.getElementById('js-add-cm');
add.addEventListener('click', addComment);
function addComment() {
  //get Ls
  var comment = JSON.parse(localStorage.getItem('listComment'));
  if (!comment) {
    comment = [];
  }

  var row = document.getElementById('js-input').value;
  row = row.trim();
  if (row === ''){
    alert('You have not entered a comment. Error!');  
  } else {
    var id = 1;
    var isDelete = false;
    var idArticle = 1;
    if (comment && comment.length) {
      for (var i = 0; i < comment.length; i++) {
        if (i === (comment.length - 1)) {
          comment.push({
            id: (comment.length + 1), 
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
  //Reset input value
  document.getElementById('js-input').value = '';
  //setLs
  localStorage.setItem('listComment', JSON.stringify(comment));
  renderComment();
}

document.querySelector('#js-input').addEventListener('keypress', function (event) {
  if (event.key === 'Enter') {
    event.preventDefault();
    addComment();
  }
});
/*
* click on "Delete" button 
* add Delete comment event
* Database Comment - localStorage: id, content, isDelete, idArticle, user-inf(id, name,avatar)
* take data contentComment - from input value
*/
function deleteComment() {
  var comment = JSON.parse(localStorage.getItem('listComment'));
  var clickDelete = document.getElementsByClassName('js-delete-cm');
  // console.log(clickDelete);
  for (var i = 0; i < clickDelete.length; i++) {
    // console.log(clickDelete[i]);
    clickDelete[i].addEventListener('click', function() {
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
