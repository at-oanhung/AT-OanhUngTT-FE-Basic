var listCommentEl = document.getElementById('js-list-comment');
var formCommentEl = document.getElementById('js-form-comment');

function renderComment() {
  //get Ls
  var comment = JSON.parse(localStorage.getItem('listComment'));
  if (!comment) {
    comment = [];
  }

  //Handle 
  listCommentEl.innerHTML = '';
  var content = "";
  if (comment.length) {
    for (var i = 0; i < comment.length; i++) {         
      content += '<li class="comment-item">' + 
                    '<a href="#" class="comment-item-avartar">' +
                      '<img src="images/avartar.png" alt="Avartar">' +
                    '</a>' +
                    '<div class="comment-item-inf">' + 
                      '<span class="comment-item-username clr">Oanh Thuy</span>' +
                      '<span class="comment-item-cmt clr js-content"> ' + comment[i].content + '</span>' +
                      '<button type="button" class="btn-second delete" data-id="' + comment[i].id +'" id="js-delete-cm">Delete</button>' +
                    '</div>' + 
                  '<li>';
    }
  }
  listCommentEl.innerHTML = content;
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
  if (row === ""){
    alert("Bạn chưa nhập Comment");  
  } else {
    // var id = 0;
    if (comment && comment.length) {
      for (var i = 0; i < comment.length; i++) {
        if (i === (comment.length -1)) {
          comment.push({id: comment.length, content: row}); 
          break;
        }
      }
    } else {
      comment.push({id: 0, content: row});
    }
  }
  console.log(comment);
  //Add comment 
  document.getElementById('js-input').value = '';
  localStorage.setItem('listComment', JSON.stringify(comment));
  renderComment();
});

document.getElementById("js-delete-cm").addEventListener("click", deleteComment);

function deleteComment(event) {
  var comment = JSON.parse(localStorage.getItem('listComment'));
  var rowDe = + event.target.dataset.id;
  console.log(typeof rowDe);
  for (var i = 0; i < comment.length; i++) {
    console.log(typeof comment[i].id);
    if (rowDe === comment[i].id) {
      // console.log('cm-content: '  + comment[i].content);
      comment.splice(comment[i],1);
      // i--; 
      localStorage.setItem('listComment', JSON.stringify(comment));
      alert("Delete thanh cong");   
      renderComment();
      break;
    } else {
      alert("Delete k thanh cong");  
    }
  }
}
