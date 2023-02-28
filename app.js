const button = document.querySelector('button');
const close = document.querySelector('.cross');
const popup = document.querySelector('.popup-wrapper');

const form = document.querySelector('.sum-form');
const sumNum = document.querySelector('.sum');
const regEx = /^[0-9]{0,}$/

button.addEventListener('click', () => {
    popup.style.display = 'block';
});

close.addEventListener('click', () => {
    popup.style.display = 'none';
});

form.addEventListener('submit', e =>{
    e.preventDefault();
    const firstNum = form.firstNum.value;
    const secondNum = form.secondNum.value;
    if(Number(firstNum) === 0 || Number(secondNum) === 0){
        sumNum.innerHTML = `Please enter both numbers and numbers should be greater than zero`; 
    } 
    else if(regEx.test(firstNum) && regEx.test(secondNum)){
        const sum = Number(firstNum) + Number(secondNum);
        sumNum.innerHTML = `${firstNum} + ${secondNum} = ${sum}`;
    } 
    else {
        sumNum.innerHTML = `Not a number`;
    }

});