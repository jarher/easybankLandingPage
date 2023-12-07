import { toogleClass } from "./changeClass.js";
import { firstParameters, secondParameters } from "./changeParameters.js";

document.addEventListener("click", (e) => {
  e.preventDefault();
  if (e.target.className === "menu-icon") {
    e.stopPropagation();
    const menuIcon = e.target;
    const initialIndex = menuIcon.src.indexOf("icon");
    const iconName = menuIcon.src.substring(initialIndex).replace(".svg", "");
    const mainNavWrapper = document.querySelector(".main-nav-wrapper");
    const menu = document.querySelector(".main-nav menu");

    if (iconName === "icon-hamburger") {
      menuIcon.src = "./images/icon-close.svg";
      firstParameters(mainNavWrapper, menu).forEach((properties) => toogleClass(properties));

  
    } else {
      menuIcon.src = "./images/icon-hamburger.svg";
      secondParameters(menu, mainNavWrapper).forEach((properties) => toogleClass(properties));
    }
  }
});
