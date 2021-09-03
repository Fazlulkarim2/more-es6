const numbers = [5, 13, 7, 41, 29, 79, 30, 5, 2, 19];
const bigNumbers = numbers.filter(number => number > 20);
console.log(bigNumbers);
const smallNumbers = numbers.filter(number => number < 10);
// console.log(smallNumbers)

const products = [
    { name: 'water bottle', price: 50, color: 'yellow' },
    { name: 'Mobile phone', price: 15000, color: 'Black' },
    { name: 'Smart watch', price: 3000, color: 'Black' },
    { name: 'sticky node', price: 30, color: 'pink' },
    { name: 'water glass', price: 3, color: 'white' },
];

const expensive = products.filter(product => product.price > 100);
console.log(expensive);

// const blacks = products.filter(product => product.color == 'Black');
// console.log(blacks);
const blues = products.filter(product => product.color == 'blue');
// console.log(blues);


const whitItem = products.find(product => product.color == 'pink');
console.log(whitItem);


