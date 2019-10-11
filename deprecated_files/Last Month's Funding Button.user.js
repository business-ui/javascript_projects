// ==UserScript==
// @name         Last Month's Funding Button
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
    var end_of_month = new Date();
    end_of_month.setDate(0);
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth()).padStart(2, '0'); //January is 0!
    var yyyy = today.getFullYear();
    var btn1235 = document.createElement("button");
    var selection = document.querySelector(".deal_panel");
    if(selection!==null){
        selection.append(btn1235);
        btn1235.innerHTML = "Last Month";
        btn1235.style.backgroundColor = "blue";
        btn1235.style.border= "none";
        btn1235.style.padding = "9px";
        btn1235.style.textAlign = "center";
        btn1235.style.display = "inline-block";
        btn1235.style.fontSize = "16px";
        btn1235.style.margin = "16px 10px";
        btn1235.style.cursor = "pointer";
        btn1235.style.position = "fixed";
        btn1235.style.top = "190px";
        btn1235.style.right = "100px";
        beginning_of_the_month = mm + '/01/' + yyyy;
        var end_of_the_month = mm + '/' + end_of_month.getDate() + '/' + yyyy;
        btn1235.onclick = function(){
            document.getElementById("search_name").value=" ";
            document.getElementById("from_created_date").value=beginning_of_the_month;
            document.getElementById("to_created_date").value=end_of_the_month;
            document.getElementById("iso").value="Select Iso";
            document.getElementById("note").value="";
            document.getElementById("status_group").value="Select Group";
            document.getElementById("underwriter").value=8;
            document.getElementById("is_renewal").value="Renewal?";
            document.getElementById("funding_entity").value="Funding Entity";
            document.getElementById("status").value="Funded";
            document.querySelector("input[type='submit']").click()};}
})();