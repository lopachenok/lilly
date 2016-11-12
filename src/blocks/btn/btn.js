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
   var btnNotsure = button.parentElement.querySelector(".btn--notsure");
   if(btnNotsure) {
     btnNotsure.classList.remove("btn--notsure");
   }
   button.classList.add("btn--yes");
 } else if(button.getAttribute("data-btn") == "no"){
   var btnYes = button.parentElement.querySelector(".btn--yes");
   if(btnYes) {
     btnYes.classList.remove("btn--yes");
   }
   var btnNotsure = button.parentElement.querySelector(".btn--notsure");
   if(btnNotsure) {
     btnNotsure.classList.remove("btn--notsure");
   }
   button.classList.add("btn--no");
 } else {
   var btnNo = button.parentElement.querySelector(".btn--no");
   if(btnNo) {
     btnNo.classList.remove("btn--no");
   }
   var btnYes = button.parentElement.querySelector(".btn--yes");
   if(btnYes) {
     btnYes.classList.remove("btn--yes");
   }
   button.classList.add("btn--notsure");
 }
}
