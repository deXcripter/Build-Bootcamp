const fizzBuzz = (input) => {
  //
  if (input > 100 || input < 0) return 'Invalid number range';
  if (input % 3 === 0 && input % 5 === 0) return 'FizzBuzz';
  if (input % 3 === 0) return 'Fizz';
  if (input % 5 === 0) return 'Buzz';

  return `${input} `;
};

const solution = () => {
  const value = parseInt(number.value, 10);
  if (!value) return;
  alert(fizzBuzz(value));
  number.value = null;
  number.focus({ focusVisible: false });
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
