const fizzBuzz = (input) => {
  //
  if (input % 3 === 0 && input % 5 === 0) return 'FizzBuzz';
  if (input % 3 === 0) return 'Fuzz';
  if (input % 5 === 0) return 'Buzz';

  return `${input} is not divisible by either 3 or 5`;
};

const solution = () => {
  const value = parseInt(number.value, 10);
  if (!value) return;
  console.log(value);
  alert(fizzBuzz(value));
  number.value = null;
};

const number = document.getElementById('number');
const button = document.getElementById('button');

button.addEventListener('click', () => {
  solution();
});

document.addEventListener('keydown', (key) => {
  if (key.key !== 'Enter') return;
  solution();
});
