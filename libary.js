// common share function value
function getInputFieldValueById(id){
    const inputValue = document.getElementById(id).value;
    const inputNumber = parseFloat(inputValue);

    return inputNumber;
}
// common share function innerText
function getTextFieldValueById(id){
    const textValue = document.getElementById(id).innerText;
    const textNumber = parseFloat(textValue);

    return textNumber;
}




// var boundary = document.getElementById('boundary');
// var mouseOverFunction = function () {
//     // this.style.color = '#000'; // your colour change
// };
// boundary.onmouseover = mouseOverFunction;

// const historyBtn = document.getElementById('historyMainPage');
// const donateBtn = document.getElementById('donationbtn');

// const historyBtn = document.getElementById('historybtn');
// mouseOverFunction1 = function () {
//     this.style.color = '#B22222';
// };
// historyBtn.onmouseover = mouseOverFunction1;




const colorbtn = document.getElementsByClassName('colorBtn')
for(const btn of colorbtn){
    btn.addEventListener('click',function(){
       colorbtn[0].style.backgroundColor = ''
       colorbtn[1].style.backgroundColor = ''
       btn.style.backgroundColor = '#52cf20'
    })
}

// show donation and history  

function donationHistory(id){
    const history = document.getElementById('historyMainPage');
    const donation = document.getElementById('donationMainPage');

    history.classList.add('block');
    history.classList.remove('hidden');
    donation.classList.add('hidden')

}
// donation
function suportrthistory(id){
    const history = document.getElementById('historyMainPage');
    const donation = document.getElementById('donationMainPage');

    history.classList.remove('block');
    history.classList.add('hidden');
    donation.classList.add('block')
    donation.classList.remove('hidden')
}

   

