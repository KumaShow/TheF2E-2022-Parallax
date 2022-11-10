"use strict";
"use strict";

var tl = gsap.timeline();
gsap.registerPlugin(ScrollTrigger, TextPlugin); // Join Hand

gsap.to(".btn-hand", {
  y: 8,
  duration: 0.6,
  repeat: -1
}); // 左邊雲

ScrollTrigger.create({
  trigger: ".trigger",
  animation: gsap.fromTo(".bg-cloud-left", {
    scale: 1,
    x: 0
  }, {
    scale: 0.5,
    x: 100,
    y: -50,
    opacity: 0
  }),
  x: 50,
  pin: true,
  start: "top top",
  end: "+=500",
  scrub: 2
}); // 右邊雲

ScrollTrigger.create({
  trigger: ".trigger",
  animation: gsap.fromTo(".bg-cloud-right", {
    scale: 1,
    x: 0
  }, {
    scale: 0.5,
    x: -150,
    y: -50,
    opacity: 0
  }),
  x: 50,
  pin: true,
  start: "top top",
  end: "+=550",
  scrub: 1.5
}); // Logo > ul

ScrollTrigger.create({
  trigger: ".anima-user",
  animation: gsap.fromTo(".anima-user", {
    opacity: 1
  }, {
    opacity: 0
  }),
  markers: true,
  start: "150% 1%",
  end: "150% 1%",
  scrub: 1.5 // delay: 1,

}); // 紅綠燈

tl.to(".bg-ready-r", {
  opacity: 0,
  scrollTrigger: {
    trigger: ".anima-user",
    start: "150% 30%",
    end: "150% 30%",
    scrub: 1.5
  }
}, ">").to(".bg-ready-y", {
  opacity: 1,
  scrollTrigger: {
    trigger: ".anima-user",
    start: "150% 30%",
    end: "150% 30%",
    scrub: 1.5 // duration: 2,

  }
}, "<").to(".bg-ready-y", {
  opacity: 0,
  scrollTrigger: {
    trigger: ".anima-user",
    start: "150% 17%",
    end: "150% 17%",
    scrub: 1.5 // duration: 2,

  }
}, ">").to(".bg-ready-g", {
  opacity: 1,
  scrollTrigger: {
    trigger: ".anima-user",
    start: "150% 17%",
    end: "150% 17%",
    scrub: 1.5 // duration: 2,

  }
}, "<").to(".bg-ready-g", {
  opacity: 0,
  scrollTrigger: {
    trigger: ".anima-user",
    start: "150% 1%",
    end: "150% 1%",
    scrub: 1.5 // duration: 2,

  }
}, "<").to(".bg-ready", {
  opacity: 0,
  scrollTrigger: {
    trigger: ".anima-user",
    start: "150% 1%",
    end: "150% 1%",
    scrub: 1.5
  }
}, "<"); // 滾到紅燈隱藏其他元素

var domReady = gsap.utils.toArray(".anima-ready");
domReady.forEach(function (item) {
  console.log(item.classList);

  if (item.classList.contains("anima-ready")) {
    gsap.to(item, {
      opacity: 0,
      scrollTrigger: {
        trigger: ".bg-ready",
        start: "center 50%",
        end: "center 50%",
        scrub: true
      }
    });
  }
});
//# sourceMappingURL=all.js.map
