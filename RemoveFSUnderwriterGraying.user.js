// ==UserScript==
// @name         RemoveFSUnderwriterGraying
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://foxfundingportal.com/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    var selection = document.getElementById("underwriter");
    if(selection!==null){
        selection.removeAttribute("disabled");}

})();