let hours = +prompt("Enter your message worked: ")
let rate = prompt("Enter your rate: ")
let salary = hours * rate
let curformat = Intl.NumberFormat()
console.log(
    `Your salary is ${curformat.format(salary)}`);
console.log(`Your salary is R${salary.toFixed(2)}`);