/*
-> check Both array has same length
-> First Array items**2 is exists on second array
-> Complexity O(n^2)
*/

// function match(arr1, arr2) {
//     //Check both array length same
//     if(arr1.length !==arr2.length)return false

//     //Loop on first Array
//     for(let item of arr1){
//         // Check Array index
//         let check = arr2.indexOf(item**2)

//         //Return false if index not found
//         if(check===-1)return false

//         // Remove element form second array
//         arr2.splice(check, 1)
//     }

//     return true
// }

/*
-> check Both array has same length
-> First Array items**2 is exists on second array
-> Complexity O(n)
*/

function match(arr1, arr2) {
  //Check both array length same
  if (arr1.length !== arr2.length) return false

  // Store Two Array in Object
  let dataSet1 = {}
  let dataSet2 = {}

  for (let i = 0; i < arr1.length; i++) {
    // Store arr1 on dataSet1
    if (dataSet1[arr1[i]]) {
      dataSet1[arr1[i]]++
    } else {
      dataSet1[arr1[i]] = 1
    }

    // Store arr2 on dataSet2
    if (dataSet2[arr2[i]]) {
      dataSet2[arr2[i]]++
    } else {
      dataSet2[arr2[i]] = 1
    }
  }

  //
  for (let key in dataSet1) {
    //all keys expoential value same in dataSet2
    if (!dataSet2[key ** 2]) return false

    // Both Dataset Matched KeySet quantity Same
    if (dataSet1[key] !== dataSet2[key ** 2]) return false
  }

  return true
}

match([1, 2, 3, 4], [4, 1, 9, 16])
