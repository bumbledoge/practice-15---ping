let bad = " ,)(*&^%$#!?";

function isCorrect (c) {
    // console.log(c);
    let at = c.indexOf('@') === -1;
    let da = c.split("").every(checkChar);
    
    return (da && !at);
}
function checkChar(e) {
    return bad.indexOf(e) === -1 ? 1 : 0
}

export default isCorrect 

// let display = document.querySelector('.title');
// let check = document.querySelector('.check');
// function isGood(c) {
//     display.innerHTML = c;
//     check.innerHTML = 'corect';
//     check.style.color = "green";
// }
// function isBad(c) {
//     display.innerHTML = c;
//     check.innerHTML = 'gresit';
//     check.style.color = "red";
// }