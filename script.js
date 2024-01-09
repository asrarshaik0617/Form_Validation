const btn = document.getElementById('button');
const names = document.getElementById('namevalue');
const nameerror = document.getElementById('nameerror');

// validname

function validname() {
    const name = names.value;
    if (name.length == 0) {
        nameerror.innerHTML = 'Name Is Required !';
        btn.disable = true;
        return false;
    }
    if (!name.match(/^[A-Za-z]{3,10}[\s][A-Za-z]{3,12}$/)) {
        names.style.borderColor='red'
        nameerror.innerHTML = 'Enter Your Full Name'
        btn.disable= true;
        return false;
    }
    nameerror.innerHTML = `<i class='bx bx-check-circle'></i>`
    names.style.borderColor='green'
    btn.disable = false;
    return false;
}
names.addEventListener('keyup', validname);
names.addEventListener('blur', validname);

// validcontact

const contact = document.getElementById('numbervalue');
const contacterror = document.getElementById('numbererror');

function validcontact() {
    const number = contact.value;
    if (number.length == 0) {
        contacterror.innerHTML = 'Contact Is Required !'
        btn.disable = true
        return false;
    }
    if(!number.match(/^[6,7,8,9]{1}[0-9]{9}$/)){
        contacterror.innerHTML='Enter Your Valid Number'
       contact.style.borderColor=`red`
        btn.disable=true;
        return false;
    }
    contacterror.innerHTML = `<i class='bx bx-check-circle'></i>`
    contact.style.borderColor=`green`
    btn.disable = true;
    return false;
}
contact.addEventListener('keyup', validcontact);
contact.addEventListener('blur', validcontact);

// emailvalid

const email = document.getElementById('emailvalue');
const emailerror = document.getElementById('emailerror');

function validemail() {
    const emails = email.value
    if (email.value == 0) {
        emailerror.innerHTML = 'Email Is Required !'
        btn.disable = true;
        return false;
    }
    if(!emails.match(/^[A-Za-z0-9\.\_\-]+[\@][a-z]+[\.][a-z]{2,4}$/)){
        emailerror.innerHTML='Enter Your Valid Email'
        email.style.borderColor='red'
        btn.disable=true;
        return false;

    }
    emailerror.innerHTML = `<i class='bx bx-check-circle'></i>`
    email.style.borderColor='green'
    btn.disable = false;
    return false;
}
email.addEventListener('keyup', validemail);
email.addEventListener('blur', validemail);

// validingID

const id = document.getElementById('idvalue');
const iderror = document.getElementById('iderror');

function validid() {
    const ide = id.value
    if (ide.length == 0) {
        iderror.innerHTML = 'Id Is Required !'
        btn.disable = true;
        return false;
    }
    if(!ide.match(/^[0-9]{2}[A-Z]{1}[0-9]{2}[A-Z]{1}[0-9]{4,}$/)){
        iderror.innerHTML='Enter Your Id-Number'
        id.style.borderColor='red';
        btn.disable=true;
        return false
    }
    iderror.innerHTML = `<i class='bx bx-check-circle'></i>`
    id.style.borderColor="green";
    btn.disable = false;
    return true;
}
id.addEventListener('keyup', validid);
id.addEventListener('blur', validid);