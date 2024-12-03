gsap.registerPlugin(ScrollTrigger);

const timeline = gsap.timeline({
  scrollTrigger: {
    trigger: ".second", //실행 시켜주는 트리거
    markers: true, // 개발할때  보여주는 선
    scrub: true, //스크롤에 따라 애니메이션 동기화
    //트리거요소, 뷰포트
    //start: "top top", //second의 top(맨위)가 화면의 top(맨위)에 도달했을때 시작
    //end: "center center", //second의 center(중앙)가 화면의 center(중간)에 도달했을때 끝
  },
});

timeline.to(".box", {
  duration: 2,
  x: 0,
});

// const timeline2 = gsap.timeline({
//   scrollTrigger: {
//     trigger: ".second",
//     markers: true,
//     scrub: true,
//     start: "top center",
//     end: "bottom end",
//   },
// });
timeline.to(
  ".textdiv",
  {
    duration: 1,
    opacity: 1,
    y: 0,
  },
  "<"
);
