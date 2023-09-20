function sayMyFunction(){
    console.log("K");
    console.log("A");
    console.log("R");
    console.log("E");
    console.log("E");
    console.log("N");
    console.log("A");
}
//sayMyFunction();

function addTwoNumbers(num1,num2){
    console.log(num1+num2);
}
function addTwoNum(num1,num2){
    return num1+num2;
    console.log("kareena");
}
addTwoNumbers(1,"a");
 const result = addTwoNum(1,4);
addTwoNumbers(1,null);

console.log("result:",result);

function logInUserMessage(userName="sam"){
    if(userName===undefined){
        console.log("please enter a username");
        return;
    }
    return `${userName} just logged in `;
}
console.log(logInUserMessage("kareena"));
console.log(logInUserMessage());

function calculateCarPrice(val1,val2,...num1){
    return num1;
}
console.log(calculateCarPrice(200));
console.log(calculateCarPrice(200,400,500,2000));

const user1={
    username:"kareena",
    price:100
}
function handleObject(anyObject){
    console.log(`useername is ${anyObject.username} and price is ${anyObject.price}`);
}
handleObject(user1);
handleObject({
    username:"sam",
    price:399
})
const myNewArray=[200,400,100,600];
function returnSecondValue(getArray){
    return getArray[1];
}
console.log(returnSecondValue(myNewArray));