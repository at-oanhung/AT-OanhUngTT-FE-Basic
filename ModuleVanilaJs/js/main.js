import {stickyEl, renderList} from "./render.js"; 

import {stickyItemEl, event} from "./domSticky.js";

renderList();

stickyEl.addEventListener('scroll', function() {
  event.addEvent();
});
