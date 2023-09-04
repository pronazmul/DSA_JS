// Define a function called 'insertionSort' that takes an array 'arr' as input
function insertionSort(arr) {
  // Get the length of the input array 'arr'
  let n = arr.length

  // Outer loop: Iterate through the entire array
  for (let i = 0; i < n; i++) {
    // Inner loop: Compare each element with the previous ones and move it to its correct position
    for (let j = i; j > 0; j--) {
      // Check if the current element is smaller than the previous one
      if (arr[j] < arr[j - 1]) {
        // Swap the current element and the previous one if the condition is met
        let temp = arr[j]
        arr[j] = arr[j - 1]
        arr[j - 1] = temp
      } else {
        // If the current element is not smaller, break out of the inner loop
        break
      }
    }
  }
}

// Create an array called 'array' with unsorted values
let array = [64, 34, 25, 12, 22, 11, 90]

// Call the 'insertionSort' function to sort the 'array' in-place
insertionSort(array)

// Output the sorted array to the console
console.log('Sorted array:', array)
