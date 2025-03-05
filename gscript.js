const loginTrigger = document.getElementById('login-trigger');
const loginPopup = document.getElementById('login-popup');

// Registration triggers
const seekerLoginTrigger = document.getElementById('seeker-login-trigger');
const doerLoginTrigger = document.getElementById('doer-login-trigger');
const seekerLoginForm = document.getElementById('seeker-login-form');
const doerLoginForm = document.getElementById('doer-login-form');

// Login triggers
const seekerLogupTrigger = document.getElementById('seeker-logup-trigger');
const doerLogupTrigger = document.getElementById('doer-logup-trigger');
const seekerLogupForm = document.getElementById('seeker-logup-form');
const doerLogupForm = document.getElementById('doer-logup-form');

const closePopups = document.querySelectorAll('.close-popup');

loginTrigger.addEventListener('click', () => {
  loginPopup.classList.add('active');
});

// Registration triggers
seekerLoginTrigger.addEventListener('click', () => {
  loginPopup.classList.remove('active');
  seekerLoginForm.classList.add('active');
});

doerLoginTrigger.addEventListener('click', () => {
  loginPopup.classList.remove('active');
  doerLoginForm.classList.add('active');
});

// Login triggers
seekerLogupTrigger.addEventListener('click', () => {
  loginPopup.classList.remove('active');
  seekerLogupForm.classList.add('active');
});

doerLogupTrigger.addEventListener('click', () => {
  loginPopup.classList.remove('active');
  doerLogupForm.classList.add('active');
});

closePopups.forEach(popup => {
  popup.addEventListener('click', () => {
    loginPopup.classList.remove('active');
    seekerLoginForm.classList.remove('active');
    doerLoginForm.classList.remove('active');
    seekerLogupForm.classList.remove('active');
    doerLogupForm.classList.remove('active');
  });
});

const faqItems = document.querySelectorAll('.faq-item');

faqItems.forEach(item => {
  item.addEventListener('click', () => {
    item.classList.toggle('active');
  });
});