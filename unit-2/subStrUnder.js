// Substring under condition Ended
// Description

// You are given a strings, you have to find thecountof all such substrings which start and ends with the same character.


// Input
// Input Format :

// First and the only line contains a strings

// Constraints:

// 1 <= Length of s <= 1000


// Output
// Print the count of total number of such substrings starting and ending with same characters.


// Sample Input 1 

// abcab
// Sample Output 1

// 7
// Hint

// Substrings ofabcabwhich start and end with same characters, area,abca,b,bcab,c,a,b.

// So total count is 7. Hence we print 7.

function subStrUnderCond(s){
    //write code here
     var str = new Map();
     for(var i=0; i<s.length; i++){
         if(str.get(s[i]) === undefined){
             str.set(s[i], 1);
         }else{
             str.set(s[i], str.get(s[i])+1);
         }
     }
     
    // console.log(str)
     var sum = 0;
     for(const [k, va] of str){
        console.log('va->',va)
         sum += va;
         for(var i=1; i<va; i++){
            console.log('i->',i)
             sum += i;
         }
     }
     console.log(sum)
    }

    subStrUnderCond('abcab')