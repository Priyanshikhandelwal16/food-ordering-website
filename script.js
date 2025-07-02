window.addEventListener("scroll", function () {
  const header = document.querySelector("header");
  if (header) {
    header.classList.toggle("scrolled", window.scrollY > 10);
  }
});

window.addEventListener("load", function () {
  if (typeof gsap === "undefined" || typeof ScrollTrigger === "undefined") {
    console.error("GSAP or ScrollTrigger not loaded!");
    return;
  }
  gsap.registerPlugin(ScrollTrigger);

  // Detect mobile devices
  function isMobile() {
    return /Mobi|Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
  }

  // Animate each element as it enters the viewport
  function fadeInFrom(selector, direction = "y", amount = 50) {
    const elements = document.querySelectorAll(selector);
    if (elements.length === 0) {
      // For debugging: warn if selector matches nothing
      // console.warn("No elements found for selector:", selector);
      return;
    }
    const isMobileDevice = isMobile();
    const startValue = isMobileDevice ? "top 100%" : "top 90%";
    elements.forEach((el) => {
      gsap.from(el, {
        opacity: 0,
        [direction]: amount,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: el,
          start: "top bottom",
          toggleActions: "play none none none",
          once: true,
          invalidateOnRefresh: true,
          // markers: true, // Uncomment for debugging
          onEnter: () => {
            // For debugging: log when each element animates
            // console.log("Animated:", el, "Selector:", selector);
          }
        }
      });
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

  // Refresh after all images are loaded
  function refreshScrollTriggerAfterImages() {
    const images = document.images;
    let loaded = 0;
    const total = images.length;
    if (total === 0) {
      ScrollTrigger.refresh();
      return;
    }
    function check() {
      loaded++;
      if (loaded === total) {
        ScrollTrigger.refresh();
      }
    }
    for (let img of images) {
      if (img.complete) {
        loaded++;
      } else {
        img.addEventListener('load', check, false);
        img.addEventListener('error', check, false);
      }
    }
    if (loaded === total) {
      ScrollTrigger.refresh();
    }
  }
  refreshScrollTriggerAfterImages();

  // Extra refresh for layout changes
  window.addEventListener("resize", () => ScrollTrigger.refresh());
  window.addEventListener("orientationchange", () => ScrollTrigger.refresh());
  setTimeout(() => ScrollTrigger.refresh(), 500); // Extra delayed refresh

  // Fallback: If the page is not scrollable, animate all elements immediately
  setTimeout(() => {
    if (document.body.scrollHeight <= window.innerHeight + 5) {
      document.querySelectorAll('[style*="opacity: 0"]').forEach(el => {
        el.style.opacity = 1;
        el.style.transform = "none";
      });
    }
  }, 1000);
});

// Hamburger toggle
function openSidebar() {
  document.querySelector('.sidebar').style.right = '0';
}
function closeSidebar() {
  document.querySelector('.sidebar').style.right = '-300px';
}
