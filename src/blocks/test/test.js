document.addEventListener("DOMContentLoaded", function() {
  var testButton = document.querySelectorAll(".btn");
  testItemCount = document.querySelectorAll(".test__item").length;
  if(testButton) {
    Array.prototype.forEach.call(testButton, function(button) {
      button.addEventListener("click", chooseTest.bind(null, button));
    });
  }
});

var testItemCount;

function chooseTest(button, event) {
  var testItem = button.parentElement.parentElement;
  var nextCount = parseInt(testItem.getAttribute("data-test")) + 1;
  var nextAnswer = button.getAttribute("data-btn");
  var nextVariant = document.querySelector("*[data-test='"+nextCount+"'][data-answer='"+nextAnswer+"']");
  var label = testItem.querySelector(".btn--large");
  if(nextAnswer == 'yes') {
    testItem.children[0].classList.remove("progress-bar--start");
    testItem.children[0].classList.remove("progress-bar--half-no");
    testItem.children[0].classList.add("progress-bar--half-yes");

    if(label) {
      label.classList.remove("btn--large-no");
      label.classList.add("btn--large-yes");
    }

  } else if(nextAnswer == 'no'){
    testItem.children[0].classList.remove("progress-bar--start");
    testItem.children[0].classList.remove("progress-bar--half-yes");
    testItem.children[0].classList.add("progress-bar--half-no");

    if(label) {
      label.classList.remove("btn--large-yes");
      label.classList.add("btn--large-no");
    }

  } else {
    testItem.children[0].classList.remove("progress-bar--start");
    testItem.children[0].classList.remove("progress-bar--half-yes");
    testItem.children[0].classList.remove("progress-bar--half-no");
    testItem.children[0].classList.remove("progress-bar--no");
    testItem.children[0].classList.remove("progress-bar--yes");

    if(label) {
      label.classList.remove("btn--large-yes");
      label.classList.remove("btn--large-no");
    }

  }

  if(testItem.previousElementSibling) {
    testItem.previousElementSibling.children[0].classList.remove("progress-bar--half-no");
    testItem.previousElementSibling.children[0].classList.remove("progress-bar--half-yes");
    testItem.previousElementSibling.children[0].classList.remove("progress-bar--no");
    testItem.previousElementSibling.children[0].classList.add("progress-bar--yes");
  }

  for(var i = nextCount; i <= testItemCount; i++) {
    Array.prototype.forEach.call(document.querySelectorAll("*[data-test='"+i+"']"), function(next) {
    if(next) {
      next.classList.add("test__item--hidden");
      next.children[0].classList.remove("progress-bar--half-no");
      next.children[0].classList.remove("progress-bar--half-yes");
      next.children[0].classList.remove("progress-bar--yes");
      next.children[0].classList.remove("progress-bar--no");
      next.children[0].classList.add("progress-bar--start");
      if(next.querySelector(".btn--large")) {
        next.querySelector(".btn--large").classList.remove("btn--large-yes");
        next.querySelector(".btn--large").classList.remove("btn--large-no");
      }
      Array.prototype.forEach.call(next.querySelectorAll(".btn"), function(btn) {
        if(btn) {
          btn.classList.remove("btn--yes");
          btn.classList.remove("btn--no");
        }
      });
    }
  });

  }

  if(nextVariant) {
    nextVariant.classList.remove("test__item--hidden");
  } else {

    testItem.children[0].classList.add("progress-bar--start");
  }
}
