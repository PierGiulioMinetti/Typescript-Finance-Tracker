"use strict";
//form
const form = document.querySelector('#form');
//dropdown
const dropDown = document.querySelector('#dropDown');
//toFrom
const toFrom = document.querySelector('#toFrom');
//amount
const amount = document.querySelector('#amount');
//details
const details = document.querySelector('#details');
//button
const submit = document.querySelector('button');
//submit-form
const submitForm = document.querySelector('#submit-form');
//output
const ulOutput = document.querySelector('.ul-output');
/**
 * output details
 */
// const typ = document.querySelector('#type') as HTMLSpanElement;
// const fro = document.querySelector('#from') as HTMLSpanElement;
// const detai = document.querySelector('#details') as HTMLSpanElement;
// const amoun = document.querySelector('#amount') as HTMLSpanElement;
//array container classes
let listInvoices;
//class payments
class Payment {
    constructor(dropDown, toFrom, amount, details) {
        this.dropDown = dropDown;
        this.toFrom = toFrom;
        this.amount = amount;
        this.details = details;
    }
}
class Invoice {
    constructor(dropDown, toFrom, amount, details) {
        this.dropDown = dropDown;
        this.toFrom = toFrom;
        this.amount = amount;
        this.details = details;
    }
}
/**
 *  take output tag and inject the class
 * append or prepend to ul
 */
//class ul
class Ul {
    constructor(ul) {
        this.ul = ul;
    }
    renderList(a) {
        //#1 create li
        const li = document.createElement('li');
        //#2 append
        //render
        //value of the form assigned to variable
        const type = document.createElement('h4');
        type.innerText = ` ${a.dropDown} `;
        const from = document.createElement('span');
        from.innerText = ` to/from: ${a.toFrom} `;
        const amount = document.createElement('span');
        amount.innerText = ` of $ ${a.amount}. `;
        const details = document.createElement('span');
        details.innerText = `Details: ${a.details}`;
        if (a.dropDown == 'invoice') {
            li.classList.add('li-invoice');
        }
        else {
            li.classList.add('li-payment');
        }
        li.append(type);
        li.append(from);
        li.append(amount);
        li.append(details);
        this.ul.append(li);
    }
}
//way#1  --> get value with custom button
// submit.addEventListener('click', function (e: Event) {
//     e.preventDefault();
//     console.log('clicked');
//     console.log(dropDown.value);
// });
//way#2 --> submit form with input and event submit
form.addEventListener('submit', (e) => {
    e.preventDefault();
    console.log('submitted');
    // console.log(dropDown.value, toFrom.value, amount.value, details.value);
    //empty variable for payment
    let payment;
    if (amount.value != '' && toFrom.value != '' && details.value != '') {
        if (dropDown.value === 'payment') {
            //instantiate new payment class
            payment = new Payment(dropDown.value, toFrom.value, amount.value, details.value);
            console.log(payment);
            const ulList = new Ul(ulOutput);
            ulList.renderList(payment);
            form.reset();
        }
        else {
            //instantiate new payment class
            payment = new Invoice(dropDown.value, toFrom.value, amount.value, details.value);
            console.log(payment);
            const ulList = new Ul(ulOutput);
            ulList.renderList(payment);
            form.reset();
        }
    }
    else {
        alert('riempire i campi prima di inoltrare la richiesta! ');
    }
});
//class remove li
class Remove {
    constructor(ul) {
        this.ul = ul;
    }
    removeLi() {
        this.ul.addEventListener('click', (e) => {
            // console.log(e.target);
            // this.ul.removeChild(e.target);
        });
    }
}
const removeLis = new Remove(ulOutput);
removeLis.removeLi();
