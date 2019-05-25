"use strict";function closePopup(){popups.forEach(function(e){e.classList.contains("js-show")&&e.classList.remove("js-show")})}var popups=document.querySelectorAll(".popups__popup-overlay"),closeButtons=document.querySelectorAll(".closeButton"),overlays=document.querySelectorAll(".popups__popup-overlay"),cityButton=document.querySelector(".main-info__different-city"),cityPopup=document.querySelector(".city__overlay"),callbackButton=document.querySelector(".main-info__order-callback"),callbackPopup=document.querySelector(".callback__overlay"),authButton=document.querySelectorAll(".sign-in"),authPopup=document.querySelector(".auth__overlay"),quickViewButton=document.querySelectorAll(".js-quick-view"),quickViewOverlay=document.querySelector(".quick-view__overlay");closeButtons.forEach(function(e){e.addEventListener("click",closePopup)}),overlays.forEach(function(e){e.addEventListener("click",function(e){e.target.classList.contains("popups__popup-overlay")&&closePopup()})}),document.addEventListener("keydown",function(e){"Escape"===e.code&&closePopup()}),cityButton.addEventListener("click",function(e){e.preventDefault(),cityPopup.classList.add("js-show")}),callbackButton.addEventListener("click",function(e){e.preventDefault(),callbackPopup.classList.add("js-show")}),authButton.forEach(function(e){e.addEventListener("click",function(e){e.preventDefault(),authPopup.classList.add("js-show")})}),quickViewButton.forEach(function(e){e.addEventListener("click",function(e){e.preventDefault(),quickViewOverlay.classList.add("js-show")})});var mainImg=document.querySelector(".popup-quick-view__main-img"),miniatures=document.querySelectorAll(".popup-quick-view__img-preview"),srcs=["quick-view-photo.jpg","quick-view-2.png","quick-view-3.png"];miniatures.forEach(function(e,t){e.addEventListener("click",function(){mainImg.src="img/"+srcs[t]})});var formButtons=document.querySelectorAll(".popup-auth__button"),forms=document.querySelectorAll(".popup-auth__form");formButtons.forEach(function(e,t){e.addEventListener("click",function(){e.classList.contains("js-active")||(formButtons.forEach(function(e,t){e.classList.remove("js-active"),forms[t].classList.remove("js-show")}),e.classList.add("js-active"),forms[t].classList.add("js-show"))})});