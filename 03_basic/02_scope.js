let a = 100;
//const b=20;
var c = 300;

if (true) {
    let a = 10;
    const b = 20;
    var c = 30;
    console.log(a);
}
console.log(a);
//console.log(b);
console.log(c);

function one() {
    const username = "kareena";
    function two() {
        const website = "youtube";
        console.log(username);
    }
    //console.log(website);
    two();
}
one();

if (true) {
    const username = "kareena";
    if (username === "kareena") {
        const website = " youtube";
        console.log(username + website);
    }
    //console.log(website);
}
//console.log(username);

//********** interesting*************
console.log(addOne(5));
function addOne(num) {
    return num + 1;
}
addOne(5);
//addTwo(5);
const addTwo = function (num) {
    return num + 2;
}
addTwo(5);