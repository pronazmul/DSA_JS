// Define a function called selectionSort that takes an array 'arr' as input.
function selectionSort(arr) {
  // Get the length of the input array.
  let n = arr.length

  // Outer loop: Iterate through the entire array.
  for (let i = 0; i < n; i++) {
    // Assume the current index 'i' contains the smallest element.
    let lowest = i

    // Flag to track if any swap occurs in this pass.
    let isSwap = false

    // Inner loop: Find the index of the smallest element in the unsorted portion of the array.
    for (let j = i + 1; j < n; j++) {
      // Compare the current element with the element at 'lowest'.
      if (arr[j] < arr[lowest]) {
        isSwap = true // Set the swap flag to true.
        lowest = j // Update 'lowest' if a smaller element is found.
      }
    }

    // If no swap occurred in this pass, the array is already sorted.
    if (!isSwap) {
      break
    }

    // Swap the element at 'lowest' with the element at index 'i'.
    if (lowest !== i) {
      let temp = arr[i]
      arr[i] = arr[lowest]
      arr[lowest] = temp
    }
  }
}

// Create an example array for sorting.
let array = [64, 34, 25, 12, 22, 11, 90]

// Call the selectionSort function to sort the 'array'.
selectionSort(array)

// Display the sorted array.
console.log('Sorted array:', array)
