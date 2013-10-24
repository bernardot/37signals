$(document).ready( function() { 

  $("#basecamp").hover( function() {
    $('#main').hide();
    $('#bc').show();
  },
   function () {
    $('#bc').hide();
    $('#main').show();
});


  $("#highrise").hover( function() {
    $('#main').hide();
    $('#hr').show();
  },
   function () {
    $('#hr').hide();
    $('#main').show();
});

  $("#campfire").hover( function() {
    $('#main').hide();
    $('#cf').show();
  },
   function () {
    $('#cf').hide();
    $('#main').show();
});

});