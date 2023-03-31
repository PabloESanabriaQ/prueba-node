//Here should be the logic to get the data from the database or any other source, but I used a static array for the requirements of the test.

const fizzBuzz = require("./utils");

const numbersArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 15, 30, 31, 32, 33];

const getResult = () => {
  try {
    return fizzBuzz(numbersArray);
  } catch (error) {
    throw error;
  }
};

module.exports = {
  getResult,
};
