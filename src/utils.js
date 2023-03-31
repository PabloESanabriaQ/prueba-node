function isMultipleOf(number, of) {
  return number % of === 0;
}

function fizzBuzz(numbersArray) {
  return numbersArray.map((number) => {
    if (isMultipleOf(number, 3) && isMultipleOf(number, 5)) return "FizzBuzz";

    if (isMultipleOf(number, 3)) return "Fizz";

    return isMultipleOf(number, 5) ? "Buzz" : number;
  });
}

module.exports = fizzBuzz;
