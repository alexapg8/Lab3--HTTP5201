//LAB 3 - UNIT TESTING
//======== THIS FILE IS FOR THE checkHumbrId FUNCTION ==========
// alert("lab 3 Function");//please delete this line once connected.
/** checkHumbrId Function
 * Validate input as a Humber College Student number.
 * Returns true if input validates.
 * @param {string} idIn
 */
function checkHumbrId(humberIn) {
    "use strict";
    var RegExHumberId = /^(n|N)\d{8}/;

    var validHumbrId = false;
    if (RegExHumberId.test(humberIn)) {
        validHumbrId = true;
    }
    return validHumbrId;
}
