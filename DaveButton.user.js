// ==UserScript==
// @name         DaveButton
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://foxfundingportal.com/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    var btn1234 = document.createElement("button");
    var selection = document.querySelector(".deal_panel");
    if(selection!==null){
        selection.append(btn1234);
        btn1234.innerHTML = "Dave";
        btn1234.style.backgroundColor = "red";
        btn1234.style.border= "none";
        btn1234.style.padding = "10px 12px";
        btn1234.style.width = "70px";
        btn1234.style.textAlign = "center";
        btn1234.style.display = "inline-block";
        btn1234.style.fontSize = "16px";
        btn1234.style.margin = "16px 16px";
        btn1234.style.cursor = "pointer";
        btn1234.style.position = "fixed";
        btn1234.style.top = "150px";
        btn1234.style.right = "94px";
        btn1234.onclick = function(){
            document.getElementById("search_name").value=" ";
            document.getElementById("from_created_date").value="";
            document.getElementById("to_created_date").value="";
            document.getElementById("iso").value="Select Iso";
            document.getElementById("note").value="";
            document.getElementById("status_group").value="Select Group";
            document.getElementById("underwriter").value=8;
            document.getElementById("is_renewal").value="Renewal?";
            document.getElementById("funding_entity").value="Funding Entity";
            document.getElementById("status").value="New";
            document.querySelector("input[type='submit']").click()};}

})();