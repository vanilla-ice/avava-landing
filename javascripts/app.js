!function(){"use strict";var n="undefined"==typeof window?global:window;if("function"!=typeof n.require){var t={},e={},i={},r={}.hasOwnProperty,o=/^\.\.?(\/|$)/,l=function(n,t){for(var e,i=[],r=(o.test(t)?n+"/"+t:t).split("/"),l=0,u=r.length;u>l;l++)e=r[l],".."===e?i.pop():"."!==e&&""!==e&&i.push(e);return i.join("/")},u=function(n){return n.split("/").slice(0,-1).join("/")},a=function(t){return function(e){var i=l(u(t),e);return n.require(i,t)}},c=function(n,t){var i={id:n,exports:{}};return e[n]=i,t(i.exports,a(n),i),i.exports},s=function(n){return i[n]?s(i[n]):n},f=function(n,i){null==i&&(i="/");var o=s(n);if(r.call(e,o))return e[o].exports;if(r.call(t,o))return c(o,t[o]);throw new Error("Cannot find module '"+n+"' from '"+i+"'")};f.alias=function(n,t){i[t]=n},f.reset=function(){t={},e={},i={}};var p=/\.[^.\/]+$/,d=/\/index(\.[^\/]+)?$/,m=function(n){if(p.test(n)){var t=n.replace(p,"");r.call(i,t)&&i[t].replace(p,"")!==t+"/index"||(i[t]=n)}if(d.test(n)){var e=n.replace(d,"");r.call(i,e)||(i[e]=n)}};f.register=f.define=function(n,i){if("object"==typeof n)for(var o in n)r.call(n,o)&&f.register(o,n[o]);else t[n]=i,delete e[n],m(n)},f.list=function(){var n=[];for(var e in t)r.call(t,e)&&n.push(e);return n},f.brunch=!0,f._cache=e,n.require=f}}(),require.register("initialize.js",function(n,t,e){"use strict";document.addEventListener("DOMContentLoaded",function(){$(".head-slider").slick({arrows:!1,autoplay:!0}),$(".head-main-button").on("click",function(){swal({title:"Записаться на курс",text:"Введите Ваш E-mail:",type:"input",type:"input",showCancelButton:!0,closeOnConfirm:!1,animation:"slide-from-top",inputPlaceholder:"example@mail.com"},function(n){return n===!1?!1:""===n?(swal.showInputError("Введите E-mail"),!1):void swal("Спасибо!","Заявка отправлена","success")})}),$(".button-course").on("click",function(){swal({title:"Записаться на курс",text:"Введите Ваш E-mail:",type:"input",type:"input",showCancelButton:!0,closeOnConfirm:!1,animation:"slide-from-top",inputPlaceholder:"example@mail.com"},function(n){return n===!1?!1:""===n?(swal.showInputError("Введите E-mail"),!1):void swal("Спасибо!","Заявка отправлена","success")})})})});