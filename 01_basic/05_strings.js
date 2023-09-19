const name ="kareena";
const repocount =10;
console.log(name+repocount+" value");
console.log(`My name is ${name} and my repocount is ${repocount}`);

const gameName = new String('kareena');
console.log(gameName[0]);
console.log(gameName.__proto__);

console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(4));
console.log(gameName.indexOf('a'));

const newString = gameName.substring(0,4);
console.log(newString);

const anotherString = gameName.slice(-6,4);
console.log(anotherString);

const newString1 ="       kareena       ";
console.log(newString1);
console.log(newString1.trim());

const url ="https://kareena.com/kareena%20sahoo";
console.log(url.replace('%20','-'));

console.log(url.includes('kareen'));

console.log(gameName.split('r'));
