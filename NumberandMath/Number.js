
const num = 600;
console.log(num)

console.log(num.toString().length);
// console.log(num.length);

const number = new Number (500)  // define that number is a NUmberical value
console.log(number)
console.log( `value of number is ${number} `);

console.log(number.toFixed(4))  // show value after decimal 


const value = 7590.7679;
console.log(`Real value of is : ${value} \n`)
console.log(`what happen when we use differnce value in Precision ${value.toPrecision(6)} \n` );
// console.log(`what happen when we use differnce value in Precision ${value.toPrecision(2)}\n`);
// console.log(`what happen when we use differnce value in Precision ${value.toPrecision(8)}\n`);
console.log(`what happen when we use differnce value in Precision ${value.toPrecision(4)} \n`);

const hai = 1000000;
console.log(`represent the zeroes in good way : ${hai.toLocaleString()} \n`);  // represent in form of lakhs and thousand with the help of commas


