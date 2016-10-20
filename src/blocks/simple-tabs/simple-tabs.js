$(document).ready(function() {
  $('.simple-tabs__item').on('click', function(e) {
    e.preventDefault();
    $('.simple-tabs__item--active').removeClass('simple-tabs__item--active');
    $(this).addClass('simple-tabs__item--active');
    $('.simple-tabs__content--active').removeClass('simple-tabs__content--active');
    $($(this).children().attr('href')).addClass('simple-tabs__content--active');
  });
});
