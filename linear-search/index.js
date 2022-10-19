/*
@Desc:    Find Index Number form an array.
@Constraint: Ascending or dscending order not required.
@Step 1:[O(n)]  Traverse on array
@COMPLEXITY: O(n)
*/

function linearSearch(array, value) {
  //Step 1
  for (let i = 0; i < array.length; i++) {
    if (array[i] === value) return i
  }
  return -1
}
let index = linearSearch([3, 4, 5, 1, 6, 7, 9, 32, 554, 66], 9)
