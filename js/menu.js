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
$(document).ready(function() {
    $('.gallery').mauGallery({
        columns: {
            xs: 1,
            sm: 2,
            md: 2,
            lg: 3,
            xl: 4
        },
        lightBox: true,
        lightboxId: null,
        showTags: true,
        tagsPosition: 'top'
    });
    $('.two img').click(function(e) {
        // $(this).listImage()
        $(this).listImage({
            list: [
                'https://placeimg.com/640/480/animals',
                'https://placeimg.com/640/480/arch',
                'https://placeimg.com/640/480/nature',
                'https://placeimg.com/640/480/people',
                'https://placeimg.com/640/480/tech',
            ]
        })
    })

});
