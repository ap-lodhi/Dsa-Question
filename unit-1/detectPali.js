// Detect Palindrome II Ended
// Description

// You are given a string S. Find if the string, can be converted into a palindrome.

// You are free to rearrange the string in any way you want. Rearrangement refers to the fact that the characters can be arranged in any way in the string.

// Deletion or addition of characters is not allowed.



function detectPalII(N, string){
    //write code here
     const pali = new Map();
    for(var i=0; i<N; i++){
        if(pali.get(string[i])){
            let cur  = pali.get(string[i]) + 1;
            pali.set(string[i], cur);
        }else{
            pali.set(string[i], 1);
        }
    }
   
    var count = 0;
    for(const [key, value] of pali){
        if(value%2 !== 0){
            count++;
        }
    }
    if(count>1){
        console.log("Not Possible!");
    }else{
        console.log('Possible!');
    }
}
