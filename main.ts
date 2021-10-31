//form
const form = document.querySelector('#form') as HTMLFormElement;
//dropdown
const dropDown = document.querySelector('#dropDown') as HTMLSelectElement;
//toFrom
const toFrom = document.querySelector('#toFrom') as HTMLInputElement;
//amount
const amount = document.querySelector('#amount') as HTMLInputElement;
//details
const details = document.querySelector('#details') as HTMLInputElement;
//button
const submit = document.querySelector('button') as HTMLButtonElement;
//submit-form
const submitForm = document.querySelector('#submit-form');
//output
const ulOutput = document.querySelector('.ul-output') as HTMLUListElement;
/**
 * output details
 */
// const typ = document.querySelector('#type') as HTMLSpanElement;
// const fro = document.querySelector('#from') as HTMLSpanElement;
// const detai = document.querySelector('#details') as HTMLSpanElement;
// const amoun = document.querySelector('#amount') as HTMLSpanElement;



//array container classes
let listInvoices: PaymentInterface[];

//interface
interface PaymentInterface {
    dropDown: string,
    toFrom: string,
    amount: string,
    details: string
}

//class payments
class Payment implements PaymentInterface {
    dropDown: string;
    toFrom: string;
    amount: string;
    details: string;
    constructor(dropDown: string, toFrom: string, amount: string, details: string) {
        this.dropDown = dropDown;
        this.toFrom = toFrom;
        this.amount = amount;
        this.details = details;
    }
}

class Invoice implements PaymentInterface {
    dropDown: string;
    toFrom: string;
    amount: string;
    details: string;
    constructor(dropDown: string, toFrom: string, amount: string, details: string) {
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
    constructor(public ul: HTMLUListElement) {

    }

    renderList(a: PaymentInterface): void {
        //#1 create li
        const li = document.createElement('li') as HTMLLIElement;
        //#2 append
        //render

        //value of the form assigned to variable
        const type = document.createElement('h4') as HTMLHeadElement;
        type.innerText = ` ${a.dropDown} `;

        const from = document.createElement('span') as HTMLSpanElement;
        from.innerText = ` to/from: ${a.toFrom} `;

        const amount = document.createElement('span') as HTMLSpanElement;
        amount.innerText = ` of $ ${a.amount}. `;

        const details = document.createElement('span') as HTMLSpanElement;
        details.innerText = `Details: ${a.details}`;

        if (a.dropDown == 'invoice') {
            li.classList.add('li-invoice');
        } else {
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
form.addEventListener('submit', (e: Event) => {
    e.preventDefault();
    console.log('submitted');
    // console.log(dropDown.value, toFrom.value, amount.value, details.value);

    //empty variable for payment
    let payment: PaymentInterface;

    if (amount.value != '' && toFrom.value != '' && details.value != '') {
        if (dropDown.value === 'payment') {
            //instantiate new payment class
            payment = new Payment(dropDown.value, toFrom.value, amount.value, details.value);
            console.log(payment);


            const ulList = new Ul(ulOutput);
            ulList.renderList(payment)

            form.reset()

        } else {
            //instantiate new payment class
            payment = new Invoice(dropDown.value, toFrom.value, amount.value, details.value);
            console.log(payment);


            const ulList = new Ul(ulOutput);
            ulList.renderList(payment)

            form.reset()
        }
    } else {
        alert('riempire i campi prima di inoltrare la richiesta! ')
    }




})



//class remove li
class Remove {
    constructor(public ul: HTMLUListElement) {

    }

    removeLi() {
        this.ul.addEventListener('click', (e: Event): void => {
            // console.log(e.target);
            // this.ul.removeChild(e.target);


        })
    }
}

const removeLis = new Remove(ulOutput);
removeLis.removeLi();