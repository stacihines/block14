// === DO NOT EDIT THIS REGION ===
// Read the comments to understand how the program is structured.

// Prompt the user for a list of integers separated by commas.
const number = prompt(
  "Please enter some integers separated by commas.",
  "1,2,3,4,5"
  );
  
  // Split the string of numbers into an array of strings.
  const stringArray = number.split(",");
  
  // Convert the array of strings into an array of numbers.
  const numbers = [];
  for (let i = 0; i < stringArray.length; i++) {
    const str = stringArray[i];
    const number = parseInt(str);
    numbers.push(number);
  }
  
  // Peform some calculations on the numbers.
  console.log(numbers);
  console.log(`You have given ${getLength(numbers)} numbers.`);
  console.log(`The sum of your numbers is ${getSum(numbers)}.`);
  console.log(`The mean of your numbers is ${getMean(numbers)}.`);
  console.log(`The smallest of your numbers is ${getMin(numbers)}.`);
  console.log(`The largest of your numbers is ${getMax(numbers)}.`);
  console.log(`The range of your numbers is ${getRange(numbers)}.`);
  console.log(`The even numbers you gave are ${getEvens(numbers)}.`);
  console.log(`The odd numbers you gave are ${getOdds(numbers)}.`);
  
  // === EDIT THE CODE BELOW ===
  // Complete the functions below to make the program work!
  
  /**
   * @param {number[]} numbers an array of integers
   * @returns {number} the length of the array
   */
  function getLength(numbers) {
    return numbers.length;
    // TODO
  }
  
  /**
   * @param {number[]} numbers an array of integers
   * @returns {number} the sum of the numbers
   */
  function getSum(numbers) {
    let sum = 0;
    for (let i = 0; i <
      numbers.length; i ++) {
        sum += numbers [i];
      }
    return sum;
    // TODO
  }
  
  /**
   * @param {number[]} numbers an array of integers
   * @returns {number} the mean of the numbers
   */
  function getMean(numbers) {
    // mean = sum / length
const sum = getSum(numbers)
    getSum = 0;c
    for (let i = 0; i <
  numbers.length; i ++) {
      sum += numbers[i];
      }
    return numbers.length;
    // TODO
  }

  
  /**
   * @param {number[]} numbers an array of integers
   * @returns {number} the smallest of the numbers
   */
  function getMin(numbers) {
    // Math.min()
    let smallest = number [0];
    for (let i =1; 1< number.length; i++) {
      if (numbers[i] < smallest) {
        smallest = numbers [i];
      }
      return number.smallest;
    }
    // TODO
  }
  
  /**
   * @param {number[]} numbers an array of integers
   * @returns {number} the largest of the numbers
   */
  function getMax(numbers) {
    Math.max()
    let max = numbers [0];
    for (let i =1; i <
      numbers.length;i++) {
        if (numbers [i] > max){
          max = numbers
        }
      }
    return number.max;
    // TODO
  }
  
  /**
   * @param {number[]} numbers an array of integers
   * @returns {number} the range of the numbers (max - min)
   */
  function getRange(numbers) {
    let min = numbers [0];
    let max = numbers [0];
    for (let i = 1; i <
  numbers. length; i ++) {
    if (numbers[i]< min)
        min = numbers [i];
      }
      if (numbers[i]> max) {
        max = numbers [i];
      }
    return max- min
    // TODO
  }
  
  /**
   * @param {number[]} numbers an array of integers
   * @returns {number[]} the even numbers in the array
   */
  function getEvens(numbers) {
    let evens = [];
    for (let i = 0; i <
      numbers.length; i++) {
        if (numbers[i]% 2===0) {
          evens.push (numbers[i]);
        }
      }
    return number.even;
    // TODO
  }
  
  /**
   * @param {number[]} numbers an array of integers
   * @returns {number[]} the odd numbers in the array
   */
  function getOdds(numbers) {
    return number.odd;
    let odds = [];
    for ( let i = 0; i <
      numbers. length; i++) {
        if (numbers [i] % 2 !==0) {
          odds.push(numbers[i]);
        }
      }
      return number.odds;
    // TODO
  }