document.addEventListener('DOMContentLoaded', function() {
  const $ = require('jquery');
  console.log('carousel.js ON');
  var slideIndex = 1;
  showSlides(slideIndex);

  // Next/previous controls

  // document.getElementById('prev').addEventListener('click', plusSlides);

  function clicked() {
    console.log('clicked');
  }
  // document.getElementById('next').addEventListener('click', clicked);
  $('prev').on('click', function() {
    console.log('clicked');
  });
  function plusSlides(n) {
    showSlides((slideIndex += n));
  }

  get;
  // Thumbnail image controls
  function currentSlide(n) {
    showSlides((slideIndex = n));
  }

  function showSlides(n) {
    var i;
    var slides = $('mySlides');
    // var dots = $('dot');
    if (n > slides.length) {
      slideIndex = 1;
    }
    if (n < 1) {
      slideIndex = slides.length;
    }
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = 'none';
    }
    // for (i = 0; i < dots.length; i++) {
    //   dots[i].className = dots[i].className.replace(' active', '');
    // }
    slides[slideIndex - 1].style.display = 'block';
    // dots[slideIndex - 1].className += ' active';
  }
});
