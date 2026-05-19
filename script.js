const revealTargets = document.querySelectorAll(
  ".content, .final-content, [data-reveal]"
);

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      }
    });
  },
  {
    threshold: 0.12,
    rootMargin: "0px 0px -10% 0px",
  }
);

revealTargets.forEach((section, index) => {
  section.style.transitionDelay = `${Math.min((index % 4) * 80, 240)}ms`;
  observer.observe(section);
});

const parallaxItems = document.querySelectorAll("[data-parallax]");
const backgroundPanels = document.querySelectorAll(
  ".hero, .language-section, .quote-section, .stats-section, .final-section"
);
const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
let ticking = false;

const updateScrollEffects = () => {
  const scrollY = window.scrollY;

  backgroundPanels.forEach((section) => {
    section.style.backgroundPositionY = `${scrollY * 0.18}px`;
  });

  parallaxItems.forEach((item) => {
    const speed = Number(item.dataset.parallax || 0);
    const rect = item.getBoundingClientRect();
    const distanceFromCenter = rect.top + rect.height / 2 - window.innerHeight / 2;

    item.style.setProperty("--parallax-y", `${distanceFromCenter * speed * -1}px`);
  });

  ticking = false;
};

if (!reduceMotion) {
  window.addEventListener("scroll", () => {
    if (!ticking) {
      window.requestAnimationFrame(updateScrollEffects);
      ticking = true;
    }
  });

  updateScrollEffects();
}

/* CURSOR GLOW */

const glow = document.querySelector(".cursor-glow");

document.addEventListener("mousemove", (e) => {
  if (!glow) {
    return;
  }

  glow.style.left = e.clientX + "px";
  glow.style.top = e.clientY + "px";
});

/* LOADER */

window.addEventListener("load", () => {

  setTimeout(() => {

    const loader = document.querySelector(".loader");

    if (loader) {
      loader.classList.add("hidden");
    }

  }, 1800);

});
