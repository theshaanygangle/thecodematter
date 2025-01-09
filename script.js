gsap.registerPlugin(ScrollTrigger);
function locomotiveAnimation() {
  const locoScroll = new LocomotiveScroll({
    el: document.querySelector("#main"),
    smooth: true,
    // for tablet smooth
    tablet: { smooth: true },

    // for mobile
    smartphone: { smooth: true },
  });
  locoScroll.on("scroll", ScrollTrigger.update);

  ScrollTrigger.scrollerProxy("#main", {
    scrollTop(value) {
      return arguments.length
        ? locoScroll.scrollTo(value, 0, 0)
        : locoScroll.scroll.instance.scroll.y;
    },
    getBoundingClientRect() {
      return {
        top: 0,
        left: 0,
        width: window.innerWidth,
        height: window.innerHeight,
      };
    },
  });

  ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
  ScrollTrigger.refresh();
  console.log((document.getElementById("main").style.height = "auto"));
}
function headerAnimation() {
  var tl = gsap.timeline();
  tl.from(".header", {
    y: "-100px", //NOT WORKING
    opacity: 0,
    duration: 0.85,
    delay: 0.2,
    stagger: {
      amount: 0.75,
    },
  });

  tl.from(".call-to-action", {
    y: "100px", //NOT WORKING
    opacity: 0,
    width: "90%",
    duration: 0.5,
    stagger: {
      amount: 0.75,
    },
  });
}
function headingAnimation() {
  var tl = gsap.timeline();
  tl.from("#main-heading span", {
    y: "-100px", //NOT WORKING
    opacity: 0,
    duration: 3,
    delay: 0.2,
    stagger: {
      amount: 0.75,
    },
  });
}

function callToActionAnimation() {
  gsap.to("#call-to-action-inner p", {
    opacity: 1,
    duration: 1,
    stagger: {
      amount: 0.5,
    },
    scrollTrigger: {
      trigger: "#call-to-action-inner p",
      start: "top 90%",
      end: "bottom 70%",
      scrub: true,
    },
  });

  // const element = document.getElementById("call-to-action-inner");
  // const followButton = document.getElementById("follow-button");
  // element.addEventListener("mouseenter", () => {
  //   gsap.to(followButton, {
  //     opacity: 1,
  //     scale: 1,
  //     ease: "power2.out",
  //   });
  // });
  // element.addEventListener("mouseleave", () => {
  //   gsap.to(followButton, {
  //     opacity: 0,
  //     scale: 0,
  //     ease: "power2.out",
  //   });
  // });

  // element.addEventListener("mousemove", (dets) => {
  //   gsap.to(followButton, {
  //     x: dets.x - element.getBoundingClientRect().x - 150,
  //     y: dets.y - element.getBoundingClientRect().y - 150,
  //     ease: "power2.out",
  //   });
  // });
}

function ourServicesAnimation() {
  gsap.to(".slide-box", {
    x: "-200%",
    duration: 1,
    stagger: {
      amount: 0.5,
    },
    scrollTrigger: {
      trigger: "#main",
      start: "top top",
      end: "bottom 70%",
      scrub: true,
    },
  });
}

function ourCardsServicesAnimation() {
  gsap.utils.toArray(".card").forEach((card) => {
    gsap.from(card, {
      opacity: 0,
      y: 100,
      duration: 0.8,
      ease: "power2.out",
      stagger: {
        amount: 5,
      },
      scrollTrigger: {
        trigger: card,
        start: "top 80%",
        toggleActions: "play none none none",
      },
    });
  });
}

function clientSectionAnimation() {
  const stickyDiv = document.getElementById("stickyDiv4");
  gsap.to(".stickyDiv", {
    position: "static",
    bottom: "0px",
    scrollTrigger: {
      trigger: stickyDiv,
      start: "top 40%",
 
      scrub: true,
    },
  });
  
  gsap.to(stickyDiv, {
    position: "static",
    bottom: "0px",
    scrollTrigger: {
      trigger: stickyDiv,
      start: "top 40%",

      scrub: true,
    },
  });
}
// locomotiveAnimation();
headerAnimation();
headingAnimation();
callToActionAnimation();
ourServicesAnimation();
ourCardsServicesAnimation();
clientSectionAnimation();
