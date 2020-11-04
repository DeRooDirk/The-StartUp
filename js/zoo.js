/* -- Pogo Slider -- */
/*- Slider Active - */

var mySlider = $('.pogoSlider').pogoSlider({
    pauseOnHover: false
  }).data('plugin_pogoSlider');

  /*- End  Pogo-Slider -*/ 

  jQuery(window).on('load', function () {

    /* PRE LOADER */
    $(".preeloader").fadeOut(3000);
  });

  // begin van fadeIn WOW script Jquery //

new WOW().init();


