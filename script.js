const sections = document.querySelectorAll(".content, .final-content");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      }
    });
  },
  {
    threshold: 0.15,
  }
);

sections.forEach((section) => {
  observer.observe(section);
});

window.addEventListener("scroll", () => {
  const scrollY = window.scrollY;

  document.querySelectorAll(".hero, .language-section, .quote-section")
    .forEach((section) => {
      section.style.backgroundPositionY = `${scrollY * 0.4}px`;
    });
});

/* CURSOR GLOW */

const glow = document.querySelector(".cursor-glow");

document.addEventListener("mousemove", (e) => {
  glow.style.left = e.clientX + "px";
  glow.style.top = e.clientY + "px";
});

/* LOADER */

window.addEventListener("load", () => {

  setTimeout(() => {

    document
      .querySelector(".loader")
      .classList.add("hidden");

  }, 1800);

});