const marvel_heros = ["thar", "ironman", "spiderman"];
const dc_heros = ["superman", "flash", "batman"];

//marvel_heros.push(dc_heros);
//console.log(marvel_heros);
//console.log(marvel_heros[3][1]);

//const allHeros = marvel_heros.concat(dc_heros);
//console.log(allHeros);

const allNewHeros = [...marvel_heros, ...dc_heros];
console.log(allNewHeros);

const anotherArray = [1, 2, , 3, 4, 5, 6, 7, [6, 7, [4, 5]]];

const realAnotherArray = anotherArray.flat(Infinity);
console.log(realAnotherArray);

console.log(Array.isArray("kareena"));
console.log(Array.from("kareena"));
console.log(Array.from({ name: "kareena" }));

let score1 = 100;
let score2 = 200;
let score3 = 300;
console.log(Array.of(score1, score2, score3));