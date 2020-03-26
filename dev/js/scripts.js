// @codekit-append "burger/burger.js";
// @codekit-append "burger/burger-mouseenter.js";
// @codekit-append "burger/burger-mouseleave.js";
// @codekit-append "burger/burger-mouseclick.js";

$( document ).ready(function() {
  gsap.registerPlugin(DrawSVGPlugin);
});

gsap.set(".four-one-text",{
  alpha: 0,
  scale: 0,
  transformOrigin: "50% 50%"
});

gsap.set(".four-two-text",{
  alpha: 0,
  scale: 0,
  transformOrigin: "50% 50%"
});

gsap.set(".four-three-text",{
  alpha: 0,
  scale: 0,
  transformOrigin: "50% 50%"
});

gsap.set(".four-four-text",{
  alpha: 0,
  scale: 0,
  transformOrigin: "50% 50%"
});

// Title Row Animation (1)
var titleRowAnimate = gsap.timeline({
  paused: true
});
titleRowAnimate.from(".title-row-one", {
    duration: 0.25,
    scaleX: 0,
    transformOrigin: "0% 100%",
    stagger: -0.25,
    ease: Power2.easeInOut
  })
  .from(".concerned-text", {
    duration: 0.25,
    alpha: 0,
    stagger: -0.25,
    delay: -0.5,
    ease: Power2.easeInOut
  });

// City Title Animation (1)
var cityColumnAnimate = gsap.timeline({
  paused: true
});
cityColumnAnimate.from(".city-column", {
    duration: 0.25,
    scaleX: 0,
    transformOrigin: "0% 100%",
    stagger: -0.2,
    ease: Power2.easeInOut
  })
  .from(".city-text", {
    duration: 0.25,
    alpha: 0,
    stagger: -0.25,
    delay: -1.25,
    ease: Power2.easeInOut
  });

// Grid Animation (1)
var gridAnimate = gsap.timeline({
  paused: true
});
gridAnimate.from(".grid-piece", {
  duration: 0.25,
  alpha: 0,
  transformOrigin: "50% 50%",
  stagger: {
    grid: [6, 4],
    from: "1",
    amount: 0.5
  }
});

// Percentage Animations (1)
var percAnimate = gsap.timeline({
  paused: true
});
percAnimate.from(".perc-piece", {
  duration: 0.25,
  scale: 0,
  transformOrigin: "50% 50%",
  ease: Power2.easeInOut,
  delay: 0.5,
  stagger: {
    grid: [6, 4],
    from: "center",
    amount: 0.5
  }
});

// Draw Animation (1)
var drawAnimate = gsap.timeline({
  paused: true
});
drawAnimate.from(".grid-piece-draw",{
  duration: 0.25,
  scaleX: 0,
  transformOrigin: "0% 100%",
  stagger: -0.2,
  ease: Power2.easeInOut
});

// Scale Titles Animation (2)
var titleScaleAnimate = gsap.timeline({
  paused: true
});
titleScaleAnimate.from(".two-title",{
  duration: 0.25,
  scaleY: -0,
  stagger: -0.2,
  transformOrigin: "0% 100%",
  ease: Power2.easeInOut
})
.from(".two-title-text",{
  duration: 0.25,
  alpha: 0,
  stagger: -0.2,
  delay: -1.25,
  ease: Power2.easeInOut
})
.from(".two-bar",{
  duration: 0.25,
  scaleY: -0,
  transformOrigin: "0% 100%",
  stagger: -0.2,
  delay: -1.5,
  ease: Power2.easeInOut
})
.from(".two-perc",{
  duration: 0.25,
  scale: 0,
  transformOrigin: "50% 50%",
  alpha: 0,
  stagger: -0.2,
  delay: -1.25
});

// Bar Animation (3)
var threeBarAnimate = gsap.timeline({
  paused: true
});
threeBarAnimate.from(".three-title-bg",{
  duration: 0.25,
  scaleY: 0,
  transformOrigin: "0% 100%",
  stagger: -0.15,
  ease: Power2.easeInOut
})
.from(".three-bar",{
  duration: 0.25,
  scaleY: -0,
  stagger: -0.15,
  transformOrigin: "0% 100%",
  ease: Power2.easeInOut
})
.from(".three-bar-text",{
  duration: 0.15,
  alpha: 0,
  stagger: -0.15,
  delay: -2.75,
  ease: Power2.easeInOut
})
.from(".three-perc",{
  duration: 0.25,
  alpha: 0,
  scale: 0,
  stagger: -0.15,
  delay: -2.5,
  ease: Power2.easeInOut,
  transformOrigin: "50% 50%"
});

