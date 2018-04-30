 // Scrolling Effect
      $(window).on("scroll", function() {
            if($(window).scrollTop()) {
                  $('nav').addClass('black');
            }

            else {
                  $('nav').removeClass('black');
            }
      });
// Logo Fade
$(window).scroll(function(){
    $(".logo").css("opacity", 1 - $(window).scrollTop() / 250);
  });

