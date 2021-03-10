import isCorrect from './emailCheck.js'



let submitBton = document.querySelector('.email');

submitBton.addEventListener('submit', (e)=> {
    e.preventDefault();
    console.log('merge');
    
    let email = document.querySelector('.adress').value;
    let casuta = document.querySelector('.adress');
    let tryAgain = document.querySelector('.wrong');
    
    if(isCorrect(email) == false) 
    {
        casuta.style.border = "1px solid red";
        document.querySelector('.adress').value = "";
        tryAgain.style.opacity = 1;
    } 
    else {
        casuta.style.border = "1px solid green";
        document.querySelector('.adress').value = "Thank You!";
        tryAgain.style.opacity = 0;
    }
})