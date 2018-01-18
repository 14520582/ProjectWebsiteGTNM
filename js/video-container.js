var contentHeight = 350;

$(document).ready(function(){
  var video = document.getElementById('film-video');

  video.onloadedmetadata = function(){
     var videoHeight = $('.video-container > video').height();

     // scroll to view video in the middle of screen
     $('body').animate({
       scrollTop: $('.video-container > video').offset().top - getAutoScrollTop()
     }, 2000);
  };

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


function getAutoScrollTop(){
  var top = (window.innerHeight - $('.video-container > video').height()) / 2;
  console.log(window.innerHeight + '; ' + $('.video-container > video').height());
  return (top > 0) ? top : 0;
}

function getContentTop(){
  return window.innerHeight - contentHeight;
}

function getContentBottom(){
  return window.innerHeight - parseInt($('.video-menu .content').css('bottom'), 10);
}
