interface Comment {
  id: number,
  content: string,
  isDelete: boolean,
  idArticle: number,
  user: {
    id: number,
    name: string,
    avartar: string,
  },
}

let listCommentEl: HTMLElement = document.getElementById('js-list-comment');
let comment: Comment[];
function getCommentLs(): void {
  comment= JSON.parse(localStorage.getItem('listComment'));
  if (!comment) {
    comment = [];
  }
}

function setCommentLs(): void {
  localStorage.setItem('listComment', JSON.stringify(comment));
}

function renderComment(): void {
  getCommentLs();

  //Handle
  listCommentEl.innerHTML = '';
  let contentEl: string = '';
  if (comment.length) {
    for (let i = 0; i < comment.length; i++) {
      if (comment[i].isDelete == false) {
        contentEl += '<li class="comment-item">' + 
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
  listCommentEl.innerHTML = contentEl;
  deleteComment();
}

renderComment();
/*
* click on "+" button 
* add Add comment event
* Database Comment - localStorage: id, content, isDelete, idArticle, user-inf(id, name,avatar)
* take data contentComment - from input value
*/
let addEl: HTMLElement = document.getElementById('js-add-cm');
addEl.addEventListener('click', addComment);
function addComment():void {
  getCommentLs();

  let contentCommentEl =  <HTMLInputElement>document.getElementById('js-input');
  let contentComment: string = contentCommentEl.value.trim();

  if (!contentComment) {
    alert('You have not entered a comment. Error!'); 
  } else {
    let idComment: number = comment.length + 1;
    let isDelete: boolean = false;
    let idArticle: number = 1;
    comment.push(<Comment>{
      id: idComment,
      content: contentComment, 
      isDelete: isDelete, 
      idArticle: idArticle,
      user: {
        id: 1,
        name: 'Oanh Thuy',
        avartar: 'images/avartar.png',
      },
    });
  }
  //Reset input value
  contentCommentEl.value = '';
  //setLs
  setCommentLs();
  renderComment();
}
/*
* click on "Delete" button 
* add Delete comment event
* Database Comment - localStorage: id, content, isDelete, idArticle, user-inf(id, name,avatar)
* take data contentComment - from input value
*/
function deleteComment(): void {
  getCommentLs();
  let clickDelete = document.getElementsByClassName('js-delete-cm') as HTMLCollectionOf<HTMLElement>;
  for (let i = 0; i < clickDelete.length; i++) {
    clickDelete[i].addEventListener('click', function() {
      let rowDe: number = + this.dataset.id;
      for (let j = 0; j < comment.length; j++) {
        if (rowDe === comment[j].id) {
          comment[i].isDelete = true;
          localStorage.setItem('listComment', JSON.stringify(comment));
          alert('Delete sussces!');
          renderComment();
          break;
        }
      }
    });
  }
}
