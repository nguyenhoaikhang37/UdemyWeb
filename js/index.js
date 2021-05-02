//> const
const menuClick = document.querySelector(".menu__click");
const overlay = document.querySelector(".menu__overlay");
const menu = document.querySelector(".icon-menu");

document.querySelectorAll(".handRefresh").forEach((element) => {
  element.addEventListener("click", () => {
    $(".slickStudy").slick("refresh");
  });
});

menu.addEventListener("click", () => {
  overlay.style.display = "block";
  menuClick.style.display = "block";
});

overlay.addEventListener("click", () => {
  overlay.style.display = "none";
  menuClick.style.display = "none";
});
