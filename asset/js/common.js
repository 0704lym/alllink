$(function () {
  popupEvent();
  slickEvent();
});



//팝업창 띄우기
function popupEvent() {
  $('#popup').css({
    "top": (($(window).height() - $('#popup').outerHeight()) / 2 + $(window).scrollTop()) + "px",
    "left": (($('body').width() - $('#popup').outerWidth()) / 2 + $(window).scrollLeft()) + "px",
  });
};


//슬릭
function slickEvent() {
  $('.reciept-slide').slick();
}