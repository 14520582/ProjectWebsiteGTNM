$(document).ready(function(){

  var autoscrollSize = getAutoScrollSize();

  $(window).on({
    resize: function(e){
      autoscrollSize = getAutoScrollSize();
    }
  });

  // hide scrollbar
  var scrollbarHeight = $('.film-items')[0].offsetHeight - $('.film-items')[0].clientHeight;
  $('.film-items').css('height', $('.film-items')[0].offsetHeight + scrollbarHeight + 1);
  $('.film-description').css('width', $('.film-item')[0].offsetWidth + scrollbarHeight + 1);

  // auto scroll film-items
  $('.film-list > div > .back').click(function(e){
    var obj = $(this).parent().find('.film-items');
    obj.scrollLeft(obj.scrollLeft() - autoscrollSize);
  });

  $('.film-list > div > .next').click(function(e){
    var obj = $(this).parent().find('.film-items');
    obj.scrollLeft(obj.scrollLeft() + autoscrollSize);
  });

});

function getAutoScrollSize(){
  var itemsWidth = $('.film-items').width();
  var itemWidth = $('.film-item').outerWidth(true);
  return parseInt(itemsWidth / itemWidth, 10) * itemWidth;
}
