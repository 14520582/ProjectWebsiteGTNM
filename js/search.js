var searchContent = $('.search-form #search-content');
var searchForm = $('.search-form');
var searchSubmit = $('.search-form #search-submit');
var leftMargin = 80;
var outerWidth = searchContent.outerWidth(true);

$(document).ready(function(){

  // when mouse hover on the button search, the search content shows
  $('.search-form #search-submit').on({
    mouseenter: function(e){
      displaySearchContent();
    }
  });

  // when mouse leave the search form and search content is not focused,
  // the content hides
  $('.search-form').on({
    mouseleave: function(e) {
      if(!searchContent.is(':focus')){
        hideSearchContent();
      }
    }
  });

  // when search content lose focus, it hides
  searchContent.blur(function(e){
    hideSearchContent();
  });
});

function displaySearchContent() {
  searchForm.animate({width: getSearchFormWidth()}, 300);
  searchContent.stop(true, true).delay(300).animate({width: getSearchContentWidth()}, 300).show();
}

function hideSearchContent(){
  searchContent.animate({width: 0}, 300).hide(300);
  searchForm.stop(true, true).delay(300).animate({width: searchSubmit.outerWidth(true)}, 300);
}

function getSearchFormWidth() {
  return window.innerWidth - leftMargin;
}

function getSearchContentWidth(){
  return getSearchFormWidth() - searchSubmit.outerWidth(true) - outerWidth;
}
