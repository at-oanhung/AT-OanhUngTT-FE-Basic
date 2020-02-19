var stickyList = (function() {
  function renderList(listStickyEl, listItem, {nameSticky: nameSticky, titleSticky: titleSticky}) {
    var ulEl = document.createElement('ul');
    ulEl.classList.add(nameSticky);
    ulEl.id = 'js-section-sticky';

    var content = '';
    for (var i = 0; i < listItem.length; i++) {
      content +=  '<li class="sticky-item">' + 
      '<div class="'+ titleSticky + '">' +
      listItem[i].title +
      '</div>'+
      '<ul class="sticky-content">';
      for (var j = 0; j < listItem[i].content.length; j++) {
        content +=  '<li>' + listItem[i].content[j]+ '</li>';
      }
      content += '</ul>' + '</li>';
    }

    ulEl.innerHTML = content;
    listStickyEl.appendChild(ulEl);
    ulEl.addEventListener('scroll', eventSticky);
  }

  function eventSticky(event) {
    var stickyItemEl = document.getElementsByClassName('sticky-item');
    var maxHeight = 0;
    var minHeight = 0;
    for (var i = 0; i < stickyItemEl.length; i++) {
      maxHeight += stickyItemEl[i].offsetHeight;
      if (i) {
        minHeight = maxHeight - stickyItemEl[i].offsetHeight;
      }
      
      if (minHeight < event.target.scrollTop && event.target.scrollTop < maxHeight) {
        stickyItemEl[i].classList.add('fixed-sticky');
      } else {
        stickyItemEl[i].classList.remove('fixed-sticky'); 
      }
    }
  }

  return {
    render: renderList
  };
}());

export { stickyList };
