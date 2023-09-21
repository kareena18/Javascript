//if
const isUserLoggedIn = true;
if(2==="2")
    console.log("equal");
else
    console.log("not equal");

let temp=65;
if(temp==41)
    console.log("temperature is 41");
else
    console.log("temperature is not 41");

const score =200;
if(score>100){
    const power = "fly";
    console.log(`User power: ${power}`);
}
//console.log(`User power: ${power}`);

const balance =1000;
//if(balance>500) console.log("test");
if(balance<500)
    console.log("less than 500");
else if(balance<750)
    console.log("less than 750");
else if(balance<900)
    console.log("less than 900");
else
    console.log("less than 1200");

const userLoggedIn = true;
const debitCard = true;
const loggedInFromGoogle = false;
const loggedInFromEmail = true;
if(userLoggedIn && debitCard && 3==3)
    console.log("Allow to buy the course");
if(loggedInFromGoogle||loggedInFromEmail)
    console.log("User Logged in");