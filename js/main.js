const navbar = document.querySelector('#nav');
const navBtn = document.querySelector('#nav-btn');
const closeBtn = document.querySelector('#close-btn');
const sidebar = document.querySelector('#sidebar');
// const date = document.querySelector('#date');

// add fixed class to navbar
window.addEventListener('scroll', () => {
  if (window.pageYOffset > 80) {
    navbar.classList.add('navbar-fixed');
  } else {
    navbar.classList.remove('navbar-fixed');
  }
});

// show sidebar
navBtn.addEventListener('click', () => {
  sidebar.classList.add('show-sidebar');
});
closeBtn.addEventListener('click', () => {
  sidebar.classList.remove('show-sidebar');
});
// set year
// date.innerHTML = new Date().getFullYear();

// project slider

const slides = document.querySelectorAll('.slide');
const nextBtn = document.querySelector('.nextBtn');
const prevBtn = document.querySelector('.prevBtn');

slides.forEach((slide, index) => {
  slide.style.left = `${index * 100}%`;
});

let counter = 0;

const slider = () => {
  if (counter < slides.length - 1) {
    nextBtn.style.display = 'block';
  } else {
    nextBtn.style.display = 'none';
  }
  if (counter > 0) {
    prevBtn.style.display = 'block';
  } else {
    prevBtn.style.display = 'none';
  }

  slides.forEach((slide) => {
    slide.style.transform = `translateX(-${counter * 100}%)`;
  });
};

nextBtn.addEventListener('click', () => {
  counter += 1;
  slider();
});

prevBtn.addEventListener('click', () => {
  counter -= 1;
  slider();
});
