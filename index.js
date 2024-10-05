// function return1()
//             {
//                 window.location.href = 'index.html';
//             }
        //  page change 
        // document.getElementById('blog-1')
        // .addEventListener('click', function (){ 
        
        // window.location.replace("./index1.html");
        // })
        // document.getElementById('home-1')
        // .addEventListener('click', function (){ 
        
        //     window.location.replace("./index.html");
        // })   
// Clc donate and add

document.getElementById('addMoneyAmount')
.addEventListener('click',function(event){
    event.preventDefault();
     
    const addMoney1 = getInputFieldValueById('addMoney1');
    const amarBalance = getTextFieldValueById('myBalance');
    const balance1 = getTextFieldValueById('account-balance1');

    const newBalance1 = balance1 + addMoney1;
    const newAmarBalance1 = amarBalance - addMoney1;

    document.getElementById('account-balance1').innerText = newBalance1;
    document.getElementById('myBalance').innerText = newAmarBalance1;

    // transcation
    // const p = document.createElement('p');
    // p.innerText = `Added: ${addMoney1} TK. Balance: ${newAmarBalance1}`;
    // console.log(p);

    const div = document.createElement('div');
    div.classList.add('bg-yello-300');
    div.innerHTML = `
    <h4 class="text-2xl font-bold">Cash out</h4>
    <p>${balance1} withdraw. New Balance ${newAmarBalance1}</p>
    `
    document.getElementById('historyMainPage').appendChild(div)
})

// SHOW donation ans blog
document.getElementById('donationbtn')
.addEventListener('click',function(){
    donationHistory('donationMainPage');
})
document.getElementById('historybtn')
.addEventListener('click',function(){
    donationHistory('historyMainPage');
})