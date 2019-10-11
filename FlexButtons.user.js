// ==UserScript==
// @name         FlexButtons
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://foxfundingportal.com/deals*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

var today = new Date();
var begin_of_month = new Date();
var end_of_month = new Date();
end_of_month.setDate(0);

var dd = String(today.getDate()).padStart(2, '0');
var mm_this = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
var mm_last = String(today.getMonth()).padStart(2, '0'); //January is 0!
var yyyy = today.getFullYear();

today = mm_this + '/' + dd + '/' + yyyy;
var last_month_begin = mm_last + '/01/' + yyyy
var last_month_end = mm_last + '/' + end_of_month.getDate() + '/' + yyyy;
var this_month_begin = mm_this + '/01/' + yyyy;

var selection = document.querySelector(".main-section");
var button_names = ['Today','Dave','Max','This Month','Last Month'];

var underwriter_value = {
  'Allen fisher':6,
  'Bryan Miller':944,
  'Dave sneiderman':8,
  'Joe rapoport':2,
  'Mendy hecht':563

};


var search_name = document.getElementById("search_name");//.value=" ";
var from_create_date = document.getElementById("from_created_date");//.value="";
var to_create_date = document.getElementById("to_created_date");//.value="";
var iso = document.getElementById("iso");
var note = document.getElementById("note");
var status_group = document.getElementById("status_group");
var underwriter = document.getElementById("underwriter");
var is_renewal = document.getElementById("is_renewal");
var funding_entity = document.getElementById("funding_entity");
var status = document.getElementById("status");

function default_settings(){
  search_name.value=" ";
  from_create_date.value="";
  to_create_date.value="";
  iso.value="Select Iso";
  note.value="";
  status_group.value="Select Group";
  underwriter.value="Select Underwriter";
  is_renewal.value="Renewal?";
  funding_entity.value="Funding Entity";
  status.value="Select Status";
}

function submit(){
  document.querySelector("input[type='submit']").click();
}

var container = document.createElement('div');
container.style.display='flex';
container.style.flexDirection='row';
container.id='flexBoxContainer';
container.style.flexFlow='row wrap';
selection.before(container)

for(var i=0;i<5; i++){
  var button = document.createElement("button");
  button.innerHTML = button_names[i];
  button.id = button_names[i];
  button.style.display='flex';
  button.style.background='green';
  button.style.color='white';
  button.style.margin='2px';
  button.style.width='100px';
  button.style.justifyContent='center';
  button.style.alignItems='center';
  button.style.padding='1px';
  // Find all deals from Today
  if(i==0){
  	button.addEventListener('click',function(){
      default_settings();
      from_create_date.value=today;
	    to_create_date.value=today;
	    underwriter.value=underwriter_value['Dave sneiderman'];
	    submit();
	  });
  }
  // Find Dave deals
  if(i==1){
    button.addEventListener('click',function(){
      default_settings();
      underwriter.value=underwriter_value['Dave sneiderman'];
      status.value='New';
      submit();
    });
    button.addEventListener('mouseover',function(){

    });
  }
  // Find Max deals
  if(i==2){
    button.addEventListener('click',function(){
      default_settings();
	    underwriter.value=underwriter_value['Mendy hecht'];
	    submit();
	  });
  }
  // Find funded deals from the current month
  if(i==3){
  	button.addEventListener('click',function(){
      default_settings();
		  underwriter.value=underwriter_value['Dave sneiderman'];
      from_create_date.value=this_month_begin;
      to_create_date.value=today;
      status.value='Funded';
      submit();
	  });
  }
    // Find funded deals from last month
  if(i==4){
    button.addEventListener('click',function(){
      default_settings();
      underwriter.value=underwriter_value['Dave sneiderman'];
      from_create_date.value=last_month_begin;
      to_create_date.value=this_month_begin;
      status.value='Funded';
      submit();
    });
  }
  document.getElementById('flexBoxContainer').appendChild(button);

}
})();