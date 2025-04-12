// function mobileNav() {
// 	// Mobile nav button
// 	const navBtn = document.querySelector('.mobile-nav-btn');
// 	const nav = document.querySelector('.mobile-nav');
// 	const menuIcon = document.querySelector('.nav-icon');

// 	navBtn.onclick = function () {
// 		nav.classList.toggle('mobile-nav--open');
// 		menuIcon.classList.toggle('nav-icon--active');
// 		document.body.classList.toggle('no-scroll');
// 	};
// }

function mobileNav() {
  const btnOpen = document.querySelector(".open");
  const nav = document.querySelector(".header__menu");

  btnOpen.addEventListener("click", () => {
    nav.classList.toggle("menu--active");
    document.body.classList.toggle("no-scroll");
  });
}

export default mobileNav;
