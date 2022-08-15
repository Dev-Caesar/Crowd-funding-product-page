'use strict';

// DOM ELEMENTS
const bodyEl = document.querySelector('body');
const navMenu = document.querySelector('.nav__menu');
const menuBtn = document.querySelector('.nav__btns');
const openMobileMenuBtn = document.querySelector('.hamburger-icon');
const closeMobileMenuBtn = document.querySelector('.close-icon');
const closeMakeSelectionBtn = document.querySelector('#close-modal__btn');
const overlay = document.querySelector('.overlay');
let mobileMenuhidden = true;
const backProjectBtn = document.querySelector('.back-project__btn');
const makeSelectionModal = document.querySelector('.make-selection__section');
const pledgeOptions = document.querySelectorAll('.pledge-option');
const pledgeInputSections = document.querySelectorAll('.pledge-input__section');
// THE  MOBILE MENU FEATURE
// open the mobile menu
const openMobileMenu = function (e) {
  navMenu.classList.remove('hidden-menu');
  openMobileMenuBtn.classList.add('hidden');
  closeMobileMenuBtn.classList.remove('hidden');
  overlay.classList.remove('hidden');
  bodyEl.classList.add('position-fixed');
  mobileMenuhidden = false;
};

// close the mobile menu
const closeMobileMenu = function (e) {
  navMenu.classList.add('hidden-menu');
  openMobileMenuBtn.classList.remove('hidden');
  closeMobileMenuBtn.classList.add('hidden');
  overlay.classList.add('hidden');
  bodyEl.classList.remove('position-fixed');
  mobileMenuhidden = true;
};

//
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

//  selection modal feature
const closeMakeSelectionModal = function (e) {
  makeSelectionModal.classList.toggle('hidden');
  overlay.classList.toggle('hidden');
};
backProjectBtn.addEventListener('click', closeMakeSelectionModal);
closeMakeSelectionBtn.addEventListener('click', closeMakeSelectionModal);

// attach event listener to make selection modal
makeSelectionModal.addEventListener('click', function (e) {
  let targetEl = e.target;
  if (targetEl.className === 'select-pledge' && targetEl.checked) {
    let parentSibling = targetEl.closest(
      '.pledge-option__header'
    ).nextElementSibling;
    // only add the active border class to the current container
    for (const curOption of pledgeOptions) {
      let pledgeOption = targetEl.closest('.pledge-option');
      if (!curOption.querySelector('.pledge-input__section')) return;
      if (
        curOption === pledgeOption ||
        pledgeOption.classList.contains('pledge-option-active')
      ) {
        curOption.classList.add('pledge-option--active');
        curOption
          .querySelector('.pledge-input__section')
          .classList.remove('hide-make-pledge');
      } else {
        curOption.classList.remove('pledge-option--active');
        curOption
          .querySelector('.pledge-input__section')
          .classList.add('hide-make-pledge');
      }
    }
  }
});
