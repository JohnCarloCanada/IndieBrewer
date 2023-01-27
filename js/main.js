document.addEventListener("readystatechange", (e) => {
  if (e.target.readyState === "complete") {
    initApp();
  }
});

function initApp() {
  const menuBtn = document.getElementById("menu");
  const navLinks = document.querySelector(".nav__links");
  const bodyOverflowed = document.querySelector("body");

  /* Adding an event listener to the menu button. When the menu button is clicked, it will toggle the
  class mobile__menu on the navLinks. If the navLinks contains the class mobile__menu, it will add
  the class bodyOverflowHidden to the bodyOverflowed. If the navLinks does not contain the class
  mobile__menu, it will remove the class bodyOverflowHidden from the bodyOverflowed. */
  menuBtn.addEventListener("click", (e) => {
    e.preventDefault();
    navLinks.classList.toggle("mobile__menu");
    if (navLinks.classList.contains("mobile__menu")) {
      bodyOverflowed.classList.add("bodyOverflowHidden");
    } else {
      bodyOverflowed.classList.remove("bodyOverflowHidden");
    }
  });
}
