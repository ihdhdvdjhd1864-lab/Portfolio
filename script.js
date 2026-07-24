const fills = document.querySelectorAll(".skill-fill");
const obs = new IntersectionObserver(
  (entries) => {
    entries.forEach((e) => {
      if (e.isIntersecting) {
        e.target.style.transform = "scaleX(1)";
      }
    });
  },
  { threshold: 0.3 },
);
fills.forEach((f) => obs.observe(f));
document.querySelectorAll('a[href^="#"]').forEach((a) => {
  a.addEventListener("click", (e) => {
    const t = document.querySelector(a.getAttribute("href"));
    if (t) {
      e.preventDefault();
      t.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  });
});
let links = document.querySelector(".nav-links");
let menuBtn = document.querySelector(".nav-btn");

menuBtn.onclick = function () {
  links.classList.toggle("active");
  if (links.classList.contains("active")) {
    menuBtn.innerHTML = `<i class="fa-solid fa-xmark"></i>`;
  } else {
    menuBtn.innerHTML = `<i class="fa-solid fa-bars-staggered"></i>`;
  }
};
