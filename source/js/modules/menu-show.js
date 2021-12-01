const menu = document.querySelector('.menu');
const menuList = menu.querySelector('.menu__list');
const closeButton = menu.querySelector('.menu__close');
const openButton = document.querySelector('.header__menu-button');

document.addEventListener('DOMContentLoaded', () => {
  menu.classList.remove('menu--no-js');
  // menu.style.visibility='hidden';
  openButton.classList.add('header__menu--show');
  closeButton.classList.add('menu__close-button--show');
  menu.classList.remove('menu--show');
});

closeButton.addEventListener('click', () => {
  menu.classList.remove('menu--show');
  menuList.classList.remove('menu__list--show');
});

openButton.addEventListener('click', () => {
  menu.classList.add('menu--show');
  menuList.classList.add('menu__list--show');
});
