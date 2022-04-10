/*
    Codewars Solutions
    Solved by Need4Swede
    https://mafshari.work
*/

function countPsumN(input) {

    // If input is empty, return an empty array
    if (input == null || input.length == 0){
        return [];
    }
    else{

        // Initialize sum and counter
        let negativeSum = 0;
        let positiveCount = 0;

        // Add every negative number to sum, and count every positive number
        input.forEach(number => {
            if (number < 0){
                negativeSum += number
            }
            else if (number > 0){
                positiveCount += 1;
            }
        });

        // Return the result
        return [positiveCount, negativeSum];

    }
}
function inverseNum(number) {
    return(-number);
}
function mergeArraysLong(array1, array2) {
    // CREATE NEW ARRAY TO STORE COMBINED ARRAYS IN
    let newArr = [];
    // ADD ALL NUMBERS IN FIRST ARRAY TO OUR NEW ARRAY
    array1.forEach(numberInArray => {
      newArr.push(numberInArray);
    }) // ADD ALL NUMBERS IN SECOND ARRAY TO OUR NEW ARRAY
    array2.forEach(numberInArray => {
      newArr.push(numberInArray);
    }) // SORT OUR NEW ARRAY IN ASCENDING ORDER
    newArr.sort((a, b) => a - b);
    // REMOVE DUPLICATES FROM ARRAY
    newArr = [...new Set(newArr)];
    // RETURN THE RESULTING ARRAY
    return newArr;
}
function mergeArrays(a, b) {
  return [...new Set(a.concat(b))].sort((a,b) => a-b);

  /* EXPLANATION:
    [...new Set()]
    Takes an iterable input, like strings and arrays, and removes any duplicates
    
    a.concat(b)
    Takes an iterable input (a) and concats the second input (b) to (a)
    
    $.sort((a,b) => a-b)
    A method of sorting elements by ascending order
    
    [...new Set(a.concat(b))].sort((a,b) => a-b);
    Remove any duplicates from the newly concatenated (a) and (b), then sort it in ascending order 
  */

}
function multiplesOf3or5(number){
    // Create new Array
    let numArr = [];
    // Initalize Sum
      let sum = 0;
    // Count up to the passed-in number  
      for(let i = 1; i < number; i++){
    // If the number is divisible by 3 and 5, add it to our new array
        if(i % 3 == 0 && i % 5 == 0){
          numArr.push(i);
        }
    // If the number is divisible by 3 or 5, add it to our new array
        else if(i % 3 == 0 || i % 5 == 0){
          numArr.push(i)
        }
      }
    // For every number in our array, add it to the sum
      numArr.forEach(element => {
         sum = element + sum;
      })
    // Return the sum total
      return sum
}
function reverseString(str){
    return str.split("").reverse().join("");
}
function solution(str){
    return reverseString(str);
}
function squareSum(numbers){
  
    // Initialize sum variable
    let sum = 0;
    
    // Cube every number passed in and add it to the sum total
    numbers.forEach(number => {
      number **= 2;
      sum += number;
    })
    
    // Return the sum total
    return sum;
}
function stringToArray(string){
	return string.split(" ");
}
function sumMix(x){
  
    // Initialize sum
    let sum = 0;
    
    // Convert all passed in elements to Numbers and add them to the sum
    x.forEach(element => {
      element = Number(element);
      sum += element;
    })
    
    // Return the sum
    return sum;
    
}
function findCapitals(word){
  // Initialize our index array
  let indexArr = [];
  // Split 'word' into an array of characters
  word.split("").forEach(function (char, index) {
    // If a character is in uppercase, add its index to our index array
    if (char === char.toUpperCase() && isNaN(char)){
      indexArr.push(index);
    }
  });
  // Output the array
  return indexArr;
}