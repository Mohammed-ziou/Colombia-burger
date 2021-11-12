/*==================== SHOW MENU ====================*/
const showMenu = (toggleId, navId) => {
  const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId);

  // Validate that variables exist
  if (toggle && nav) {
    toggle.addEventListener("click", () => {
      // We add the show-menu class to the div tag with the nav__menu class
      nav.classList.toggle("show-menu");
    });
  }
};
showMenu("nav-toggle", "nav-menu");

/*==================== REMOVE MENU MOBILE ====================*/
const navLink = document.querySelectorAll(".nav__link");

function linkAction() {
  const navMenu = document.getElementById("nav-menu");
  // When we click on each nav__link, we remove the show-menu class
  navMenu.classList.remove("show-menu");
}
navLink.forEach((n) => n.addEventListener("click", linkAction));

/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/
const sections = document.querySelectorAll("section[id]");

function scrollActive() {
  const scrollY = window.pageYOffset;

  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight;
    const sectionTop = current.offsetTop - 50;
    sectionId = current.getAttribute("id");

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      document
        .querySelector(".nav__menu a[href*=" + sectionId + "]")
        .classList.add("active-link");
    } else {
      document
        .querySelector(".nav__menu a[href*=" + sectionId + "]")
        .classList.remove("active-link");
    }
  });
}
window.addEventListener("scroll", scrollActive);

/*==================== CHANGE BACKGROUND HEADER ====================*/
function scrollHeader() {
  const nav = document.getElementById("header");
  // When the scroll is greater than 200 viewport height, add the scroll-header class to the header tag
  if (this.scrollY >= 200) nav.classList.add("scroll-header");
  else nav.classList.remove("scroll-header");
}
window.addEventListener("scroll", scrollHeader);

/*==================== SHOW SCROLL TOP ====================*/
function scrollTop() {
  const scrollTop = document.getElementById("scroll-top");
  // When the scroll is higher than 560 viewport height, add the show-scroll class to the a tag with the scroll-top class
  if (this.scrollY >= 560) scrollTop.classList.add("show-scroll");
  else scrollTop.classList.remove("show-scroll");
}
window.addEventListener("scroll", scrollTop);

/*==================== DARK LIGHT THEME ====================*/
const themeButton = document.getElementById("theme-button");
const darkTheme = "dark-theme";
const iconTheme = "bx-sun";

// Previously selected topic (if user selected)
const selectedTheme = localStorage.getItem("selected-theme");
const selectedIcon = localStorage.getItem("selected-icon");

// We obtain the current theme that the interface has by validating the dark-theme class
const getCurrentTheme = () =>
  document.body.classList.contains(darkTheme) ? "dark" : "light";
const getCurrentIcon = () =>
  themeButton.classList.contains(iconTheme) ? "bx-moon" : "bx-sun";

// We validate if the user previously chose a topic
if (selectedTheme) {
  // If the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the dark
  document.body.classList[selectedTheme === "dark" ? "add" : "remove"](
    darkTheme
  );
  themeButton.classList[selectedIcon === "bx-moon" ? "add" : "remove"](
    iconTheme
  );
}

// Activate / deactivate the theme manually with the button
themeButton.addEventListener("click", () => {
  // Add or remove the dark / icon theme
  document.body.classList.toggle(darkTheme);
  themeButton.classList.toggle(iconTheme);
  // We save the theme and the current icon that the user chose
  localStorage.setItem("selected-theme", getCurrentTheme());
  localStorage.setItem("selected-icon", getCurrentIcon());
});

/*==================== SCROLL REVEAL ANIMATION ====================*/
const sr = ScrollReveal({
  origin: "top",
  distance: "30px",
  duration: 2000,
  reset: true,
});

sr.reveal(
  `.home__data, .home__img,
            .about__data, .about__img,
            .services__content, .menu__content,
            .app__data, .app__img,
            .contact__data, .contact__button,
            .footer__content`,
  {
    interval: 200,
  }
);

// recipe popup

// const openRep1 = document.getElementById("openrep1");
// const openRep2 = document.getElementById("openrep2");
// const openRep3 = document.getElementById("openrep3");
// const openRep4 = document.getElementById("openrep4");
// const openRep5 = document.getElementById("openrep5");
// const openRep6 = document.getElementById("openrep6");

// const Repcont1 = document.getElementById("recipe_container_1");
// const Repcont2 = document.getElementById("recipe_container_2");
// const Repcont3 = document.getElementById("recipe_container_3");
// const Repcont4 = document.getElementById("recipe_container_4");
// const Repcont5 = document.getElementById("recipe_container_5");
// const Repcont6 = document.getElementById("recipe_container_6");

// const closeRep1 = document.getElementById("close_recipe1");
// const closeRep2 = document.getElementById("close_recipe2");
// const closeRep3 = document.getElementById("close_recipe3");
// const closeRep4 = document.getElementById("close_recipe4");
// const closeRep5 = document.getElementById("close_recipe5");
// const closeRep6 = document.getElementById("close_recipe6");

// openRep1.addEventListener("click", () => {
//   Repcont1.classList.add("showrep");
// });
// openRep2.addEventListener("click", () => {
//   Repcont2.classList.add("showrep");
// });
// openRep3.addEventListener("click", () => {
//   Repcont3.classList.add("showrep");
// });
// openRep4.addEventListener("click", () => {
//   Repcont4.classList.add("showrep");
// });
// openRep5.addEventListener("click", () => {
//   Repcont5.classList.add("showrep");
// });
// openRep6.addEventListener("click", () => {
//   Repcont6.classList.add("showrep");
// });

// closeRep1.addEventListener("click", () => {
//   Repcont1.classList.remove("showrep");
// });
// closeRep2.addEventListener("click", () => {
//   Repcont2.classList.remove("showrep");
// });
// closeRep3.addEventListener("click", () => {
//   Repcont3.classList.remove("showrep");
// });
// closeRep4.addEventListener("click", () => {
//   Repcont4.classList.remove("showrep");
// });
// closeRep5.addEventListener("click", () => {
//   Repcont5.classList.remove("showrep");
// });
// closeRep6.addEventListener("click", () => {
//   Repcont6.classList.remove("showrep");
// });
