const submitBtn = document.getElementById("submitBtn");
const loginPage = document.getElementById('loginPage');
const profilePage = document.getElementById('profilePage');


submitBtn.addEventListener("click", function () {
    login();
});


function login() {
    loginPage.style.display = 'none';
    profilePage.style.display = 'block'
    const email = document.getElementById('email').value;
    document.getElementById('userEmail').innerText=email;
}


// Depsoit button event handler
const depositBtn = document.getElementById('depositBtn');
depositBtn.addEventListener('click', function(){
    const depositeAmount = getInputNumber("depositeAmount");

    updateValue("depo-balance", depositeAmount);
    updateValue("tot-balance", depositeAmount);

    document.getElementById('depositeAmount').value = '';
})


// Withdraw button event handler
const withdrawBtn = document.getElementById('withdrawBtn');
withdrawBtn.addEventListener('click', function(){
    const withdrawAmount = getInputNumber('withdrawAmount');

    updateValue('withdraw-balance', withdrawAmount);
    updateValue('tot-balance', -1 * withdrawAmount);

    document.getElementById('withdrawAmount').value = "";
})

function getInputNumber(id){
    const amount = document.getElementById(id).value;
    const amountNumber = parseFloat(amount);
    return amountNumber;
}

function updateValue(id, amountNumber){
    const current = document.getElementById(id).innerText;
    const currentValue = parseFloat(current);
    const totalAmount = amountNumber + currentValue;
    document.getElementById(id).innerText = totalAmount;
}
