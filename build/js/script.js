"use strict";var searchButton=document.querySelector(".main-nav__search-button"),searchInput=document.querySelector(".main-nav__search-container"),openNav=document.querySelector(".main-nav__open-nav"),categories=document.querySelector(".main-nav__categories"),categoriesItems=document.querySelectorAll(".nav-categories__link"),categoriesNestedLists=document.querySelectorAll(".nav-categories__nested-list"),categoriesNestedItems=document.querySelectorAll(".nav-categories__nested-item"),categoriesDeepLists=document.querySelectorAll(".nav-categories__deep-list");searchButton.addEventListener("click",function(e){window.innerWidth<760&&(e.preventDefault(),searchInput.classList.toggle("js-show"),searchInput.firstChild.placeholder="Поиск")}),openNav.addEventListener("click",function(e){window.innerWidth<760&&(e.preventDefault(),categories.classList.toggle("js-show"))}),categoriesItems.forEach(function(e,t){e.addEventListener("click",function(e){e.preventDefault(),e.target.classList.contains("nav-categories__link")&&window.innerWidth<760&&(categoriesNestedLists[t].classList.toggle("js-show"),categoriesNestedLists.forEach(function(e){e.classList.contains("js-show")&&e!==categoriesNestedLists[t]&&e.classList.remove("js-show")}))})}),categoriesNestedItems.forEach(function(e,t){e.addEventListener("click",function(e){e.target.classList.contains("nav-categories__nested-item")&&window.innerWidth<760&&(categoriesDeepLists[t].classList.toggle("js-show"),categoriesDeepLists.forEach(function(e){e.classList.contains("js-show")&&e!==categoriesDeepLists[t]&&e.classList.remove("js-show")}))})}),console.log();