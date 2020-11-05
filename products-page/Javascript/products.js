/* Mix it up */
 
 
 var containerEl = document.querySelector('.product-items');
  var mixer = mixitup(containerEl);

var slideIndex = [1,1,1,1,1,1];
var slideId = ["mySlides1", "mySlides2", "mySlides3", "mySlides4", "mySlides5", "mySlides6"]
showSlides(1, 0);
showSlides(1, 1);
showSlides(1, 2);
showSlides(1, 3);
showSlides(1, 4);
showSlides(1, 5);


/* Carousel */

function plusSlides(n, no) {
  showSlides(slideIndex[no] += n, no);
}

function showSlides(n, no) {
  var i;
  var x = document.getElementsByClassName(slideId[no]);
  if (n > x.length) {slideIndex[no] = 1}    
  if (n < 1) {slideIndex[no] = x.length}
  for (i = 0; i < x.length; i++) {
     x[i].style.display = "none";  
  }
  x[slideIndex[no]-1].style.display = "block";  
}

/* Scroll */

$(window).scroll(function() {
  var height = $(window).scrollTop();
  if (height > 200) {
      $('.scrollToTop').fadeIn();
  } else {
      $('.scrollToTop').fadeOut();
  }
});


$(document).ready(function() {
  $(".scrollToTop").click(function(event) {
      event.preventDefault();
      $("html, body").animate({ scrollTop: 0 }, "slow");
      return true;
  });

});



