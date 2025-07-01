//   //header-scrolling
//  window.addEventListener('scroll', function () {
//   const header = document.querySelector('header');
//   if (window.scrollY > 50) {
//     header.classList.add('scrolled');
//   } else {
//     header.classList.remove('scrolled');
//   }
// });

// gsap.registerPlugin(ScrollTrigger);

// // 🟡 HERO SECTION
// gsap.from(".hero-section .left", {
//   scrollTrigger: {
//     trigger: ".hero-section .left",
//     start: "top 80%",
//   },
//   x: -100,
//   opacity: 0,
//   duration: 1,
//   ease: "power3.out"
// });

// gsap.from(".hero-section .right", {
//   scrollTrigger: {
//     trigger: ".hero-section .right",
//     start: "top 80%",
//   },
//   x: 100,
//   opacity: 0,
//   duration: 1,
//   ease: "power3.out"
// });

// // 🟡 WORK SECTION (How it Works)
// gsap.from(".work-section h1, .work-section p", {
//   scrollTrigger: {
//     trigger: ".work-section",
//     start: "top 90%",
//   },
//   y: -50,
//   opacity: 0,
//   duration: 1,
//   ease: "power2.out",
//   stagger: 0.2
// });

// gsap.from(".card-wrapper .card", {
//   scrollTrigger: {
//     trigger: ".card-wrapper",
//     start: "top 85%",
//   },
//   y: 50,
//   opacity: 0,
//   duration: 1,
//   ease: "power2.out",
//   stagger: 0.3
// });

// // 🟡 CITY SECTION
// gsap.from(".heading-card h1, .heading-card p", {
//   scrollTrigger: {
//     trigger: ".heading-card",
//     start: "top 90%",
//   },
//   y: -50,
//   opacity: 0,
//   duration: 1,
//   ease: "power2.out",
//   stagger: 0.2
// });

// gsap.from(".cafe-card", {
//   scrollTrigger: {
//     trigger: ".cafe-card",
//     start: "top 90%",
//   },
//   y: 50,
//   opacity: 0,
//   duration: 1,
//   stagger: 0.3,
//   ease: "power2.out"
// });

// // 🟡 FOOD SECTION (left image, right content)
// gsap.from(".food-section .left", {
//   scrollTrigger: {
//     trigger: ".food-section .left",
//     start: "top 85%",
//   },
//   x: -100,
//   opacity: 0,
//   duration: 1
// });

// gsap.from(".food-section .right", {
//   scrollTrigger: {
//     trigger: ".food-section .right",
//     start: "top 85%",
//   },
//   x: 100,
//   opacity: 0,
//   duration: 1
// });

// // 🟡 SERVICE SECTION
// gsap.registerPlugin(ScrollTrigger);

// gsap.from(".service-info h1", {
//   scrollTrigger: {
//     trigger: ".service-section",
//     start: "top 80%",
//   },
//   y: -50,
//   opacity: 0,
//   duration: 1
// });

// gsap.to(".service-card", {
//   scrollTrigger: {
//     trigger: ".service-section",
//     start: "top 80%",
//     toggleActions: "play none none none"
//   },
//   y: 0,
//   opacity: 1,
//   duration: 1,
//   stagger: 0.3,
//   ease: "power2.out"
// });

// // 🟡 CUSTOMER SECTION
// gsap.from(".customer-section .left", {
//   scrollTrigger: {
//     trigger: ".customer-section .left",
//     start: "top 85%",
//   },
//   x: -100,
//   opacity: 0,
//   duration: 1
// });

// gsap.from(".customer-section .right", {
//   scrollTrigger: {
//     trigger: ".customer-section .right",
//     start: "top 85%",
//   },
//   x: 100,
//   opacity: 0,
//   duration: 1
// });

// // 🟡 PARTNERSHIP SECTION
// gsap.from(".Partnership-section h1", {
//   scrollTrigger: {
//     trigger: ".Partnership-section h1",
//     start: "top 90%",
//   },
//   y: -50,
//   opacity: 0,
//   duration: 1
// });

// gsap.from(".travel-card .tcard", {
//   scrollTrigger: {
//     trigger: ".travel-card",
//     start: "top 85%",
//   },
//   y: 50,
//   opacity: 0,
//   duration: 1,
//   stagger: 0.3
// });

// // 🟡 SUBSCRIBE SECTION
// gsap.from(".subscribe-section .left", {
//   scrollTrigger: {
//     trigger: ".subscribe-section",
//     start: "top 90%",
//   },
//   x: -100,
//   opacity: 0,
//   duration: 1
// });

// gsap.from(".subscribe-section .right", {
//   scrollTrigger: {
//     trigger: ".subscribe-section",
//     start: "top 90%",
//   },
//   x: 100,
//   opacity: 0,
//   duration: 1
// });

