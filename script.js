// Anime-style fade-in on scroll
const items = document.querySelectorAll(".fade");

const observer = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      }
    });
  },
  { threshold: 0.3 }
);

items.forEach(item => observer.observe(item));
