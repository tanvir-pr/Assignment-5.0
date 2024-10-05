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

// show blog and from
function donationHistory(id){
    document.getElementById('historyMainPage').classList.add('hidden');
    document.getElementById('donationMainPage').classList.add('hidden');
    console.log('hi')

    document.getElementById('id').classList.remove('hidden');
    console.log('hi');
}