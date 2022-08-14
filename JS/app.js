'use strict';

// DOM ELEMENTS FOR THE MOBILE MENU
const navMenu = document.querySelector('.nav__menu');
const menuBtn = document.querySelector('.nav__btn');
const hamburgerMenu = document.querySelector('.hamburger-icon');
const closeIcon = document.querySelector('.close-icon');
const overlay = document.querySelector('.overlay');
let hidden = true;

const openMobileMenu = function (e) {
  navMenu.classList.remove('hidden-menu');
  hamburgerMenu.classList.add('hidden');
  closeIcon.classList.remove('hidden');
  overlay.classList.remove('hidden');
  hidden = false;
};

const closeMobileMenu = function (e) {
  navMenu.classList.add('hidden-menu');
  hamburgerMenu.classList.remove('hidden');
  closeIcon.classList.add('hidden');
  overlay.classList.add('hidden');
  hidden = true;
};

menuBtn.addEventListener('click', function (e) {
  if (hidden) {
    openMobileMenu();
  } else {
    closeMobileMenu();
  }
});

overlay.addEventListener('click', function (e) {
  closeMobileMenu();
});
