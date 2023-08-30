
function linearLogger(num) {
    for(let i = 0; i <= Math.max(5,num);i++){
        console.log({i})
    }
}

function constantLogger(num) {
    for(let i=0; i<=Math.min(5,num);i++){
        console.log({i})
    }
}

constantLogger(100)
linearLogger(10)
