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
