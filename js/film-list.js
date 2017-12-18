$(document).ready(function(){

  var autoscrollSize = getAutoScrollSize();

  $(window).on({
    resize: function(e){
      autoscrollSize = getAutoScrollSize();
    }
  });

  // hide scrollbar;

  var scrollbarHeight = $('.film-items')[0].offsetHeight - $('.film-items')[0].clientHeight;
  $('.film-items').css('height', $('.film-items')[0].offsetHeight + scrollbarHeight + 1);
  $('.film-description').css('width', $('.film-item')[0].offsetWidth + scrollbarHeight + 1);
  $('.film-item > p').css('width', $('.film-item')[0].offsetWidth);

  // auto scroll film-items
  var maxScrollLeft = $('.film-items').get(0).scrollWidth - $('.film-items').get(0).clientWidth;

  $('.film-list > div > .back').click(function(e){
    var obj = $(this).parent().find('.film-items');

    if(obj.scrollLeft() > 0){
      obj.animate({scrollLeft: obj.scrollLeft() - autoscrollSize}, 1000);
    }
    else{
      obj.animate({scrollLeft: maxScrollLeft}, 1000);
    }
  });

  $('.film-list > div > .next').click(function(e){
    var obj = $(this).parent().find('.film-items');

    if(obj.scrollLeft() < maxScrollLeft){
      obj.animate({scrollLeft: obj.scrollLeft() + autoscrollSize}, 1000);
    }
    else {
      obj.animate({scrollLeft: 0}, 1000);
    }
  });

});

function getAutoScrollSize(){
  var itemsWidth = $('.film-items').width();
  var itemWidth = $('.film-item').outerWidth(true);
  return parseInt(itemsWidth / itemWidth, 10) * itemWidth;
}
