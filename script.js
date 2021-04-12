/*
============
MOBILE MENU
============
*/

const mobileMenu = document.querySelector('.mobile-menu');
const mobileNav = document.querySelector('.mobile-nav');
const navIcon = document.querySelector('.nav-icon');
let menuState = 0;

mobileNav.addEventListener('click', toggleMenu);

function toggleMenu() {
  mobileMenu.classList.toggle('open');
};



/*
============
FOOTER LINKS
============
*/

const footLink = document.querySelectorAll('.foot-link');
const footDiv = document.querySelectorAll('.foot-link-div');

for (i = 0; i < footLink.length; ++i) {
  footLink[i].addEventListener('click', toggleFoot);
}

function toggleFoot() {
  const selection = document.getElementById(this.id);
  const icon = selection.childNodes[1].childNodes[2];

  icon.classList.toggle('show');
  //console.log(selection.childNodes[1].childNodes[2].innerHTML);
  //console.log(selection.childNodes);
  selection.childNodes[3].classList.toggle('open');

}
