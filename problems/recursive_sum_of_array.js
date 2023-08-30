let input = new Array(6000).fill(1)

function counterOne(arr) {
  if (arr.length === 0) return 0
  let rest = arr.slice(1)
  return arr[0] + counterOne(rest)
}

function counterTwo(arr, index) {
  if (arr.length === index) return 0
  return arr[index] + counterTwo(arr, index + 1)
}

let start = Date.now()
console.log(counterOne(input))
let end = Date.now()
console.log(`time taken slow ${end - start} ms`)

start = Date.now()
console.log(counterTwo(input, 0))
end = Date.now()
console.log(`time taken first ${end - start} ms`)
