// Primitive

// 7 types : String, Number, Boolean, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outSideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

const bigInt = 237207437626372n



// Reference (Non Primitive)

// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"]

let myObj = {
    fullName : "Shivam Hans",
    age : 19
}

const myFunction = function(){
    console.log("Hello world");  
}

console.log(typeof heros)


// -----------------------Memory-------------------------

// Stack (Primitive), Heap (Non-Primitive)

let myYoutubeName = "shivamhans.com"

let anotherName = myYoutubeName
anotherName = "chaiaurcode"


console.log(anotherName);  // chaiaurcode
console.log(myYoutubeName); // shivamhans.com

let user = {
    email: "user@gmail.com",
    upi: "user@ybl"
}

let userTwo = user

userTwo.email = "shivam@google.com"

console.log(user.email)
console.log(userTwo.email);


// Stack => orginal value does't change
// Heap => orginal value changed

