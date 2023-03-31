//Here should be the logic to get the data from the database or any other source, but I used a static array for the requirements of the test.

const numbersArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 15, 30, 31, 32, 33];

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

const getResult = (filterParams) => {
  try {
    return fizzBuzz(numbersArray);
  } catch (error) {
    throw error;
  }
};

module.exports = {
  getResult,
};
