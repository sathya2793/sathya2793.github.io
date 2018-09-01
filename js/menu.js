//home  page text animation action
$(function() {
$(".typed").typed({
  strings:["Web Design.","^1000 MEAN Stack Developer.","^1000 Android Developer.","^1000 App Developer."],
  loop:true,
  smartBackspace: true
});
});

//smooth scroll
$("#navbar ul li a[href^='#']").on('click', function(e) {

   // prevent default anchor click behavior
   e.preventDefault();

   // store hash
   var hash = this.hash;

   // animate
   $('html, body').animate({
       scrollTop: $(hash).offset().top
     }, 1000, function(){
       // when done, add hash to url
       // (default click behaviour)
       window.location.hash = hash;
     });
});

//navbar bg color change
$(window).scroll(function(){
  if(($(this).scrollTop() > 0) & ($(this).scrollTop() <650))
  {
  $("#navbar").css({"opacity":"0"})
    $("#navbar").css({"visibility":"hidden"})
  }
  else {
    $('nav').toggleClass('scrolled', $(this).scrollTop() > 650);
    $("#navbar").css({"opacity":"1"});
      $("#navbar").css({"visibility":"visible"})
  }
});
