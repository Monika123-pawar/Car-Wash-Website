

$(document).ready(function(){
    $('.customers_feedback').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 3
      });
      $('.carousel').BannerSlide(opts);

      $('.single-item').slick();

  });
  var opts = {

    // CSS class for 'next' arrow
    arrowRight : '.arrow-right',
  
    // CSS class for 'prev' arrow
    arrowLeft : '.arrow-left',
  
    // <a href="https://www.jqueryscript.net/animation/">Animation</a> speed
    speed : 700,
  
    // Auto-play delay time
    slideDuration : 4000
    
  };