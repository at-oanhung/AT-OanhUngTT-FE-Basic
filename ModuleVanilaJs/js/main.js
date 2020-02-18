import {stickyEl, renderList} from "./render.js"; 
renderList();

import {stickyItemEl, event} from "./domSticky.js";
stickyEl.addEventListener('scroll',function(){
  event.addEvent();
});
