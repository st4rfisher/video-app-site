const menu = document.querySelector('.menu');
const menuList = menu.querySelector('.menu__list');
const closeButton = menu.querySelector('.menu__close');
const openButton = document.querySelector('.header__menu-button');

document.addEventListener('DOMContentLoaded', () => {
  menu.classList.remove('menu--no-js');
  openButton.classList.add('header__menu-button--show');
  closeButton.classList.add('menu__close--show');
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