// First Animation (4)
var firstCircle = gsap.timeline({
  paused: true
});
firstCircle.from(".four-stroke-one",{
  duration: 0.5,
  drawSVG: "50% 50%",
  ease: Power2.easeInOut
})
.from(".four-stroke-one-bar",{
  duration: 0.25,
  drawSVG: "0%",
  stagger: 0.25,
  delay: -0.5,
  ease: Power2.easeInOut
})
.from(".four-one-perc",{
  duration: 0.25,
  alpha: 0,
  scale: 0,
  stagger: 0.15,
  delay: -1,
  transformOrigin: "50% 50%",
  ease: Power2.easeInOut
})
.to(".four-one-text",{
  duration: 0.25,
  alpha: 1,
  scale: 1,
  delay: -0.25,
  transformOrigin: "50% 50%",
  ease: Power2.easeInOut
});

// Second Animation (4)
var secondCircle = gsap.timeline({
  paused: true,
  delay: 0.75
});
secondCircle.from(".four-stroke-two",{
  duration: 0.5,
  drawSVG: "50% 50%",
  ease: Power2.easeInOut
})
.from(".four-stroke-two-bar",{
  duration: 0.25,
  drawSVG: "0%",
  stagger: 0.25,
  delay: -0.5,
  ease: Power2.easeInOut
})
.from(".four-two-perc",{
  duration: 0.25,
  alpha: 0,
  scale: 0,
  stagger: 0.15,
  delay: -1,
  transformOrigin: "50% 50%",
  ease: Power2.easeInOut
})
.to(".four-two-text",{
  duration: 0.25,
  alpha: 1,
  scale: 1,
  delay: -0.25,
  transformOrigin: "50% 50%",
  ease: Power2.easeInOut
});

// Third Animation (4)
var thirdCircle = gsap.timeline({
  paused: true,
  delay: 1.5
});
thirdCircle.from(".four-stroke-three",{
  duration: 0.5,
  drawSVG: "50% 50%",
  ease: Power2.easeInOut
})
.from(".four-stroke-three-bar",{
  duration: 0.25,
  drawSVG: "0%",
  stagger: 0.25,
  delay: -0.5,
  ease: Power2.easeInOut
})
.from(".four-three-perc",{
  duration: 0.25,
  alpha: 0,
  scale: 0,
  stagger: 0.15,
  delay: -1,
  transformOrigin: "50% 50%",
  ease: Power2.easeInOut
})
.to(".four-three-text",{
  duration: 0.25,
  alpha: 1,
  scale: 1,
  delay: -0.25,
  transformOrigin: "50% 50%",
  ease: Power2.easeInOut
});

// Fourth Animation (4)
var fourthCircle = gsap.timeline({
  paused: true,
  delay: 2.25
});
fourthCircle.from(".four-stroke-four",{
  duration: 0.5,
  drawSVG: "50% 50%",
  ease: Power2.easeInOut
})
.from(".four-stroke-four-bar",{
  duration: 0.25,
  drawSVG: "0%",
  stagger: 0.25,
  delay: -0.5,
  ease: Power2.easeInOut
})
.from(".four-four-perc",{
  duration: 0.25,
  alpha: 0,
  scale: 0,
  stagger: 0.15,
  delay: -1,
  transformOrigin: "50% 50%",
  ease: Power2.easeInOut
})
.to(".four-four-text",{
  duration: 0.25,
  alpha: 1,
  scale: 1,
  delay: -0.25,
  transformOrigin: "50% 50%",
  ease: Power2.easeInOut
});

// Fifth Animation (4)
var legendAnimation = gsap.timeline({
  paused: true,
  delay: 2
});
legendAnimation.from(".legend-dot",{
  scale: 0,
  transformOrigin: "50% 50%",
  stagger: -0.15
})
.from(".legend-text",{
  duration: 0.25,
  scaleX: 0,
  stagger: -0.15
});

// PagePiling & Playing Animations
$('#pagepiling').pagepiling({
  anchors: ['firstPage', 'secondPage', 'thirdPage', 'fourthPage', 'fifthPage', 'sixthPage', 'seventhPage', 'eighthPage', 'ninthPage'],

  afterLoad: function(anchorLink) {
    if (anchorLink == 'thirdPage') {
      titleRowAnimate.play();
      cityColumnAnimate.play();
      gridAnimate.play();
      percAnimate.play();
      drawAnimate.play();
    }
    if (anchorLink == 'fifthPage') {
      titleScaleAnimate.play();
    }
    if (anchorLink == 'seventhPage') {
      threeBarAnimate.play();
    }
    if (anchorLink == 'ninthPage') {
      firstCircle.play();
      secondCircle.play();
      thirdCircle.play();
      fourthCircle.play();
      legendAnimation.play();
    }
  }
});
