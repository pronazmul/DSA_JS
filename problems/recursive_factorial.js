function factorial(n) {
   
    // Base case: factorial of 0 is 1
    if (n === 0) {
        console.log({e:n})
        return 1;
    }
    // Recursive case: factorial(n) = n *  factorial(n - 1)
    let result = n * factorial(n - 1)
    return result;
}

const number = 5;

const result = factorial(number);
console.log(`Factorial of ${number} is ${result}`);
