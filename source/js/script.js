'use strict';

//  выпадающее меню
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

//  дата и время на сайте
var startTime = function () {
  var d = new Date();
  var day = new Array("Воскресенье","Понедельник","Вторник",
  "Среда","Четверг","Пятница","Суббота");
  var month = new Array("января","февраля","марта","апреля","мая","июня",
  "июля","августа","сентября","октября","ноября","декабря");
  var h = d.getHours();
  var m = d.getMinutes();
  var s = d.getSeconds();
  m = checkTime(m);
  s = checkTime(s);
  document.getElementById('txt').innerHTML = 'Сегодня: ' + day[d.getDay()] + ' ' + d.getDate() + ' ' + month[d.getMonth()] + ' ' + h + ":" + m + ":" + s;
  var t = setTimeout('startTime()', 500);
}
var checkTime = function (i) {
  if (i < 10) {
    i = "0" + i;
  }
  return i;
}