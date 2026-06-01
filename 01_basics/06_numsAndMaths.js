const score = 400
console.log(score);


const balance = new Number(1000)
console.log(balance);

console.log(balance.toString().length);
console.log(balance.toFixed(2));

const otherNumber = 23.6832
console.log(otherNumber.toPrecision(3));

const zeros = 1000000
console.log(zeros.toLocaleString('en-IN'));


// -----------------------Maths----------------------------

console.log(Math);

console.log(Math.abs(-4)); // 4
console.log(Math.round(4.4)) // 4
console.log(Math.ceil(4.2)); // 5
console.log(Math.floor(4.9)); // 4
console.log(Math.min(4,6,2,1,7,8,4,6,9)); // 1
console.log(Math.max(4,6,2,1,7,8,4,6,9)); // 9

console.log((Math.random()*10) + 1);

const min = 1
const max = 6

console.log(Math.floor(Math.random() * (max - min + 1) + min));









