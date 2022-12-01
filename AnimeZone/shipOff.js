document.querySelector("form").addEventListener('submit', (e) =>{

    e.preventDefault();
    validate();
})

function nameV() {

    let fName = document.getElementById('name').value;
    const regExp = /^[A-Za-z ]{2,20}/;

    if (regExp.test(fName)) {
        return true;
    } else {
        alert('Enter valid Name!');
        return false;
    };
};

function emailV() {

    let email = document.getElementById('email').value;
    const regExp = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,6})/;
    
    if (regExp.test(email)) {
        return true;
    } else {
        alert('Enter valid Email!');
        return false;
    };
    
    };

function numberV() {

let number = document.getElementById('phone').value;
const regExp = /^\(?\d{3}\)?[-. ]?\d{3}[-. ]?\d{4}$/;

if (regExp.test(number)) {
    return true;
}
 else {
    alert('Enter valid Phone number')
    return false;
}

};

function addressV() {

    let address = document.getElementById('street_No').value;
    const regExp = /^[0-9]{2,4}( )[a-zA-Z]{2,20}( )[a-zA-Z]{2,8}$/

    if (regExp.test(address)) {
        return true;
    } else {
        alert('Enter Street number and name!');
        return false;
    };
};


function cityV() {

    let city = document.getElementById('city').value;
    const regExp = /^[A-Za-z ]{4,20}/;

    if (regExp.test(city)) {
        return true;
    } else {
        alert('Enter City name!');
        return false;
    };
};

function suburbV() {

    let sub = document.getElementById('suburb').value;
    const regExp = /^[A-Za-z ]{4,20}/;

    if (regExp.test(sub)) {
        return true;
    } else {
        alert('Enter Suburb Name!');
        return false;
    };
};

function zCodeV() {

    let code = document.getElementById('code').value;
    const regExp = /^[0-9]{4,6}/;

    if (regExp.test(code)) {
        return true;
    } else {
        alert('Enter ZIP code!');
        return false;
    };
};

function cardNameV() {

    let cName = document.getElementById('cardName').value;
    const regExp = /^[A-Za-z ]{4,20}/;

    if (regExp.test(cName)) {
        return true;
    } else {
        alert('Enter Card Name!');
        return false;
    };
};

function cardNumV() {

    let cNum = document.getElementById('creditCardNo').value;
    const regExp = /^[0-9]{4}( )[0-9]{4}( )[0-9]{4}( )[0-9]{4}/;

    if (regExp.test(cNum)) {
        return true;
    } else {
        alert('Enter Card Number!');
        return false;
    };
};

function cvv() {

    let CVV = document.getElementById('CVV').value;
    const regExp = /^[0-9]{3}/;

    if (regExp.test(CVV)) {
        return true;
    } else {
        alert('Enter CVV!');
        return false;
    };
};

function validate() {

    let name = nameV();
    let email = emailV();
    let num = numberV();
    let ad = addressV();
    let cit = cityV();
    let subb = suburbV();
    let zip = zCodeV();
    let card = cardNameV();
    let cardN = cardNumV();
    let cardCvv = cvv();

    if (name && email && num && ad && cit && subb && zip && card && cardN && cardCvv) {
        document.querySelector('form').submit();
        return true;
    } else{
        return false;
    }
}