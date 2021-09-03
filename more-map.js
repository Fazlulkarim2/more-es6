const friends = ['Tom Hanks', 'Tom Cruise', 'Tom Brady', 'Tom solaiman'];

const fLength = friends.map(friend => friend.length);
// console.log(fLength);

const products = [
    { name: 'water bottle', price: 50, color: 'yellow' },
    { name: 'Mobile phone', price: 15000, color: 'Black' },
    { name: 'Smart watch', price: 3000, color: 'Black' },
    { name: 'sticky node', price: 30, color: 'pink' },
    { name: 'water glass', price: 3, color: 'white' },
];

const productNames = products.map(product => product.name);
console.log(productNames);

const productPrices = products.map(product => product.price);
console.log(productPrices);

products.map(product => console.log(product));
products.forEach(product => console.log(product));