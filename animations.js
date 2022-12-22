gsap.registerPlugin(ScrollTrigger);


gsap
    .timeline({
      scrollTrigger: {
        trigger:'.fade-up',
        start: "top bottom",
        end: "+=20px",
        scrub: 3,
        markers: false,
      }
    })
    .from('.fade-up', {
        y: 50,
        opacity:0
    })

  ;



 gsap
    .timeline({
      scrollTrigger: {
        trigger:'.about-us',
        start: "-200px bottom",
        end: "+=50",
        scrub: 3,
        markers: false,
      }
    })
    .from('.about-us', {
        y: 400
    })
    .from('.overlayed-about-us', {
        y: 150
    },'<')
  ;


gsap
.timeline({
    scrollTrigger: {

    trigger: '.about-us-timeline',
    start: 'top top',
    scrub: 5,
    endTrigger: ".end-scp",
    end: "+=500",
    pinSpacing: true,
    pin:true,
    markers: true
    }
})
.from('.dinari-animated-logo', {
    x: 50,
    transform: 'rotate(13deg)'
})  .to('.timeline', {
    '--timeline-before': '295px',
}, '<' )
.to('.timeline2', {
  '--timeline-opacity': '1',
}, '>' ).from('.timeline2  .h2', {
  x: 100,
  opacity:0
}, '<' )
.from('.timeline2  .display-6', {
  y: 100,
  opacity:0
}, '<' )


