class Support {
    name;
    designation = 'support web Dev';
    address = 'BD';
    constructor(name, address) {
        this.name = name;
        this.address = address;
    }
    startSession() {
        console.log(this.name, 'start a support session');
    }
}

const aamir = new Support('Amir khan', 'BD');
const salman = new Support('solaiman khan', 'Dubai');
const sahrukh = new Support('SRK khan', 'Dubai');
const akshay = new Support('Akshay kumar', 'Dubai');

aamir.startSession();
salman.startSession();
console.log(aamir, salman, sahrukh, akshay);
// console.log(salman);