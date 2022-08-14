'use strict';

// DOM ELEMENTS
const navMenu = document.querySelector('.nav__menu');
const menuBtn = document.querySelector('.nav__btns');
const hamburgerMenu = document.querySelector('.hamburger-icon');
const closeIcon = document.querySelector('.close-icon');
const overlay = document.querySelector('.overlay');
let hidden = true;
const backProjectBtn = document.querySelector('.back-project__btn');
const makeSelectionModal = document.querySelector('.make-selection__section');

// THE  MOBILE MENU FEATURE
// open the mobile menu
const openMobileMenu = function (e) {
  navMenu.classList.remove('hidden-menu');
  hamburgerMenu.classList.add('hidden');
  closeIcon.classList.remove('hidden');
  overlay.classList.remove('hidden');
  hidden = false;
};

// close the mobile menu
const closeMobileMenu = function (e) {
  navMenu.classList.add('hidden-menu');
  hamburgerMenu.classList.remove('hidden');
  closeIcon.classList.add('hidden');
  overlay.classList.add('hidden');
  hidden = true;
};

// add event listener
menuBtn.addEventListener('click', function (e) {
  if (hidden) {
    openMobileMenu();
  } else {
    closeMobileMenu();
  }
});

overlay.addEventListener('click', function (e) {
  closeMobileMenu();
  makeSelectionModal.classList.toggle('hidden');
});

// || MAKE SELECTION FEATURE || //

// display make selection window
backProjectBtn.addEventListener('click', function (e) {
  makeSelectionModal.classList.remove('hidden');
  overlay.classList.toggle('hidden');
});
