!function(){"use strict";var t="undefined"==typeof window?global:window;if("function"!=typeof t.require){var e={},r={},i={},n={}.hasOwnProperty,o=/^\.\.?(\/|$)/,l=function(t,e){for(var r,i=[],n=(o.test(e)?t+"/"+e:e).split("/"),l=0,a=n.length;a>l;l++)r=n[l],".."===r?i.pop():"."!==r&&""!==r&&i.push(r);return i.join("/")},a=function(t){return t.split("/").slice(0,-1).join("/")},u=function(e){return function(r){var i=l(a(e),r);return t.require(i,e)}},s=function(t,e){var i={id:t,exports:{}};return r[t]=i,e(i.exports,u(t),i),i.exports},c=function(t){return i[t]?c(i[t]):t},f=function(t,i){null==i&&(i="/");var o=c(t);if(n.call(r,o))return r[o].exports;if(n.call(e,o))return s(o,e[o]);throw new Error("Cannot find module '"+t+"' from '"+i+"'")};f.alias=function(t,e){i[e]=t},f.reset=function(){e={},r={},i={}};var p=/\.[^.\/]+$/,d=/\/index(\.[^\/]+)?$/,m=function(t){if(p.test(t)){var e=t.replace(p,"");n.call(i,e)&&i[e].replace(p,"")!==e+"/index"||(i[e]=t)}if(d.test(t)){var r=t.replace(d,"");n.call(i,r)||(i[r]=t)}};f.register=f.define=function(t,i){if("object"==typeof t)for(var o in t)n.call(t,o)&&f.register(o,t[o]);else e[t]=i,delete r[t],m(t)},f.list=function(){var t=[];for(var r in e)n.call(e,r)&&t.push(r);return t},f.brunch=!0,f._cache=r,t.require=f}}(),require.register("initialize.js",function(t,e,r){"use strict";document.addEventListener("DOMContentLoaded",function(){window.sr=ScrollReveal(),sr.reveal(".head",{duration:200}),sr.reveal(".first",{duration:500,origin:"left",viewOffset:{top:0,right:0,bottom:300,left:0}}),sr.reveal(".second",{duration:500,delay:200,origin:"right",viewOffset:{top:0,right:0,bottom:300,left:0}}),sr.reveal(".third",{duration:500,origin:"left",viewOffset:{top:0,right:0,bottom:300,left:0}}),sr.reveal(".course-section-image",{duration:500,origin:"right",viewOffset:{top:0,right:0,bottom:300,left:0}}),$(".head-slider").slick({arrows:!1,autoplay:!0}),$(".head-main-button").on("click",function(){swal({title:"Записаться на курс",text:"Введите Ваш E-mail:",type:"input",type:"input",showCancelButton:!0,closeOnConfirm:!1,animation:"slide-from-top",inputPlaceholder:"example@mail.com"},function(t){return t===!1?!1:""===t?(swal.showInputError("Введите E-mail"),!1):void swal("Спасибо!","Заявка отправлена","success")})}),$(".button-course").on("click",function(){swal({title:"Записаться на курс",text:"Введите Ваш E-mail:",type:"input",type:"input",showCancelButton:!0,closeOnConfirm:!1,animation:"slide-from-top",inputPlaceholder:"example@mail.com"},function(t){return t===!1?!1:""===t?(swal.showInputError("Введите E-mail"),!1):void swal("Спасибо!","Заявка отправлена","success")})})})});