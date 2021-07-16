const slidersAll = document.querySelectorAll(".sliderON");
let counter = 0;
const size = slidersAll[1].clientWidth;

for (let i = 0; i < slidersAll.length; i++) {
  slidersAll[i].firstElementChild.style.display = "flex";
  slidersAll[i].firstElementChild.style.height = "100%";
  slidersAll[i].firstElementChild.style.width = "auto";

  document
    .querySelector(`.${slidersAll[i].classList[2]} .prev`)
    .addEventListener("click", slideHandler);
  document
    .querySelector(`.${slidersAll[i].classList[2]} .next`)
    .addEventListener("click", slideHandler);
}

function slideHandler(e) {
  e.target.parentElement.firstElementChild.style.transition = `.3s ease`;

  if (e.target.classList[0] === "prev") {
    counter--;
    e.target.parentElement.firstElementChild.style.transform = `translateX(-${
      counter * size
    }px)`;
    // console.log(e.target.parentElement.clientWidth);
  } else if (e.target.classList[0] === "next") {
    counter++;
    e.target.parentElement.firstElementChild.style.transform = `translateX(-${
      counter * size
    }px)`;
  }

  //   prev button re-display
  if (counter > 0) {
    e.target.parentElement.children[1].style.display = "block";
  } else {
    e.target.parentElement.children[1].style.display = "none";
  }

  //   next button hide on access clicks
  if (counter > e.target.parentElement.firstElementChild.children.length - 2) {
    e.target.parentElement.children[2].style.display = "none";
  } else {
    e.target.parentElement.children[2].style.display = "block";
  }
}
