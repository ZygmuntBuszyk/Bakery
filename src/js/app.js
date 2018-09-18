// css do js
require('../css/main.css');
require('../css/mainNav.css');
require('../css/sideNav.css');
require('../css/sectionHalf.css');
require('../css/sectionOne.css');
require('../css/tradition.css');
require('../css/WhatWeDo.css');
require('../css/tryIt.css');
require('../css/galery.css');
require('../css/freeSamples.css');
require('../css/testimonials.css');
require('../css/OurTeam.css');
require('../css/newsletter.css');
require('../css/contact.css');
require('../css/footer.css');
// require('../css/stickyNavbar.css');
//js scripts
const $ = require('jquery');
require('owl.carousel/dist/assets/owl.carousel.css');
require('owl.carousel');
// import ScrollReveal from 'scrollreveal';
// const ScrollReveal = require('scrollreveal');
let ConsoleLogNav = require('./nav.js');
const ScrollReveal = require('scrollreveal');
require('./smoothScroll.js');
require('./revealing.js');

// OWL
$(document).ready(function() {
  (function($) {
    $('.owl-carousel').owlCarousel({
      loop: true,
      margin: 10,
      nav: true,
      responsive: {
        0: {
          items: 1
        },
        600: {
          items: 1
        },
        1000: {
          items: 1
        }
      }
    });
  })(jQuery);
});
