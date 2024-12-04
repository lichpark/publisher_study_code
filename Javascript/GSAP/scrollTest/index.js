gsap.registerPlugin(ScrollTrigger);

let tc = gsap.timeline({
  scrollTrigger: {
    trigger: ".css-14xzgwd",
    start: "bottom bottom", //트리거 객체의 시작위치.
    end: "+=4000",
    scrub: true,
    pin: ".css-14xzgwd", // 배경 고정
    markers: true,
  },
});
