window.addEventListener("scroll", function () {
  const header = document.querySelector("header");
  header.classList.toggle("scrolled", window.scrollY > 10);
});

window.addEventListener("load", function () {
  gsap.registerPlugin(ScrollTrigger);

  function fadeInFrom(selector, direction = "y", amount = 50) {
    const elements = document.querySelectorAll(selector);
    elements.forEach((el) => {
      const props = {
        scrollTrigger: {
          trigger: el,
          start: "top 90%",
          toggleActions: "play none none none",
          once: true,
        },
        opacity: 0,
        duration: 1,
        ease: "power2.out",
      };
      props[direction] = amount;
      gsap.from(el, props);
    });
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
  fadeInFrom(".tcard", "y", 50);

  // Subscribe section
  fadeInFrom(".subscribe-section .left", "x", -100);
  fadeInFrom(".subscribe-section .right", "x", 100);

  // Footer
  fadeInFrom("footer .footer-top", "y", 50);
  fadeInFrom("footer .footer-bottom", "y", 30);

  // Refresh ScrollTrigger for mobile layout
  setTimeout(() => ScrollTrigger.refresh(), 300);
  window.addEventListener("resize", () => ScrollTrigger.refresh());
});

// Hamburger toggle
function openSidebar() {
  document.querySelector('.sidebar').style.right = '0';
}
function closeSidebar() {
  document.querySelector('.sidebar').style.right = '-300px';
}
