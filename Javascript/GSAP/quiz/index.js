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

const timeline2 = gsap.from(".sec3 .service-list .item", {
  opacity: 0,
  duration: 5,
  stagger: 0.1,
  y: 50,
  scrollTrigger: {
    trigger: ".sec3",
    markers: true,
    //scrub: true,
    start: "top center",
    end: "center bottom",
  },
});

const brandBoxes = document.querySelectorAll(".brand-box");

brandBoxes.forEach((box) => {
  gsap.set(box, { x: "50%" });
  gsap.to(".brand-box", {
    scrollTrigger: {
      trigger: ".brand-area",
      start: "0% 100%",
      end: "50% 0%",
      scrub: 1,
    },
    x: 0,
    opacity: 1,
    duration: 2,
    stagger: 0.5,
  });
});

const works = gsap.utils.toArray(".works-item");

gsap.to(works, {
  xPercent: -300,
  ease: "none",
  scrollTrigger: {
    trigger: ".works-list",
    pin: true,
    scrub: 1,
    duration: 0.2,

    // snap: 1 / (works.length - 1),
    start: "0 20%",
    end: "+=100%",
  },
});

gsap.to(".awards-area", {
  ease: "none",
  scrollTrigger: {
    trigger: ".awards",
    pin: true,
    markers: true,
    scrub: 1,
    duration: 1,
    scale: 1.5,
    // snap: 1 / (works.length - 1),
    start: "0 10%",
  },
});

// 1. sec6__div__span_title의 애니메이션
gsap.to(".sec6__div__span_title", {
  y: 60, // 위아래 움직임
  duration: 0.4,
  ease: "power1.inOut",
  repeat: -1, // 무한 반복
  yoyo: true, // 튀는 효과
});

gsap.to(".sec6__div__span_title", {
  opacity: 0, // 점점 사라짐
  y: -50, // 위로 올라가는 효과
  duration: 1,
  ease: "power2.out",
  scrollTrigger: {
    markers: true,
    trigger: ".sec6", // 트리거 섹션
    start: "top 0%", // 섹션이 뷰포트 10%에 도달했을 때 시작
    end: "bottom 20%", // 섹션이 뷰포트를 지나갈 때 끝
    toggleActions: "play none none none", // 스크롤 방향에 따른 동작 설정
    scrub: 1,
  },
});

const spans = document.querySelectorAll(".sec6__div__span");

spans.forEach((span, i) => {
  const prevSpan = spans[i - 1]; // 이전 텍스트 요소

  gsap.fromTo(
    span,
    {
      opacity: 0, // 처음에는 보이지 않음
      scale: 0.8, // 작게 시작
    },
    {
      opacity: 1, // 점점 보이게
      scale: 3, // 크기가 커짐
      duration: 1,
      ease: "power2.out",
      scrollTrigger: {
        trigger: ".sec6__div", // 고정된 영역
        start: () => `${i * 10}% center`, // 각 텍스트의 시작 지점
        end: () => `${i * 10 + 10}% center`, // 끝나는 지점
        scrub: true, // 스크롤과 동기화
        pin: ".sec6__div", // 화면 고정
        onUpdate: (self) => {
          // 이전 텍스트를 사라지게 처리
          if (prevSpan && self.progress < 0.5) {
            gsap.to(prevSpan, { opacity: 0, scale: 0.8, duration: 0.5 });
          }
        },
        reverse: true,
      },
    }
  );
});
