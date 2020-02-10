var listCommentEl = document.getElementById('js-list-comment');
var comment;
function getCommentLs() {
    comment = JSON.parse(localStorage.getItem('listComment'));
    if (!comment) {
        comment = [];
    }
}
function setCommentLs() {
    localStorage.setItem('listComment', JSON.stringify(comment));
}
function renderComment() {
    getCommentLs();
    //Handle
    listCommentEl.innerHTML = '';
    var contentEl = '';
    if (comment.length) {
        for (var i = 0; i < comment.length; i++) {
            if (comment[i].isDelete == false) {
                contentEl += '<li class="comment-item">' +
                    '<a href="#" class="comment-item-avartar">' +
                    '<img src="' + comment[i].user.avartar + '" alt="Avartar">' +
                    '</a>' +
                    '<div class="comment-item-inf">' +
                    '<span class="comment-item-username clr">' + comment[i].user.name + '</span>' +
                    '<span class="comment-item-cmt clr js-content">' + comment[i].content + '</span>' +
                    '<button type="button" class="btn-second delete js-delete-cm" data-id="' + comment[i].id + '" id="a">Delete</button>' +
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
var addEl = document.getElementById('js-add-cm');
addEl.addEventListener('click', addComment);
function addComment() {
    getCommentLs();
    var contentCommentEl = document.getElementById('js-input');
    var contentComment = contentCommentEl.value.trim();
    if (!contentComment) {
        alert('You have not entered a comment. Error!');
    }
    else {
        var idComment = comment.length + 1;
        var isDelete = false;
        var idArticle = 1;
        comment.push({
            id: idComment,
            content: contentComment,
            isDelete: isDelete,
            idArticle: idArticle,
            user: {
                id: 1,
                name: 'Oanh Thuy',
                avartar: 'images/avartar.png'
            }
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
function deleteComment() {
    getCommentLs();
    var clickDelete = document.getElementsByClassName('js-delete-cm');
    var _loop_1 = function (i) {
        clickDelete[i].addEventListener('click', function () {
            var rowDe = +this.dataset.id;
            for (var j = 0; j < comment.length; j++) {
                if (rowDe === comment[j].id) {
                    comment[i].isDelete = true;
                    localStorage.setItem('listComment', JSON.stringify(comment));
                    alert('Delete sussces!');
                    renderComment();
                    break;
                }
            }
        });
    };
    for (var i = 0; i < clickDelete.length; i++) {
        _loop_1(i);
    }
}
