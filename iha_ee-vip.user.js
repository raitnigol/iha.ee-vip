// ==UserScript==
// @name         iha.ee gif remover
// @version      0.1
// @description  iha.ee eemalda gif (tasuta vip)
// @author       Nigol
// @match        https://iha.ee/*
// @include      https://*.iha.ee/*
// @grant        none
// ==/UserScript==

(function() {
    window.onload = function(){
        document.querySelector("body > div:nth-child(7) > table > tbody > tr:nth-child(2) > td > table:nth-child(2) > tbody > tr:nth-child(1) > td.center_td > table:nth-child(3) > tbody > tr:nth-child(2) > td > table:nth-child(3) > tbody > tr > td > table > tbody > tr:nth-child(2) > td > a > img").style.opacity = "0";
    };
})();
