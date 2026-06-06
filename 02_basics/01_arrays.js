// Array

const myArr = [1,2,3,4,5]
const myHeros = ["shaktiman", "naagraj", "batman"]

const myArr2 = new Array(1,2,3,4,5)
console.log(myArr[1]);

// ----------------Array Methods------------------------

// myArr.push(6)
// myArr.push(7)
// myArr.pop()
// myArr.unshift(9)

// console.log(myArr.includes(9));
// console.log(myArr.indexOf(5));

// const newArr = myArr.join()
// console.log(myArr);

// console.log(typeof(newArr));

// ------------------Slice, Splice---------------------------

// console.log("A" , myArr);
// const myn1 = myArr.slice(1,3)

// console.log(myn1);
// console.log("B" , myArr);

const myArr4 = [0,1,2,3,4,5,6]
console.log("C" , myArr4.splice(1,4));
console.log(myArr4);

const marvel_heros = ["hero1", "hero2", "hero3"]
const dc_heros = ["hero4", "hero5", "hero6"]

const all_new_heros = [...marvel_heros, ...dc_heros]

console.log(all_new_heros);


const anotherArray = [1,2,3,[4,5,6,],7,[6,7,[4,5]]]

const realAnotherArray = anotherArray.flat(Infinity)
console.log(realAnotherArray)

console.log(Array.isArray("Shivam"))
console.log(Array.from("Shivam"))
console.log(Array.from({name: "hitesh"})) // interesting

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));










