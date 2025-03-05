document.getElementById("seeker").addEventListener("click", function() {
  document.getElementById("seeker").style.backgroundColor = "orange";
  document.getElementById("doer").style.backgroundColor = "#ddd";
});

document.getElementById("doer").addEventListener("click", function() {
  document.getElementById("seeker").style.backgroundColor = "#ddd";
  document.getElementById("doer").style.backgroundColor = "orange";
});

const boxes = document.querySelectorAll('.box');
const rightImage = document.getElementById('right-image');

boxes.forEach(box => {
  box.addEventListener('click', () => {
    rightImage.src = box.dataset.image;
  });
});



document.getElementById("seeker").addEventListener("click", function() {
  document.getElementById("whoseeker").style.display = "block";
  document.getElementById("whodoer").style.display = "none";
});

document.getElementById("doer").addEventListener("click", function() {
  document.getElementById("whoseeker").style.display = "none";
  document.getElementById("whodoer").style.display = "block";
});

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

document.getElementById("heys").addEventListener("click", function() {
  document.getElementById("login-popup").style.display = "block";
});

document.getElementById("cp").addEventListener("click", function() {
  document.getElementById("login-popup").style.display = "none";
});

document.getElementById("heyd").addEventListener("click", function() {
  document.getElementById("login-popup").style.display = "block";
});


const slidez = document.querySelector('.slidez');
let currentSlideIndexz = 0;

function slideShowZ() {
  currentSlideIndexz = (currentSlideIndexz + 1) % slidez.children.length;
  slidez.style.transform = `translateX(-${currentSlideIndexz * 400}px)`;
}

setInterval(slideShowZ, 2000);


const slides = document.querySelector('.slides');
let currentSlideIndex = 0; 

function slideShowSlides() {
  currentSlideIndex = (currentSlideIndex + 1) % slides.children.length; 
  slides.style.transform = `translateX(-${currentSlideIndex * 400}px)`;
}

setInterval(slideShowSlides, 2000); 