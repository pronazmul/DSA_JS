/*
@Desc:       Implement linear Search algo to find a index number of supplied value. 
@Step 1:     [O(n)] Traverse on Array.
@Step 2:     [O(1)]  Return null if not found. 
@COMPLEXITY: O(n)
*/
function linearSearch(array, target) {
  for (i = 0; i < array.length; i++) {
    if (array[i] === target) return i
  }
  return null
}
let array = [1, 2, 3, 4, 5, 6, 7, 8, 9]

array[linearSearch(array, 7)] === 7
  ? console.log('Operation Successfull')
  : console.log('Operation Failed')
