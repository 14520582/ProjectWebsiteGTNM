var contentWidth = 400;

$(document).ready(function(){

  $('.video-menu .content').css('top', getContentBottom());

  $('.video-menu #info, #suggestion').on({
    mouseenter: function(e){
      $(this).find('.content').animate({top: getContentTop(), opacity: 1}, 600);
    },
    mouseleave: function(e){
      $(this).find('.content').animate({top: getContentBottom(), opacity: 0}, 600);
    }
  });
});

function getContentTop(){
  return window.innerHeight - contentWidth;
}

function getContentBottom(){
  return window.innerHeight - parseInt($('.video-menu .content').css('bottom'), 10);
}
