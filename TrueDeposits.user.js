// ==UserScript==
// @name         TrueDeposits
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://foxfundingportal.com/deals*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    function myJQueryCode(){
    jQuery('body').on('click','input.button.tiny',function(event){

    var paymentArray= Array.from(document.querySelectorAll("input[id^='deal_deal_positions_attributes_'][id$='payment_amount']"));
    var balanceArray= Array.from(document.querySelectorAll("input[id^='deal_deal_positions_attributes_'][id$='balance']"));
    var frequencyArray= Array.from(document.querySelectorAll("select[id^='deal_deal_positions_attributes_'][id$='payment_type']"));
    var depositArray= Array.from(document.querySelectorAll("input[id^='deal_merchant_attributes_bank_accounts_attributes_'][id$='net_deposits_average']"));

    var payments = new Array();
    var payments_no_monthly = new Array();


    for(var i=0;i<paymentArray.length;i++){
        if(balanceArray[i].value!=="0.0"){
            if(frequencyArray[i].value=="Weekly"){
                payments.push(Number(paymentArray[i].value)*4);
                payments_no_monthly.push(Number(paymentArray[i].value)*4);
            }
            else if(frequencyArray[i].value=="Daily"){
                payments.push(Number(paymentArray[i].value)*20);
                payments_no_monthly.push(Number(paymentArray[i].value)*20);
            }
            else if(frequencyArray[i].value=="Monthly"){
                payments.push(Number(paymentArray[i].value));
            };
        };

    };

    var sumPositions = 0;
    for(var y=0; y<payments.length; y++){
        sumPositions += payments[y];
    };
    var sumPositionsNoMonthly = 0;
    for(var g=0; g<payments_no_monthly.length; g++){
        sumPositionsNoMonthly += payments_no_monthly[g];
    };

    var deposits = new Array();
    for(var z=0;z<depositArray.length;z++){
        if(depositArray[z].value!=="$0.00"){
            deposits.push(Number((depositArray[z].value).replace(/[^0-9.-]+/g,"")));
        };

    };

    var sumDeposits = 0;
    for (var x = 0; x < deposits.length; x++) {
        sumDeposits += deposits[x];
    };

    var avgDeposits = sumDeposits/deposits.length;
    var mcaOutMonthly = sumPositions/sumDeposits;
    var mcaOutNoMonthly = sumPositionsNoMonthly/sumDeposits;

    console.log("This company is " + (mcaOutMonthly*100).toFixed(2) + "% leveraged (including monthly)\n\n" + "Without monthly: " + ((mcaOutNoMonthly*100).toFixed(2).toString()) + "%\n\n" + "Average Deposits = $" + sumDeposits.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,'));});

}
 if(typeof jQuery=='undefined') {
    var headTag = document.getElementsByTagName("head")[0];
    var jqTag = document.createElement('script');
    jqTag.type = 'text/javascript';
    jqTag.src = 'jquery.js';
    jqTag.onload = myJQueryCode;
    headTag.appendChild(jqTag);
} else {
    myJQueryCode();
}

})();