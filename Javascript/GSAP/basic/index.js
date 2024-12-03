gsap.to(".circle", {
  duration: 1,
  opacity: 1,
  y: 0,
  ease: "power4.out",
  //   ease: "bounce.out",
  //   ease: "elastic.out(1,0.3)",
  repeat: 2,
  yoyo: true,
});

gsap.to(".box", {
  duration: 5,
  opacity: 1,
  x: 0,
  ease: "steps(12)",
});
gsap.to(".textani", {
  duration: 0.5,
  y: 0,
  opacity: 1,
});

//이런것도 있다.
// gsap.from(".textani", {});
// gsap.fromTo(".textani", {});
