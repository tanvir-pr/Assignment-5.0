// SHOW donation ans blog
document.getElementById('donationbtn')
.addEventListener('click',function(){
    suportrthistory('donationMainPage');
})
document.getElementById('historybtn')
.addEventListener('click',function(){
    donationHistory('historyMainPage');
})



// Clc donate and add  page 1

document.getElementById('addMoneyAmount1')
.addEventListener('click',function(){
    
    //  calculation math
    const addMoney1 = getInputFieldValueById('addMoney1');
    const amarBalance = getTextFieldValueById('myBalance');
    const balance1 = getTextFieldValueById('account-balance1');

if(isNaN(addMoney1)){
    alert('Failed to add money');
    return 0;
}
 else {
    if((addMoney1) <= 0){
        alert('Failed to add money');
        return;
    }
    else{

        const newBalance1 = balance1 + addMoney1;
        const newAmarBalance1 = amarBalance - addMoney1;
    
        document.getElementById('account-balance1').innerText = newBalance1;
        document.getElementById('myBalance').innerText = newAmarBalance1;
    
        // transcation history data
     
        const write = document.createElement('div');
        write.classList.add('bg-green-300','mt-2');
        write.innerHTML = `
        <p>${addMoney1} Taka is Donated for Donate for Flood at Nowakhaili,Bangladesh</p>
        `
        document.getElementById('historyMainPage').appendChild(write)
    
        const date = document.createElement('div');
        date.classList.add('bg-green-300');
        date.innerHTML = "Date : " + Date()
        document.getElementById('historyMainPage').appendChild(date)
        my_modal_5.showModal()
    }
}

   

})









// if('historybtn' === true){


// }