console.log('***** Function Practice *****');

// Add the required code to complete the functions below
// After _each_ function, use a console log to call the function
// to test it and display the result

// 1. Function to return 'Hello World!'
function hello() {
  return 'Hello World!';
}
// Call the function to test
console.log('Test - should say "Hello World!"', hello());

// 2. Function to return an personalized hello, using the `name` argument.
//    for example 'Hello, Jo!', or 'Hello, Stacy!'
function helloName(name) {
  return 'Hello, ' + name;
}
// Remember to call the function to test
console.log(helloName('Jane'));

// 3. Function to add two numbers together & return the result
function addNumbers(firstNumber, secondNumber) {
  return firstNumber + secondNumber;
}
console.log('should read 45', addNumbers(25, 20));
// 4. Function to multiply three numbers & return the result
function multiplyThree(numOne, numTwo, numThree) {
  return numOne * numTwo * numThree;
}
console.log('should read 60', multiplyThree(5, 4, 3));
// 5. Function that will return true if a number is positive,
//    or greater than zero, and false otherwise
function isPositive(number) {
  if (number > 0) {
    return true;
  } else {
    return false;
  } //end else statement
} //end function
console.log('Should read true:', isPositive(10));
console.log('Should read false:', isPositive(-2));

// Call the function to test each outcome (true & false)
// Write a separate console.log statement for each outcome
console.log('isPositive - should say true', isPositive(3));
console.log('isPositive - should say false', isPositive(0));
console.log('isPositive - should say false', isPositive(-3));

// 6. Function to return the _last_ item in an array. If the
//    array is empty, return `undefined`.
function getLast(array) {
  if (array.length === 0) {
    return;
  } else {
    return array[array.length - 1];
  }
}
console.log('should read last:', getLast(['first', 'second', 'third', 'last']));
console.log('should read undefined:', getLast([]));

// 7. Function to find a value in an array. Return true if the
//    value is found and false otherwise. Use a loop;
//    DO NOT use Array.includes, Array.indexOf, or Array.find
function find(value, array) {
  for (let index = 0; index < array.length; index++) {
    if (array[index] === value) {
      return true;
    }
  }
  return false;
}
console.log('should read true:', find(5, [1, 2, 3, 4, 5]));
console.log('should read false:', find(10, [1, 2, 3, 4, 5]));

// ----------------------
// Stretch Goals
// ----------------------
// 8. Function to check if a letter is the first letter in a
//    string. Return true if it is, and false otherwise
function isFirstLetter(letter, string) {
  return string.includes(letter);
}
console.log('isFirstLetter - should say true', isFirstLetter('a', 'apple'));
console.log('isFirstLetter - should say false', isFirstLetter('z', 'apple'));

// 9. Function to return the sum of all numbers in an array
function sumAll(arr) {
  if (arr.length === 0) {
    return;
  }
  let sum = 0;
  for (num of arr) sum += num;
  return sum;
}
console.log('Should read 15:', sumAll([1, 2, 3, 4, 5]));
console.log('Should read undefined:', sumAll([]));
// 10. Function to return a new array of all positive (greater than zero)
//     numbers contained in an input array. If there are no positive numbers
//     return an empty array. Note: The input array should not change.

function posArr(arrStart) {
  let finalArr = [];
  for (num of arrStart)
    if (num > 0) {
      finalArr.push(num);
    }
  return finalArr;
}
console.log('Should read [1,2,3]:', posArr([1, -1, 2, -2, 3, -3]));
console.log('Array should be empty:', posArr([-1, -2, -3, -4]));
// 11. Pick a problem from Edabit(https://edabit.com/) or
//     CodeWars(https://www.codewars.com/). Then describe it
//     here in a comment, write the function, and test it!

//Complete the square sum function so that it squares each number passed into it and then sums the results together.
//For example, for [1, 2, 2] it should return 9 because 1^2 + 2^2 + 2^2 = 9.

function squareSum(numbers) {
  return numbers.reduce(function (sum, el) {
    return el * el + sum;
  }, 0);
}

console.log('Should return 50:', squareSum([0, 3, 4, 5]));
