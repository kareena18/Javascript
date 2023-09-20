//immediately invoked function expression(iife)

(function chai() {
    //named iife
    console.log('db connected');
})();

((name) => {
    console.log(`db ${name}`);
})('kareena');