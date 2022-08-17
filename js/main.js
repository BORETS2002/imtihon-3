var elSiteheaderToggleBtn = document.querySelector(".header__menu-btn");
var elHeader = document.querySelector(".header");
var elsiteNav = document.querySelector(".header__navbar");
var elHreft = document.querySelectorAll(".header__hreft");
var elboy = document.querySelector(".body");

elSiteheaderToggleBtn.addEventListener("click", function () {
  elHeader.classList.toggle("site-header__open");
  elsiteNav.classList.toggle("site-hader__open");
  elboy.classList.toggle("hiden__body");
});
