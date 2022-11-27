// Masai Palindromic Substring Ended
// Description

// You are provided a stringS.

// Write a program that returns length of the longest palindromic substring of that string.


// Input
// Input Format

// First line contains S, a string.

// Constraints

// `1 <= Length of string <= 100


// Output
// Output Format

// Output one number which is length of the longest substring which is a palindrome


// Sample Input 1 

// thisracecarisgood
// Sample Output 1

// 7
// Hint

// Sample 1 Explanation

// The given string contains a palindromic substring which is, "racecar" and it is of largest length(7) among all other palindromic substrings.

// Hence the output is 7 

function masaiPalSubString(S){
    //write code here 
    function isPalindrome(str){
    let i = 0;
    let j = str.length - 1 
    while(i < j){
        if(str[i] !== str[j]) return false;
        i++;
        j--;            
    }
    return true;
}
    var arr = S.split("")
   var ans = 0 
for(var i=0; i<arr.length; i++){
  for(var j=i; j<arr.length; j++){
      var str = ""
      for(var k=i; k<=j; k++){
          str = str + arr[k]
          if(isPalindrome(str)){
              if(str.length > ans){
                  ans = str.length
              }
          }
      }
  }
}
    console.log(ans)
}