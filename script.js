const imgs = [
  "scale_1200.png",
  "scale_1200 (1).png",
  "scale_1200 (2).png",
  "scale_1200 (3).png",
  "scale_1200 (4).png",
];

const nextBtn = document.querySelector(".next");
const backBtn = document.querySelector(".back");
const img = document.querySelector(".img");
const toggleElement = document.querySelectorAll(".toggle");
const togglesEl = document.querySelector(".toggles");
let count = 0;

toggleElement[0].classList.add("active_toggle");

nextBtn.addEventListener("click", () => {
  toggleElement[count].classList.remove("active_toggle");
  count++;
  if (count >= imgs.length) {
    count = 0;
  }
  img.src = `img/${imgs[count]}`;
  toggleElement[count].classList.add("active_toggle");
});

backBtn.addEventListener("click", () => {
  toggleElement[count].classList.remove("active_toggle");
  count--;
  if (count < 0) {
    count = imgs.length - 1;
  }
  img.src = `img/${imgs[count]}`;
  toggleElement[count].classList.add("active_toggle");
});

togglesEl.addEventListener("click", (e) => {
  if (e.target.classList.contains("toggle")) {
    const index = Array.from(toggleElement).indexOf(e.target);
    toggleElement[count].classList.remove("active_toggle");
    count = index;
    img.src = `img/${imgs[count]}`;
    toggleElement[count].classList.add("active_toggle");
  }
});

