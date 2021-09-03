const fish = { id: 58, name: 'king Hilsha', price: 9000, phone: '017555555555', address: 'chandpur', dress: 'silver' };

// const phone = fish.phone;
// const price = fish.price;
// const dress = fish.dress;
// const id = fish.id;

// const { phone, price, dress, id } = fish;
// console.log(phone, price);
// console.log(phone, dress);
// console.log(phone, id);

const company = {
    name: 'GP',
    ceo: { id: 1, name: 'Ajmol', food: 'fuska' },
    web: {
        work: 'website development',
        employee: 22,
        framwork: 'react',
        tech: {
            first: 'html',
            second: 'css',
            third: 'js'
        }
    },
};
// const work = company.web.work;
// const framwork = company.web.framwork;
const { work, framwork } = company.web;
const { food } = company.ceo;
const { second, third } = company.web.tech;
console.log(work, framwork, food, second, third);



