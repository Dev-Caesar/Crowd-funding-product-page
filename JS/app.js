'use strict';

// DOM ELEMENTS
const navMenu = document.querySelector('.nav__menu');
const menuBtn = document.querySelector('.nav__btns');
const openMobileMenuBtn = document.querySelector('.hamburger-icon');
const closeMobileMenuBtn = document.querySelector('.close-icon');
const overlay = document.querySelector('.overlay');
let mobileMenuhidden = true;
const backProjectBtn = document.querySelector('.back-project__btn');
const makeSelectionModal = document.querySelector('.make-selection__section');

// THE  MOBILE MENU FEATURE
// open the mobile menu
const openMobileMenu = function (e) {
  navMenu.classList.remove('hidden-menu');
  openMobileMenuBtn.classList.add('hidden');
  closeMobileMenuBtn.classList.remove('hidden');
  overlay.classList.remove('hidden');
  mobileMenuhidden = false;
};

// close the mobile menu
const closeMobileMenu = function (e) {
  navMenu.classList.add('hidden-menu');
  openMobileMenuBtn.classList.remove('hidden');
  closeMobileMenuBtn.classList.add('hidden');
  overlay.classList.add('hidden');
  mobileMenuhidden = true;
};

// add event listener
menuBtn.addEventListener('click', function (e) {
  if (mobileMenuhidden) {
    openMobileMenu();
  } else {
    closeMobileMenu();
  }
});

overlay.addEventListener('click', function (e) {
  closeMobileMenu();
  makeSelectionModal.classList.add('hidden');
});

// || MAKE SELECTION FEATURE || //

// display make selection window
backProjectBtn.addEventListener('click', function (e) {
  makeSelectionModal.classList.remove('hidden');
  overlay.classList.toggle('hidden');
});
