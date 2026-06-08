// const tinderUser = new Object() // singleton object
// const tinderUser = {} // nonsingleton object

// tinderUser.id = "123abc"
// tinderUser.name = "Sammy"
// tinderUser.isloggedIn = false


// console.log(tinderUser);

const regularUser = {
    email: "someemail@gmail.com",
    fullName: {
        userFullName: {
            firstName: "Shivam",
            lastName: "Hans"
        }
    }
}


// console.log(regularUser.fullName.userFullName.firstName);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}

const obj3 = { obj1, obj2 }
console.log(obj3); 

obj4 = 3

