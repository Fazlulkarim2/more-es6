class Teammember {
    name;
    address = 'BD';
    constructor(name, address) {
        this.name = name;
        this.address = address;
    }
}

class Support extends Teammember {
    groupSupportTime;
    designation = 'support web Dev';
    constructor(name, address, time) {
        super(name, address);
        this.groupSupportTime = time;
    }
    startSession() {
        console.log(this.name, 'start a support session');
    }
}

class StudentCare extends Teammember {

    designation = 'care web Dev';
    buildARoutine(student) {
        console.log(this.name, 'Build a routine for', student)
    }
}

class NeptuneDev extends Teammember {
    codeEditor;
    designation = 'neptune App web Dev';
    constructor(name, address, editor) {
        super(name, address)
        this.codeEditor = editor;
    }
    releaseApp(version) {
        console.log(this.name, 'release app version', version);
    }
}

const aamir = new Support('Amir khan', 'BD', 11);
const salman = new Support('solaiman khan', 'Dubai', 4);
const sahrukh = new Support('SRK khan', 'Dubai', 9);
const akshay = new Support('Akshay kumar', 'Dubai', 11);

const alia = new StudentCare('Alia Bhatt', 'Mumbai');
const ash = new NeptuneDev('Ash', 'Mumbai', 'Android studio');
ash.releaseApp('1.4.5');

console.log(ash.name);


const nums = [1, 2, 3, 4, 5];
let output = nums.filter(n => n % 2);
console.log(output);