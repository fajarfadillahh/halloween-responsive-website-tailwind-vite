import "../css/index.css";

// ===== Show Menu =====
function showMenu(menuid, toggleid, closeid) {
  const menu = document.getElementById(menuid);
  const toggle = document.getElementById(toggleid);
  const close = document.getElementById(closeid);

  if (menu && toggle && close) {
    toggle.onclick = () => {
      menu.classList.add("show-menu");
    };
    close.onclick = () => {
      menu.classList.remove("show-menu");
    };
  }
}
showMenu("header-menu", "header-toggle", "header-close");

// ===== SCROLLUP SECTION =====
const scrollY = window.pageYOffset;

function scrollUp() {
  const scrollup = document.getElementById("scroll-up");

  this.scrollY > 150
    ? scrollup.classList.add("scroll-action")
    : scrollup.classList.remove("scroll-action");
}
window.addEventListener("scroll", scrollUp);

// ===== HOME SWIPER =====
let homeSwiper = new Swiper(".home-swiper", {
  spaceBetween: 30,
  grabCursor: true,
  loop: true,
  autoplay: {
    duration: 2000,
    disableOnInteraction: false,
  },

  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

// ===== NEW ARRIVALS SWIPER =====
let newSwiper = new Swiper(".new-swiper", {
  centeredSlides: true,
  slidesPerView: "auto",
  loop: true,
  spaceBetween: 32,
  grabCursor: true,
  autoplay: {
    duration: 2000,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});
