gsap.registerPlugin(ScrollTrigger);


// gsap
//     .timeline({
//       scrollTrigger: {
//         trigger:'.fade-up',
//         start: "top 10%",
//         end:'1px',
//         scrub: 1,
       
//       }
//     })
//     .from('.fade-up h2', {
//         y: 50,
//         opacity:0
//     })

//   ;



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
    start: "50% 50%",
    scrub: 5,
    anticipatePin:2,
    end: "+=800",
    pinSpacing: true,
    pin:'.about-us-timeline',
   
    }
})
.from('.dinari-animated-logo', {
    x: 50,
    transform: 'rotate(13deg)'
})  .to('.timeline', {
    '--timeline-before': '220px',
}, '<' )
.to('.timeline2', {
  '--timeline-opacity': '1',
}, '>' ).from('.timeline2  svg', {
  x: 100,
  opacity:0
}, '<' )
.from('.timeline2  .display-6', {
  y: 100,
  opacity:0
}, '<' )


//header

var headerActive = false

const setHeader = () => {
  headerActive = !headerActive
    if(headerActive){
    gsap.to('.mobile-header-links', {
    top: '10vh',
      },)
    }
    else{
      gsap.to('.mobile-header-links', {
       top: '-400px',
      },)
    }
}



