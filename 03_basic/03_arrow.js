const user = {
    username: "kareena",
    price: 999,
    welcomeMessage: function () {
        console.log(`${this.username},welcome to website`);
    }
}
user.welcomeMessage();
user.username = "sam";
user.welcomeMessage();

console.log(user);
console.log(this);

function chai() {
    let username = "kareena";
    console.log(this);
    console.log(this.username);
}
chai();

const chai1 = function () {
    let username = "kareena";
    console.log(this.username);
}
chai1();

const chai2 = () => {
    let username = "kareena";
    console.log(this);
}
chai2();

//explicit
const addTwoNum = (num1, num2) => {
    return num1 + num2;
}
console.log(addTwoNum(3, 4));
//implicit
const addTwoNum1 = (num1, num2) => (num1 + num2)
console.log(addTwoNum(3, 7));

//const myArr=[1,2,3,4,5,6];
//myArr=foreach()