// // 🟡 FOOTER
// gsap.from("footer .footer-top", {
//   scrollTrigger: {
//     trigger: "footer",
//     start: "top 90%",
//   },
//   y: 50,
//   opacity: 0,
//   duration: 1,
//   ease: "power2.out"
// });

// gsap.from("footer .footer-bottom", {
//   scrollTrigger: {
//     trigger: ".footer-bottom",
//     start: "top 95%",
//   },
//   y: 30,
//   opacity: 0,
//   duration: 1
// });

// //hamburger
// function openSidebar() {
//     document.getElementById("sidebar").style.right = "0";
//   }

//   function closeSidebar() {
//     document.getElementById("sidebar").style.right = "-300px";
//   } 

// 🔹 Fix: Add background on scroll for header
// Fix header transition on scroll (mobile + desktop)
// window.addEventListener("scroll", function () {
//   const header = document.querySelector("header");

//   if (window.scrollY > 30) { // lower value to make it trigger early
//     header.classList.add("scrolled");
//   } else {
//     header.classList.remove("scrolled");
//   }
// });


// // 🔹 GSAP Animations (fade + move + moderate trigger points)
// gsap.registerPlugin(ScrollTrigger);

// // Helper function for simple fade-in animations
// function fadeInFrom(selector, direction = "y", amount = 50) {
//   const animationProps = {
//     scrollTrigger: {
//       trigger: selector,
//       start: "top 85%", 
//     },
//     opacity: 0,
//     duration: 1,
//     ease: "power2.out",
//   };
//   animationProps[direction] = amount;
//   gsap.from(selector, animationProps);
// }

// // 🔹 Apply to each section
// fadeInFrom(".hero-section .left", "x", -100);
// fadeInFrom(".hero-section .right", "x", 100);

// fadeInFrom(".work-section h1");
// fadeInFrom(".work-section p");
// fadeInFrom(".card-wrapper .card", "y", 50);

// fadeInFrom(".heading-card h1");
// fadeInFrom(".heading-card p");
// fadeInFrom(".cafe-card", "y", 50);

// fadeInFrom(".food-section .left", "x", -100);
// fadeInFrom(".food-section .right", "x", 100);

// fadeInFrom(".service-info h1", "y", -50);
// fadeInFrom(".service-card", "y", 50);

// fadeInFrom(".customer-section .left", "x", -100);
// fadeInFrom(".customer-section .right", "x", 100);

// fadeInFrom(".Partnership-section h1", "y", -50);
// fadeInFrom(".travel-card .tcard", "y", 50);

// fadeInFrom(".subscribe-section .left", "x", -100);
// fadeInFrom(".subscribe-section .right", "x", 100);

// fadeInFrom("footer .footer-top", "y", 50);
// fadeInFrom("footer .footer-bottom", "y", 30);

// // 🔹 Sidebar toggle
// function openSidebar() {
//   document.getElementById("sidebar").style.right = "0";
// }
// function closeSidebar() {
//   document.getElementById("sidebar").style.right = "-300px";
// }

window.addEventListener("scroll", function () {
  const header = document.querySelector("header");
  header.classList.toggle("scrolled", window.scrollY > 10);
});


window.addEventListener("load", function () {
  gsap.registerPlugin(ScrollTrigger);

  function fadeInFrom(selector, direction = "y", amount = 50) {
    const animationProps = {
      scrollTrigger: {
        trigger: selector,
        start: "top 85%",
        markers: true,
      },
      opacity: 0,
      duration: 1,
      ease: "power2.out",
    };
    animationProps[direction] = amount;
    gsap.from(selector, animationProps);
  }

  // Hero section
  fadeInFrom(".hero-section .left", "x", -100);
  fadeInFrom(".hero-section .right", "x", 100);

  // Work section
  fadeInFrom(".work-section h1");
  fadeInFrom(".work-section p");
  fadeInFrom(".card-wrapper .card", "y", 50);

  // City section
  fadeInFrom(".heading-card h1");
  fadeInFrom(".heading-card p");
  fadeInFrom(".cafe-card", "y", 50);

  // Food section
  fadeInFrom(".food-section .left", "x", -100);
  fadeInFrom(".food-section .right", "x", 100);

  // Service section
  fadeInFrom(".service-info h1", "y", -50);
  fadeInFrom(".service-card", "y", 50);

  // Customer section
  fadeInFrom(".customer-section .left", "x", -100);
  fadeInFrom(".customer-section .right", "x", 100);

  // Partnership section
  fadeInFrom(".Partnership-section h1", "y", -50);
  fadeInFrom(".travel-card .tcard", "y", 50);

  // Subscribe section
  fadeInFrom(".subscribe-section .left", "x", -100);
  fadeInFrom(".subscribe-section .right", "x", 100);

  // Footer section
  fadeInFrom("footer .footer-top", "y", 50);
  fadeInFrom("footer .footer-bottom", "y", 30);
});
