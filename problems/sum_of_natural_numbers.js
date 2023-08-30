// O(n)

// function sumAll(num) {
//     let total = 0
//     for (i=0; i<=num; i++){
//         total +=i
//     }
//     return total
// }

//O(1)
function sumAll(num) {
    return num * (num+1) /2
}



let start  = performance.now()
console.log(sumAll(1000000000))
let stop = performance.now()


let timeTaken = (stop-start)/1000

console.log(`Operation time Taken- ${timeTaken}`)

