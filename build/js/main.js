$(document).ready(function() {
  var accordion = $(".accordion");
  var elem = new Foundation.Accordion(accordion);
});
document.addEventListener("DOMContentLoaded", function () {
  var tabs = document.getElementById("tabs");
  if (tabs) {
    tabs.addEventListener("click", function (e) {
      if (e.target.tagName == "UL") {
        return false;
      }
      
      var elem;
      if(e.target.tagName == "LI") {
        elem = e.target;
      } else {
        elem = e.target.parentElement;
      }     
     
      document.querySelector(".tabs__title--active").classList.remove("tabs__title--active");
      elem.classList.add("tabs__title--active");
      document.querySelector(".tabs__panel--open").classList.remove("tabs__panel--open");
      document.getElementById(elem.getAttribute("data-panel")).classList.add("tabs__panel--open");
    });
  }

});
document.addEventListener("DOMContentLoaded", function() {
  var buttons = document.querySelectorAll(".btn");
  
  if(buttons) {
    Array.prototype.forEach.call(buttons, function(button) {
      button.addEventListener("click", clickButton.bind(null, button));
    });
  }
  
});

function clickButton(button, e) {
 if(button.getAttribute("data-btn") == "yes") {
   var btnNo = button.parentElement.querySelector(".btn--no");
   if(btnNo) {
     btnNo.classList.remove("btn--no");
   }
   button.classList.add("btn--yes");
 } else {
   var btnYes = button.parentElement.querySelector(".btn--yes");
   if(btnYes) {
     btnYes.classList.remove("btn--yes");
   }
   button.classList.add("btn--no");
 }
}
document.addEventListener("DOMContentLoaded", function() {
  
});
// (function(){
// код
// }());
//# sourceMappingURL=main.js.map
