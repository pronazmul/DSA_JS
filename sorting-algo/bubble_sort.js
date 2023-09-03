// Define a function called bubbleSort that takes an array 'arr' as input.
function bubbleSort(arr) {
  // Get the length of the input array.
  let n = arr.length

  // Outer loop: Iterate through the entire array.
  for (let i = 0; i < n - 1; i++) {
    // Inner loop: Iterate through the remaining unsorted elements.
    for (let j = 0; j < n - i - 1; j++) {
      // Compare adjacent elements in the array.
      if (arr[j] > arr[j + 1]) {
        // If the current element is greater than the next element, swap them.
        let temp = arr[j]
        arr[j] = arr[j + 1]
        arr[j + 1] = temp
      }
    }
  }
}

// Create an example array for sorting.
let array = [64, 34, 25, 12, 22, 11, 90]

// Call the bubbleSort function to sort the 'array'.
bubbleSort(array)

// Display the sorted array.
console.log('Sorted array:', array)
