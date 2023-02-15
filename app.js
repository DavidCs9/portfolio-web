const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    } else {
      entry.target.classList.remove("show");
    }
  });
});

const container = document.querySelectorAll(".container");
const wk = document.querySelectorAll(".wk");
container.forEach((el) => observer.observe(el));
wk.forEach((el) => observer.observe(el));
