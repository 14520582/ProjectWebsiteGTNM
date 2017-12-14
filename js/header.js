
$(document).ready(function(){

  var selectedMenu = null;

  $('.navbar .menu > li > a').on({
    focus: function(e){

      $(this).next().show();
      selectedMenu = $(this);
    },
    blur: function(e){

      selectedMenu.next().hide();
      selectedMenu = null;
    }
  });

});
