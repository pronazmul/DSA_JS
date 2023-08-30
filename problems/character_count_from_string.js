function characterCount(str){
    let charList = {}

    //Iterate Each Character
    for(let char of str){

        // Continue if anything except character
        if(!new RegExp(/\w/i).test(char))continue
        

        // Make Keyword as toLowerCase
        char = char.toLowerCase()
        
        if(charList[char]){
            charList[char] ++
        }else{
            charList[char] = 1
        }
    }

    return charList
}


characterCount("Nazmul Huda")
