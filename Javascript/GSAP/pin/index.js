gsap.registerPlugin(ScrollTrigger);

const timeline = gsap.timeline({
  scrollTrigger: {
    trigger: ".second",
    markers: true,
    scrub: 1,
    pin: true,
  },
});

// timeline.to(".box", {
//   x: 0,
//   opacity: 1,
//   duration: 0.5,
//   stagger: 1,
// });

timeline.to(".container", {
  x: -1425,
  duration: 1,
});

ScrollTrigger.create({
  trigger: ".third",
  start: "top, top",
  pin: true,
  pinSpacing: false,
});

ScrollTrigger.create({
  trigger: ".forth",
  start: "top, top",
  pin: true,
  pinSpacing: false,
});

ScrollTrigger.create({
  trigger: ".fifth",
  start: "top, top",
  pin: true,
  pinSpacing: false,
});
