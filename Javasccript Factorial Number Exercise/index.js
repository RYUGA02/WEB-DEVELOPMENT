// Write the factorial of a number using reduce Array Method or using the for loop.


let a = 10;
function factorial(number) {
    let arr = Array.from(Array(number + 1).keys())
    console.log(arr.slice(1,));
    let c = arr.slice(1,).reduce((a, b) => {
        return a * b
    })
    return c
}

let ans = factorial(a);
console.log(ans);