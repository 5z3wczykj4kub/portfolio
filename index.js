const menu = document.querySelector('.menu__outer');
const icons = document.querySelectorAll('.menu__inner i');
const containerOuter = document.querySelector('.container__outer');
const navigation = document.querySelector('.navigation__outer');
const backdrop = document.querySelector('.backdrop');
const wrapper = document.querySelector('.wrapper');
const projects = document.querySelectorAll('.project');
const modalBackdrop = document.querySelector('.modal-backdrop');

const swiper = new Swiper('.swiper', {
  pagination: {
    el: '.swiper-pagination',
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  autoHeight: true,
});

[...icons, backdrop].forEach((icon) => {
  icon.addEventListener('click', () => {
    menu.classList.toggle('menu__outer--open');
    containerOuter.classList.toggle('container__outer--open');
    navigation.classList.toggle('navigation__outer--open');
    backdrop.classList.toggle('backdrop--active');

    if (menu.classList.contains('menu__outer--open')) {
      const modals = document.querySelectorAll('.modal.active');
      modals.forEach((modal) => modal.classList.remove('active'));
      modalBackdrop.classList.remove('active');
      document.body.style.overflow = 'hidden';
      wrapper.style.overflow = 'hidden';
      containerOuter.style.animation =
        'rotate 0.4s linear, float 3.5s 0.4s infinite';
    } else {
      document.body.style.overflow = 'visible';
      containerOuter.style.animation = 'derotate 0.4s linear';
    }
  });
});

backdrop.addEventListener('transitionstart', () => {
  if (backdrop.classList.contains('backdrop--active')) {
    backdrop.style.transform = 'translateX(0)';
  }
});

backdrop.addEventListener('transitionend', () => {
  if (!backdrop.classList.contains('backdrop--active')) {
    backdrop.style.transform = 'translateX(-100%)';
  }
});

modalBackdrop.addEventListener('click', () => {
  const modals = document.querySelectorAll('.modal.active');
  modals.forEach((modal) => modal.classList.remove('active'));
  modalBackdrop.classList.remove('active');
  document.body.style.overflow = 'visible';
});

projects.forEach((project) => {
  project.addEventListener('click', () => {
    if (project.classList.contains('mini-project')) return;
    const { projectName } = project.dataset;
    const modal = document.querySelector(`#${projectName}`);
    modal.classList.add('active');
    modalBackdrop.classList.add('active');
    document.body.style.overflow = 'hidden';
  });
});
