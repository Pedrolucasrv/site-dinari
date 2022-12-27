$( document ).ready(function() {
    $('.phone').mask('(00) 0000-00000');
    console.log('aki')

    $( ".submitBtn" ).on( "click", function() {
        

            
    });

    $('.carousel').slick({
        autoplay:true,
        arrows:true,
        dots:true,
        slidesToShow: 4,
        slidesToScroll: 4,
        infinite: true,
        responsive: [
            {
              breakpoint: 1200,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
        arrows:true,

              }
            },
            {
              breakpoint: 1050,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                arrows:true,

              }
            },
            {
              breakpoint: 769,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                arrows:false,
                
              }
            }
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
          ]
      });
});