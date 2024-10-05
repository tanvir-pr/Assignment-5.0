// Clc donate and add  page 3

document.getElementById('addMoneyAmount3')
.addEventListener('click',function(){
    
    //  calculation math
    const addMoney3 = getInputFieldValueById('addMoney3');
    const amarBalance = getTextFieldValueById('myBalance');
    const balance3 = getTextFieldValueById('account-balance3');
    if(isNaN(addMoney3)){
        alert('Failed to add money');
        return;
    }
    if((addMoney3) <= 0){
        alert('Failed to add money');
        return;
    }
    const newBalance3 = balance3 + addMoney3;
    const newAmarBalance1 = amarBalance - addMoney3;

    document.getElementById('account-balance3').innerText = newBalance3;
    document.getElementById('myBalance').innerText = newAmarBalance1;

    
    // transcation history data
 
    const write = document.createElement('div');
    write.classList.add('bg-gray-300');
    write.innerHTML = `
    <p>${addMoney3} Taka is Donated for Aid for Injured in the Quota Movement</p>
    `
    document.getElementById('historyMainPage').appendChild(write)

    const date = document.createElement('div');
    date.classList.add('bg-gray-300');
    date.innerHTML = "Date : " + Date()
    document.getElementById('historyMainPage').appendChild(date)

})