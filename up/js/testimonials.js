const slides = document.querySelector(".testimonials_content--slider").children;
const indicatorImgs = document.querySelector(
  ".testimonials_content--indicator"
).children;
for (let i = 0; i < indicatorImgs.length; i++) {
  indicatorImgs[i].addEventListener("click", function () {
    for (let j = 0; j < indicatorImgs.length; j++) {
      indicatorImgs[j].classList.remove("active");
    }
    console.log(this);
    this.classList.add("active");

    const id = this.getAttribute("data-id");
    for (let k = 0; k < slides.length; k++) {
      slides[k].classList.remove("active");
    }
    slides[id].classList.add("active");
  });
}
