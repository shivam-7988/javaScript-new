// Dates

let myDate = new Date()
console.log(myDate.toString());
console.log(myDate.toLocaleDateString());
console.log(myDate.toISOString());
console.log(myDate.toJSON());

let myCreatedDate = new Date(2026, 5, 1)
console.log(myCreatedDate.toDateString());

let newCreatedDate = new Date(2026, 5, 1, 5, 3)
console.log(newCreatedDate.toLocaleString());

myDate.toLocaleString('default', {
    weekday: "long"
})
