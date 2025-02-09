function add(a: number, b: number): number {
  return a + b;
}

function subtract(a: number, b: number): number {
  return a - b;
}

let result1 = add(5, 3); // result1 is 8
let result2 = subtract(10, 4); // result2 is 6

console.log(result1, result2); // output: 8, 6

//This is a bug:
function divide(a: number, b: number): number {
    if (b === 0) {
        throw new Error('Cannot divide by zero');
    }
    return a / b; //this is the line with the bug, it should be return a / b;
}

let result3 = divide(10, 0); //this will throw an error
console.log(result3);