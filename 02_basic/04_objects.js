//const tinderUser = new Object();
const tinderUser ={}

tinderUser.id ="123abc";
tinderUser.name ="kareena";
tinderUser.isLoggedIn =false;
//console.log(tinderUser);

const regularUser ={
    email:"someone@gmail.com",
    fullname:{
        userfullname:{
            firstname :"kareena",
            lastname:"sahoo"
        }
    }
}
//console.log(regularUser.fullname?.userfullname);

const obj1 ={1:"a",2:"b"};
const obj2 ={3:"a",4:"b"};
const obj4 ={5:"a",6:"b"};

//const obj3={obj1,obj2};
//const obj3=Object.assign({},obj1,obj2,obj4);
const obj3 ={...obj1,...obj2};
console.log(obj3);

const users=[
    {
        id:1,
        email:"kareena@id.com"
    },
    {
        id:2,
        email:"karishma@id.com"
    }
]
users[1].id;
console.log(tinderUser);
console.log(Object.keys(tinderUser));
console.log(Object.keys(tinderUser));
console.log(Object.entries(tinderUser));

console.log(tinderUser.hasOwnProperty('isLoggedIn'));