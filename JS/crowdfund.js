// open the mobile menu function
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

// update dom elements
const updateDomData = function (value) {
  totalMoney += value;
  progressBarValue = ((totalMoney / 100000) * 100).toFixed(2);
  totalBackers++;
};

const renderDataToDom = function () {
  totalBackersEl.textContent = `${totalBackers.toLocaleString('en-US')}`;
  totalMoneyEl.textContent = `$${totalMoney.toLocaleString('en-US')}`;
  progressBar.value = progressBarValue;
};

// close the makeselection modal
const closeMakeSelectionModal = function (e) {
  makeSelectionModal.classList.toggle('hidden');
  overlay.classList.toggle('hidden');
};

// when the event occurs on the radio button
const selectPledgeOption = function (targetEl) {
  for (const curOption of pledgeOptions) {
    if (!curOption.querySelector('.pledge-input__section')) return;
    let pledgeOption = targetEl.closest('.pledge-option');
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
};

// when event occurs on the continue button
const makeAPledge = function (targetEl) {
  let pledgeInput = targetEl.previousElementSibling;
  let pledgeValue = +pledgeInput.value;
  let dataPledgeValue = pledgeInput.dataset.pledgeValue;
  if (Number.isFinite(pledgeValue) && pledgeValue >= dataPledgeValue) {
    pledgeInput.style.border = '2px solid var(--moderate-cyan)';
    let parentEl = targetEl.closest('.pledge-option');
    parentEl.classList.remove('pledge-option--active');
    parentEl.querySelector('input[type="radio"]').checked = false;
    parentEl
      .querySelector('.pledge-input__section')
      .classList.add('hide-make-pledge');
    updateDomData(pledgeValue);
    renderDataToDom();
    closeMakeSelectionModal();
    overlay.classList.remove('hidden');
    successModal.classList.remove('hidden');
    bodyEl.classList.add('position-fixed');
  }
  if (!Number.isFinite(pledgeValue) || pledgeValue <= dataPledgeValue - 1) {
    pledgeInput.style.border = '2px solid #e63946';
    return;
  }
};
