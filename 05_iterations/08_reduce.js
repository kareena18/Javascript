const myNum = [1, 2, 3, 4, 5];
const myTotal = myNum.reduce(function (acc, currval) {
    console.log(`acc:${acc} and currval:${currval}`);
    return acc + currval;
}, 0)
console.log(myTotal);

const total = myNum.reduce((acc, curr) => acc + curr, 0);
console.log(total);

const shoppingCart = [
    {
        itemName: "mobile dev course",
        price: 999
    },
    {
        itemName: "webdev course",
        price: 2999
    },
    {
        itemName: "ui-ux course",
        price: 999
    }
]
const priceToPay = shoppingCart.reduce((acc, item) => acc + item.price, 0);
console.log(priceToPay);