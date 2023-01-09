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

    $("#demo").maskMoney();

});

var slider = document.getElementById("myRange");
var output = document.getElementById("demo");
output.innerHTML = slider.value;

slider.oninput = function() {
  output.value = this.value;
  var calc = (slider.value / 1000000) *100;
  slider.style.backgroundImage  = `linear-gradient(90deg, #0BA915 ${calc}%, #00FFFF ${100 - calc}%);`
  $("#demo").maskMoney();

}

output.oninput = function() {
  
  var calc = (slider.value / 1000000) *100;
  slider.style.backgroundImage  = `linear-gradient(90deg, #0BA915 ${calc}%, #00FFFF ${100 - calc}%);`
  slider.value = this.value;
  $("#demo").maskMoney();
}

var sliderColaboradores = document.getElementById("rangeColaboradores");
var outputColaboradores = document.getElementById("valueColaboradores");
outputColaboradores.innerHTML = sliderColaboradores.value;

sliderColaboradores.oninput = function() {
  outputColaboradores.value = this.value;
  var calc = (sliderColaboradores.value / 1000000) * 100;
  sliderColaboradores.style.backgroundImage  = `linear-gradient(90deg, #0BA915 ${calc}%, #00FFFF ${100 - calc}%);`
}

outputColaboradores.oninput = function() {
  var calc = (sliderColaboradores.value / 1000000) *100;
  sliderColaboradores.style.backgroundImage  = `linear-gradient(90deg, #0BA915 ${calc}%, #00FFFF ${100 - calc}%);`
  sliderColaboradores.value = this.value;
}

$( ".radioLabel" ).change(function() {
  if($('.radioSocio').is(':checked')){
  

    $('.labelSocio').addClass('activeLabel')
    $('.labelRepresentante').removeClass('activeLabel')
  }else{
    $('.labelRepresentante').addClass('activeLabel')
    $('.labelSocio').removeClass('activeLabel')
  }
});