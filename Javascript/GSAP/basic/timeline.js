//new Date()
const timeline = gsap.timeline();
timeline.to(".circle", {
  duration: 1,
  y: 0,
  opacity: 1,
});

timeline.to(
  ".box",
  {
    duration: 1,
    opacity: 1,
    x: 0,
  },
  //   "<" 전시나리오랑 같이
  "-=1" //전에거 끝나기 -1초전에 실행
);
timeline.to(".textani", {
  duration: 0.5,
  y: 0,
  opacity: 1,
});
