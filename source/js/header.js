'use strict';

//Липкая навигация

var mainNav = document.querySelector('.main-nav');
var mainInfo = document.querySelector('.main-info');
var startPos = mainNav.offsetTop;

function stickyNav () {
  window.addEventListener('scroll', function () {
    if (window.innerWidth < 760) {
      if (window.scrollY > mainNav.offsetTop && !mainNav.classList.contains('sticky')) {
        mainInfo.style.marginBottom = mainNav.clientHeight + 20 + 'px';
        mainNav.classList.add('sticky');
      } else if (window.scrollY < startPos && mainNav.classList.contains('sticky')) {
        mainInfo.style.marginBottom = '0px';
        mainNav.classList.remove('sticky');
      }
    }
  });

  if (window.innerWidth > 760 && mainNav.classList.contains('sticky')) {
    mainInfo.style.marginBottom = '0px';
    mainNav.classList.remove('sticky');
  }
}

stickyNav();

window.addEventListener('resize', stickyNav);

//Окно поиска
var searchButton = document.querySelector('.main-nav__search-button');
var searchInput = document.querySelector('.main-nav__search-container');

searchButton.addEventListener('click', function (evt) {
  if (window.innerWidth < 760) {
    evt.preventDefault();
    searchInput.classList.toggle('js-show');
    searchInput.firstChild.placeholder = 'Поиск';
  }
});

//Окно нафигации по категориям
var openNav = document.querySelector('.main-nav__open-nav');
var categories = document.querySelector('.main-nav__categories');
var categoriesItems = document.querySelectorAll('.nav-categories__link');
var categoriesNestedLists = document.querySelectorAll('.nav-categories__nested-list');
var categoriesNestedItems = document.querySelectorAll('.nav-categories__nested-item');
var categoriesDeepLists = document.querySelectorAll('.nav-categories__deep-list');

openNav.addEventListener('click', function (evt) {
  if (window.innerWidth < 760) {
    evt.preventDefault();
    categories.classList.toggle('js-show');
  }
});

categoriesItems.forEach(function (item, index) {
  item.addEventListener('click', function (evt) {
    evt.preventDefault();
    if (evt.target.classList.contains('nav-categories__link') && window.innerWidth < 760) {
      categoriesNestedLists[index].classList.toggle('js-show');

      categoriesNestedLists.forEach(function (item) {
        if (item.classList.contains('js-show') && item !== categoriesNestedLists[index]) {
          item.classList.remove('js-show');
        }
      });
    }
  })
});

categoriesNestedItems.forEach(function (item, index) {
  item.addEventListener('click', function (evt) {
    if (evt.target.classList.contains('nav-categories__nested-item') && window.innerWidth < 760) {
      categoriesDeepLists[index].classList.toggle('js-show');

      categoriesDeepLists.forEach(function (item) {
        if (item.classList.contains('js-show') && item !== categoriesDeepLists[index]) {
          item.classList.remove('js-show');
        }
      });
    }
  })
});
