/*
@Desc:       Implement Binary Search algo to find a index number of supplied value. 
@Constraint:  Must be Ascending or Dscending Order.
@Step 1:     [O(1)]  Declare a variable and store start index number initially 0.
@Step 2:     [O(1)]  Declare a variable and store end index number initially length.
@Step 3:     [O(log n)] Traverse on Array.
@Step 4:     [O(1)]  Declare a variable and store middle index number(Adding Start and End index and divide by 2)
@Step 5:     [O(1)]  Compare if disared is't middle return it.
@Step 6:     [O(1)]  Compare if it's Grater than middle re-assign start index+1 from middle.
@Step 7:     [O(1)]  Compare if it's Less than middle re-assign end index-1 from middle.
@Step 8      [O(1)]  Return -1 if not found. 
@COMPLEXITY: O(log n)
*/

function binarySearch(array, target) {
  let start = 0
  let end = array.length - 1
  for (i = 0; i < array.length; i++) {
    let middle = Math.round((start + end) / 2)
    if (target === array[middle]) return middle
    if (target > array[middle]) start = middle + 1
    if (target < array[middle]) end = middle - 1
  }
}

let array = [1, 2, 3, 4, 5, 6, 7, 8, 9]

array[binarySearch(array, 7)] === 7
  ? console.log('Operation Successfull')
  : console.log('Operation Failed')
