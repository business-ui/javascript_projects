// ==UserScript==
// @name         MaxButton
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://foxfundingportal.com/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    var btnMax = document.createElement("button");
    var selection = document.querySelector(".deal_panel");
    if(selection!==null){
        selection.append(btnMax);
        btnMax.innerHTML = "Max";
        btnMax.style.backgroundColor = "red";
        btnMax.style.border= "none";
        btnMax.style.padding = "10px 10px";
        btnMax.style.width = "70px";
        btnMax.style.textAlign = "center";
        btnMax.style.display = "inline-block";
        btnMax.style.fontSize = "16px";
        btnMax.style.margin = "16px 16px";
        btnMax.style.cursor = "pointer";
        btnMax.style.position = "fixed";
        btnMax.style.top = "308px";
        btnMax.style.right = "94px";
        btnMax.onclick = function(){
            document.getElementById("search_name").value=" ";
            document.getElementById("from_created_date").value="";
            document.getElementById("to_created_date").value="";
            document.getElementById("iso").value="Select Iso";
            document.getElementById("note").value="";
            document.getElementById("status_group").value="Select Group";
            document.getElementById("underwriter").value=563;
            document.getElementById("is_renewal").value="Renewal?";
            document.getElementById("funding_entity").value="Funding Entity";
            document.getElementById("status").value="Select Status";
            document.querySelector("input[type='submit']").click()};}
    // Your code here...
})();