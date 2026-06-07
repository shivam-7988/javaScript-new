// singleton

// object literals

//Object.create 
const JsUser = {
    name: "Shivam",
    "full Name": "Shivam Hans",
    age: 18,
    location: "jaipur",
    email: "shivam@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

console.log(JsUser.email);
console.log(JsUser["email"]);
console.log(JsUser["full Name"]);

