// ==UserScript==
// @name         Today's Submissions Button
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://foxfundingportal.com/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    var today = new Date();
    var beginning_of_the_month = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = today.getFullYear();
    var btn1236 = document.createElement("button");
    var selection = document.querySelector(".deal_panel");
    if(selection!==null){
        selection.append(btn1236);
        btn1236.innerHTML = "Today";
        btn1236.style.backgroundColor = "#ed7d15";
        btn1236.style.border= "none";
        btn1236.style.padding = "10px 10px";
        btn1236.style.width = "70px";
        btn1236.style.textAlign = "center";
        btn1236.style.display = "inline-block";
        btn1236.style.fontSize = "16px";
        btn1236.style.margin = "14px";
        btn1236.style.cursor = "pointer";
        btn1236.style.position = "fixed";
        btn1236.style.top = "230px";
        btn1236.style.right = "96px";
        today = mm + '/' + dd + '/' + yyyy;
        beginning_of_the_month = mm + '/01/' + yyyy;
        btn1236.onclick = function(){
            document.getElementById("search_name").value=" ";
            document.getElementById("from_created_date").value=today;
            document.getElementById("to_created_date").value=today;
            document.getElementById("iso").value="Select Iso";
            document.getElementById("note").value="";
            document.getElementById("status_group").value="Select Group";
            document.getElementById("underwriter").value=8;
            document.getElementById("is_renewal").value="Renewal?";
            document.getElementById("funding_entity").value="Funding Entity";
            document.getElementById("status").value="Select Status";
            document.querySelector("input[type='submit']").click()};}
    // Your code here...
})();