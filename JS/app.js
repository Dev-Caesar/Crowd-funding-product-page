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
const successModal = document.querySelector('.success-modal');
const progressBar = document.querySelector('progress');
const totalMoneyEl = document.querySelector('#total-money');
const totalBackersEl = document.querySelector('#total-backers');
let progressBarValue = 89.914;
let totalMoney = 89914;
let totalBackers = 5007;
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
  successModal.classList.add('hidden');
});

backProjectBtn.addEventListener('click', closeMakeSelectionModal);
closeMakeSelectionBtn.addEventListener('click', closeMakeSelectionModal);
makeSelectionModal.addEventListener('click', function (e) {
  let targetEl = e.target;
  if (targetEl.className === 'select-pledge' && targetEl.checked) {
    selectPledgeOption(targetEl);
  }
  if (targetEl.className === 'continue-btn') {
    makeAPledge(targetEl);
  }
});
successModal.addEventListener('click', function (e) {
  if (e.target.classList.contains('got-it')) {
    successModal.classList.add('hidden');
    overlay.classList.add('hidden');
    bodyEl.classList.remove('position-fixed');
  }
});
