// singleton
//object.create

//object literals
const jsUser ={
    name: "kareena",
    "full name": "kareena sahoo",
    //[mySym]:"key12",
    age:21,
    location: "rourkela",
    email: "kareena@google.com",
    isLoggedIn: false,
    lastLoginDays: ["monday","saturday"]
}
console.log(jsUser.email);
console.log(jsUser["email"]);
console.log(jsUser["full name"]);
//console.log(jsUser[mySym]);

jsUser.email="kareena@is.com";
//Object.freeze(jsUser);
jsUser.email="kareena@micro.com";
console.log(jsUser);

jsUser.greeting1 = function(){
    console.log(`hello`);
}
jsUser.greeting2 = function(){
    console.log(`hello,${this.name}`);
}
console.log(jsUser.greeting1());
console.log(jsUser.greeting2());