const header = document.querySelector("header");
const burger = document.querySelector(".burger");
const cross = document.querySelector(".cross");
const fakeMenu = document.querySelector(".fake_menu");
let pageScrollHandler = 0;
fakeMenu.style.transition = "transform 0.5s ease-in-out";

document.addEventListener("scroll", () => {
  header.style.transition = "all .3s ease-in-out";
  // header.style.transition = "transform .3s ease-in-out";
  if (pageYOffset == 0) {
    header.style.boxShadow = "0 0 0 rgba(0, 0, 0, 0.2)";
    header.style.borderBottom = "1px solid rgba(0, 0, 0, 0.2)";
    header.style.background = "white";
  }

  if (pageYOffset > pageScrollHandler) {
    header.style.boxShadow = "0 0 1rem rgba(0, 0, 0, 0.2)";
    header.style.border = "none";
    header.style.background = "white";
    header.classList.add("headerHider");
    pageScrollHandler = pageYOffset;
  } else if (pageYOffset < pageScrollHandler) {
    header.classList.remove("headerHider");
    pageScrollHandler = pageYOffset;
  }
});

burger.addEventListener("click", () => {
  fakeMenu.style.transform = "translateY(0%)";
});
cross.addEventListener("click", () => {
  fakeMenu.style.transform = "translateY(-100%)";
});
