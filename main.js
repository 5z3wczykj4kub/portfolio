const menu = document.querySelector('.menu__outer');
const icons = document.querySelectorAll('.menu__inner i');
const containerOuter = document.querySelector('.container__outer');
const navigation = document.querySelector('.navigation__outer');
const backdrop = document.querySelector('.backdrop');
const wrapper = document.querySelector('.wrapper');

[...icons, backdrop].forEach((icon) => {
  icon.addEventListener('click', () => {
    menu.classList.toggle('menu__outer--open');
    containerOuter.classList.toggle('container__outer--open');
    navigation.classList.toggle('navigation__outer--open');
    backdrop.classList.toggle('backdrop--active');

    if (menu.classList.contains('menu__outer--open')) {
      document.body.style.overflow = 'hidden';
      wrapper.style.overflow = 'hidden';
      containerOuter.style.animation =
        'rotate 0.4s linear, float 3.5s 0.4s infinite';
    } else {
      document.body.style.overflow = 'visible';
      // wrapper.style.overflow = 'visible';
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
