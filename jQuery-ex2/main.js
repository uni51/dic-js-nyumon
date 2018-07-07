$(function() {
  $('#accordion dd').hide();
  
  $('#accordion dt').click(function(e){
    $(this).next('dd').slideToggle();
  })  
});