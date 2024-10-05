// Clc donate and add  page 2

document.getElementById('addMoneyAmount2')
.addEventListener('click',function(){
    
    //  calculation math
    const addMoney2 = getInputFieldValueById('addMoney2');
    const amarBalance = getTextFieldValueById('myBalance');
    const balance2 = getTextFieldValueById('account-balance2');

    if(isNaN(addMoney2)){
        alert('Failed to add money');
        return;
    }
    if((addMoney2) <= 0){
        alert('Failed to add money');
        return;
    }
    const newBalance2 = balance2 + addMoney2;
    const newAmarBalance1 = amarBalance - addMoney2;

    document.getElementById('account-balance2').innerText = newBalance2;
    document.getElementById('myBalance').innerText = newAmarBalance1;

    // transcation history data
 
    const write = document.createElement('div');
    write.classList.add('bg-blue-300','mt-2');
    write.innerHTML = `
    <p>${addMoney2} Taka is Donated for Donate for Flood Relief in Feni,Bangladesh</p>
    `
    document.getElementById('historyMainPage').appendChild(write)

    const date = document.createElement('div');
    date.classList.add('bg-blue-300');
    date.innerHTML = "Date : " + Date()
    document.getElementById('historyMainPage').appendChild(date)
    my_modal_5.showModal()

})