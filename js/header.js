
$(document).ready(function(){

  var selectedMenu = null;

  $('.navbar .menu > li > a').on({
    mouseenter: function(e){

      $(this).next().show();
      selectedMenu = $(this);
    }
  });

  $('.navbar .menu > li').on({
    mouseleave: function(e){
      console.log('blur');
      selectedMenu.next().hide();
      selectedMenu = null;
    }
  });

  $('.menu .submenu > li > a').focus(function(e){
    console.log('click');
  });

});
