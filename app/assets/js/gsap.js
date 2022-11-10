// var gsap = require("gsap/dist/gsap").gsap;
const tl = gsap.timeline();
gsap.registerPlugin(ScrollTrigger, TextPlugin);

// Join Hand
gsap.to(".btn-hand", {
  y: 8,
  duration: 0.6,
  repeat: -1,
});

// 左邊雲
ScrollTrigger.create({
  trigger: ".trigger",
  animation: gsap.fromTo(
    ".bg-cloud-left",
    {
      scale: 1,
      x: 0,
    },
    {
      scale: 0.5,
      x: 100,
      y: -50,
      opacity: 0,
    }
  ),
  x: 50,
  pin: true,
  start: "top top",
  end: "+=350",
  scrub: 2,
});

// 右邊雲
ScrollTrigger.create({
  trigger: ".trigger",
  animation: gsap.fromTo(
    ".bg-cloud-right",
    {
      scale: 1,
      x: 0,
    },
    {
      scale: 0.5,
      x: -150,
      y: -50,
      opacity: 0,
    }
  ),
  x: 50,
  pin: true,
  start: "top top",
  end: "+=350",
  scrub: 1.5,
});

// Logo > ul
ScrollTrigger.create({
  trigger: ".anima-user",
  animation: gsap.fromTo(".anima-user", { opacity: 1 }, { opacity: 0 }),
  // markers: true,
  start: "100% 5%",
  end: "100% 5%",
  // pin: true,
  scrub: 1.5,
});

// ScrollTrigger.create({
//   trigger: ".bg-ready",
//   animation: gsap.to(".bg-ready-r", { opacity: 0 }),
//   markers: true,
//   start: "center 40%",
//   end: "center 30%",
//   scrub: true,
// });

tl.to(".bg-ready-r", {
  opacity: 0,
  scrollTrigger: {
    trigger: ".bg-ready",
    // markers: true,
    start: "center 40%",
    end: "center 30%",
    scrub: true,
  },
}).to(".bg-ready-y", {
  opacity: 0,
  scrollTrigger: {
    trigger: ".bg-ready",
    // markers: true,
    start: "center 50%",
    end: "center 50%",
    scrub: true,
  },
});
