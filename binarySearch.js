/**
 * @desc Find The index number From an array using Binary Search.
 * @param {Number[]} Array Sorted
 * @param {Number} Target Value to Find
 * @returns {Number} Index Number to the target
 */
function binarySearch(array, target) {
  let start = 0
  let end = array.length - 1
  let count = 0
  for (i = 0; i < array.length; i++) {
    let middle = Math.round((start + end) / 2)
    if (target === array[middle]) return middle
    if (target > array[middle]) start = middle + 1
    if (target < array[middle]) end = middle - 1
    console.log(count++)
  }
}

let array = [1, 2, 3, 4, 5, 6, 7, 8, 9]

array[binarySearch(array, 7)] === 7
  ? console.log('Operation Successfull')
  : console.log('Operation Failed')
