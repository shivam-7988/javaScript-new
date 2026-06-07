// singleton

// object literals

//Object.create 

const mySym = Symbol("Key1")




const JsUser = {
    name: "Shivam",
    "full Name": "Shivam Hans",
    [mySym] : "myKey1",
    age: 18,
    location: "jaipur",
    email: "shivam@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

console.log(JsUser.email);
console.log(JsUser["email"]);
console.log(JsUser["full Name"]);
console.log(typeof JsUser[mySym]);

JsUser.email = "newmail@gmail.com"
// Object.freeze(JsUser)  // after this values can not change


JsUser.greeting = function(){
    console.log("Hello JS user");
    
}

JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);
    
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());


