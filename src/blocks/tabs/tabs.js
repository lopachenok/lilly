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