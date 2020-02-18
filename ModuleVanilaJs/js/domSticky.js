import {stickyEl, renderList} from "./render.js"; 

var stickyItemEl = document.getElementsByClassName('sticky-item');
  
var event = (function() {
  var topOfSticky = stickyEl.scrollTop;
  function eventSticky() {
    var sum = 0;
    var min =0;
    for (var i = 0; i < stickyItemEl.length; i++) {
      sum += stickyItemEl[i].offsetHeight;
      if (i != 0) {
        min = sum - stickyItemEl[i].offsetHeight;
      }
      if (min < stickyEl.scrollTop && stickyEl.scrollTop < sum) {
        stickyItemEl[i].classList.add('fixed-sticky');
      } else {
        stickyItemEl[i].classList.remove('fixed-sticky'); 
      }
    }
  }

  return {
    addEvent: eventSticky
  };
}());

export {stickyItemEl, event};
