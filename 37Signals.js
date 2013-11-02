$(document).ready( function() { 

  $("#basecamp").hover( function() {
    $('#main').hide();
    $('#bc').show();
    $('#right1').show();
  },
   function () {
    $('#bc').hide();
    $('#main').show();
    $('#right1').hide();
});


  $("#highrise").hover( function() {
    $('#main').hide();
    $('#hr').show();
    $('#right2').show();
  },
   function () {
    $('#hr').hide();
    $('#main').show();
    $('#right2').hide();
});

  $("#campfire").hover( function() {
    $('#main').hide();
    $('#cf').show();
    $('#left').show();
  },
   function () {
    $('#cf').hide();
    $('#main').show();
    $('#left').hide();
});

});