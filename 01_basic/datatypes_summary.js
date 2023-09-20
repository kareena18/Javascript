//Primitive
//7 types: string, number, boolean, null, undefined, symbol, bigint 

const score = 100
const scoreValue = 100.3
const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')
console.log(id === anotherId);

const bigNumber = 23897865654564158789n

//Reference (Non Primitive)
//Array, Objects, Functions
const heros = ["shaktiman", "naagraj", "doga"];
let myObj = {
    person_name: "kareena",
    age: 21
}
const myFunction = function () {
    console.log("hello world");
}
console.log(typeof score)
console.log(typeof scoreValue)
console.log(typeof isLoggedIn)
console.log(typeof outsideTemp)
console.log(typeof userEmail)
console.log(typeof id)
console.log(typeof bigNumber)

console.log(typeof heros)
console.log(typeof myObj)
console.log(typeof myFunction)


// stack(primitive) heap(non primitive)
let myName = "kareena"
let anotherName = myName;
anotherName = "karishma"
console.log(anotherName)
console.log(myName)

let user = {
    email: "user@google.com",
    age: 20
}
let userTwo = user;
userTwo.email = "userTwo@google.com"
console.log(user.email)
console.log(userTwo.email)