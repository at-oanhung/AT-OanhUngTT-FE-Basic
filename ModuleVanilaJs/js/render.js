import {listItem} from "./listItem.js";

var stickyEl = document.querySelector('#js-section-sticky');

var content = '';
function renderList() {
  for (var i = 0; i < listItem.length; i++) {
    content +=  '<li class="sticky-item">' + 
                  '<div class="sticky-title">' +
                    listItem[i].title +
                  '</div>'+
                  '<ul class="sticky-content">';
    for (var j = 0; j < listItem[i].content.length; j++) {
      content +=  '<li>' + listItem[i].content[j]+ '</li>';
    }
    content += '</ul>' + '</li>';
  }
  stickyEl.innerHTML = content;
}

export {stickyEl, renderList};
