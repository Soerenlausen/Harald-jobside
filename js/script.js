'use strict'

const menu = document.getElementById('menu');
const mobileNav = document.getElementById('mobile-nav');

const toggleNav = () => {
  mobileNav.style.right = mobileNav.style.right === '0px' ? '-100vw' : '0px';
};


menu.addEventListener('click', toggleNav);