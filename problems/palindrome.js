/*
* @desc: Check String is equal to it's opposite organized
*/


function checkPalindrome(str){
    return str.split('').every((item,index)=>{

        let x = item
        let y = str[str.length-1-index]
        return x===y
    })
}

checkPalindrome('racecar')
