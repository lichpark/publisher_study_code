gsap.registerPlugin(ScrollTrigger, TextPlugin);

const timeline = gsap.timeline({
  scrollTrigger: {
    trigger: ".sec2",
    markers: true,
    scrub: true,
    start: "top center",
    end: "center center",
  },
});

// const timeline = gsap.timeline({
//   scrollTrigger: {
//     trigger: ".sec2",
//     markers: true,
//     start: "top center", // 시작 위치
//     pin: true, // 트리거 작동시 핀 고정
//     scrub: 0.5, // 스크롤 속도
//     pinSpacing: false, // 핀 지정 간격 자
//   },
// });

timeline.to(".sec2_text", {
  duration: 3,
  opacity: 1,
  stagger: 1,
});

// timeline.to(".sec2__div", {
//     duration: 3,
//     opacity: 1,
//   });

// gsap.to(".sec1__h2_hidden ", {
//   opacity: 1,
//   duration: 2,
//   ease: "circ.out",
// });

// gsap.to(".sec1__h2 ", {
//   opacity: 0,
//   duration: 2,
//   ease: "circ.out",
// });
// gsap.to(".sec1__p ", {
//   y: 200,
//   ease: "circ.out",
// });

gsap.to(".sec1__h2", {
  duration: 4,
  text: "CRYING NUT!",
  ease: "none",
  yoyo: true,
  //   repeat: -1,
});
