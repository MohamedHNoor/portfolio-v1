import data from './data.js';

const navbar = document.querySelector('#nav');
const navBtn = document.querySelector('#nav-btn');
const closeBtn = document.querySelector('#close-btn');
const sidebar = document.querySelector('#sidebar');
const sidebarLinks = document.querySelectorAll('.sidebar-link');
const date = document.querySelector('#date');

const container = document.querySelector('.slide-container');
const nextBtn = document.querySelector('.next-btn');
const prevBtn = document.querySelector('.prev-btn');

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

sidebarLinks.forEach((link) => {
  link.addEventListener('click', () => {
    sidebar.classList.remove('show-sidebar');
  });
});

closeBtn.addEventListener('click', () => {
  sidebar.classList.remove('show-sidebar');
});

// set year
date.innerHTML = new Date().getFullYear();

// project slider
// if length is 1 hide buttons
if (data.length === 1) {
  nextBtn.style.display = 'none';
  prevBtn.style.display = 'none';
}

// if length is 2, add copies of slides
let projects = [...data];
if (data.length === 2) {
  projects = [...data, ...data];
}

container.innerHTML = projects
  .map((project, slideIndex) => {
    const {
      img, name, text, live, code,
    } = project;

    let position = 'next';

    if (slideIndex === 0) {
      position = 'active';
    }
    if (slideIndex === projects.length - 1) {
      position = 'last';
    }
    if (data.length <= 1) {
      position = 'active';
    }
    return `<article class="slide ${position}">
    <img
      src="${img}"
      class="img"
      alt="peter doe"
    />
    <div class="project-content">
      <h4 class="project-title">${name}</h4>
      <p class="protect-text">
        ${text}
      </p>
      <ul class="stacks">
        ${project.tecks.map((teck) => `<li>${teck}</li>`).join('')}
      </ul>
      <div class="project-btns">
        <a href="${live}" class="btn" target="_blank"
        rel="noopener" >Live <i class="fa fa-light fa-arrow-up-right-from-square"></i
        ></a>
        <a href="${code}" class="btn" target="_blank"
        rel="noopener" >Code <i class="fa-solid fa-code"></i></a>
      </div>
    </div>
  </article>`;
  })
  .join('');

const startSlider = (type) => {
  // get all three slides active,last next
  const active = document.querySelector('.active');
  const last = document.querySelector('.last');
  let next = active.nextElementSibling;

  if (!next) {
    next = container.firstElementChild;
  }
  active.classList.remove('active');
  last.classList.remove('last');
  next.classList.remove('next');

  if (type === 'prev') {
    active.classList.add('next');
    last.classList.add('active');
    next = last.previousElementSibling;
    if (!next) {
      next = container.lastElementChild;
    }
    next.classList.remove('next');
    next.classList.add('last');
    return;
  }
  active.classList.add('last');
  last.classList.add('next');
  next.classList.add('active');
};

nextBtn.addEventListener('click', () => {
  startSlider();
});

prevBtn.addEventListener('click', () => {
  startSlider('prev');
});

// form validation

const form = document.querySelector('.form');
const formEmail = document.querySelector('.form-email');
const error = document.querySelector('.error');

form.addEventListener('submit', (event) => {
  if (formEmail.value.match(/^[a-z.0-9-_]+@[a-z.0-9-_]+$/)) {
    error.classList.add('hide');
    error.textContent = '';
    formEmail.style.border = 'none';
  } else {
    event.preventDefault();
    error.classList.remove('hide');
    error.textContent = 'Please type your Email in lower case';
    formEmail.style.border = '3px solid #f47174';
  }
});
