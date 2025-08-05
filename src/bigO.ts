// Function to get the first element of an array
// Temporal Complexity: O(1) - Constant time, independent of array size
// Spatial Complexity: O(1) - No additional memory used
function getFirstElement(arr: number[]): number {
  return arr[0]; // Direct access to the first element
}

const firstElement = getFirstElement([1, 2, 3, 4, 5]);
console.log(firstElement); // Output: 1

// Function to find if a target element exists in the array
// Temporal Complexity: O(n) - Linear time, iterates through the array once
// Spatial Complexity: O(1) - Uses a fixed amount of additional memory
function findElement(arr: number[], target: number): boolean {
  for (let num of arr) {
    if (num === target) {
      return true;
    }
  }
  return false;
}

const exists = findElement([1, 2, 3, 4, 5], 3);
console.log(exists); // Output: true

// Function to print all pairs of elements in the array
// Temporal Complexity: O(n²) - Quadratic time, nested loops each of size n
// Spatial Complexity: O(1) - No additional memory used beyond loop variables
function printPairs(arr: number[]): void {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      console.log(arr[i], arr[j]);
    }
  }
}

const pairs = printPairs([1, 2, 3]);
// Output: All pairs of elements in the array ex. (1, 1), (1, 2), (1, 3), etc.

// Function to perform binary search on a sorted array
// Temporal Complexity: O(log n) - Logarithmic time, halves the search space each step
// Spatial Complexity: O(1) - Uses a fixed amount of additional memory
function binarySearch(arr: number[], target: number): boolean {
  let left = 0;
  let right = arr.length - 1;
  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    if (arr[mid] === target) {
      return true;
    } else if (arr[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  return false;
}

const found = binarySearch([1, 2, 3, 4, 5], 4);
console.log(found); // Output: true
