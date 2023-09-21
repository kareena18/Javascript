const coding = ["js", "ruby", "java", "python", "cpp"];
/*const value = coding.forEach((item)=>{
    //console.log(item);
    return item;
})
console.log(value);*/

const myNum = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const newNum = myNum.filter((num) => {
    return num > 4
});

const newNumber = []
myNum.forEach((num) => {
    if (num > 4) {
        newNumber.push(num);
    }
})
console.log(newNum);
console.log(newNumber);

const books = [
    { title: 'book one', genre: 'fiction', publish: '1990' },
    { title: 'book two', genre: 'history', publish: '2015' },
    { title: 'book three', genre: 'science', publish: '1790' },
    { title: 'book four', genre: 'history', publish: '1890' },
    { title: 'book five', genre: 'fiction', publish: '2010' },
]
//const userbook = books.filter((bk)=> bk.genre==="history");
const userbook = books.filter((bk) => {
    return bk.publish > 2000 && bk.genre === "history";
});
console.log(userbook);