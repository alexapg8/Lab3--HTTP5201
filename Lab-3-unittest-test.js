//LAB 3 - UNIT TESTING
//======== THIS FILE IS FOR THE UNIT TEST ==========
// alert("lab 3 UNIT TEST");//please delete this line once connected.
/*jslint browser:true */
/*global window */
var output = "";
function test__checkHumbrId(value, expectedResult){
    "use strict";
    if (checkHumbrId(value) === expectedResult){
        output = "Value tested: " + value + " Excepted result: " + expectedResult + " <span style='color:green'>==PASSED==</span>" + "<br/>";
    } else {
        output = "Value tested: " + value + " Excepted result: " + expectedResult + " <span style='color:red'>xxFAILEDxx</span>" + "<br/>";
    }
    document.getElementById("data").innerHTML += output;
}
test__checkHumbrId("n12345678", true);
test__checkHumbrId("N12345678", true);
test__checkHumbrId("Nn1234567", false);
test__checkHumbrId("Nn1234567", true);
test__checkHumbrId("Nn12345678", false);
test__checkHumbrId("Nn123456", false);
test__checkHumbrId("Nn12345", true);
test__checkHumbrId("N1234 678", false);
