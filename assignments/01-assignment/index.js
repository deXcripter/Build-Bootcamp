import fizzBuzz from './fizz-buzz';

const number = document.getElementById('number');

console.log(number);

if (number.value) alert(fizzBuzz(number.value));
