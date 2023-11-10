
// Thursday: Sum All Numbers in a Range
// Algorithm:
// I/O: array
// O/P: a number
// make a function ,inside function
// find min & max values using if /else or ternary operator
// Initialize a variable to store the sum
// use for loop to iterate nunbers between min & max (inclusive)
// inside loop add each number to the sum
// outside loop return the final sum
// call function 


function sumAll(arr) {

    let min = arr[0] < arr[1] ? arr[0] : arr[1];
    let max = arr[0] > arr[1] ? arr[0] : arr[1];
    let sum = 0;
  
   
    for (let i = min; i <= max; i++) {
      // Add each number to the sum
      sum += i;
    }
  
   
    return sum;
  }
  // examples
  console.log(sumAll([1, 4]));   // Output: 10
  console.log(sumAll([4, 1]));   // Output: 10
  console.log(sumAll([5, 10]));  // Output: 45