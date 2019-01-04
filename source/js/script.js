'use strict';

var navButton = document.querySelector('.main-nav__toggle');
var navMain = document.querySelector('.main-nav');
var navMainWrapper = document.querySelector('.main-nav__wrapper');

navMain.classList.remove('main-nav--nojs');

navButton.addEventListener('click', function() {
  if (navMain.classList.contains('main-nav--closed')) {
    navMain.classList.remove('main-nav--closed');
    navMain.classList.add('main-nav--opened');
  } else {
    navMain.classList.add('main-nav--closed');
    navMain.classList.remove('main-nav--opened');
  }
});



      
