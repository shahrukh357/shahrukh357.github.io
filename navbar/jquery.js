$(document).ready(function(){
$('.toggle-menu').click(function() {
  
  $('.navbar').toggleClass('navbar--open', 500);
  $(this).toggleClass('open');
  
});
});