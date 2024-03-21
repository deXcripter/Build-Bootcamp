const fizzBuzz = (input) => {
  if (typeof input !== 'number') return 'Not a number';

  if (input % 3 === 0 && input % 5 === 0) return 'FizzBuzz';
  if (input % 3 === 0) return 'Fuzz';
  if (input % 5 === 0) return 'Buzz';
};

export default fizzBuzz;
