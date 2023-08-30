/*
-> If number is devided by 3 && 5 both without remider then fizzBuz
-> If Only divided by 3 then fizz
-> If only devided by 5 then Buzz
-> OtherWise Print none
*/


function fizzBuzz(input){

    for(let i = 0; i<=input; i++){
        if( i%3 === 0 && i%5===0 ){
            console.log("FizzBuzz")
            continue
        }
    
        if(i%3 ===0){
            console.log("Fizz")
            continue
        }
    
        if(i%5 ===0){
            console.log("Buzz")
            continue
        }
        console.log(i)
    }

}


fizzBuzz(100)

