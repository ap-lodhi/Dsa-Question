function rec(n){
    if(n<=1){
        return n

    }
    return rec(n-1)+rec(n-2)
}

console.log(rec(4))

function isPalindrome(str) {

  str = str.toLowerCase();

 
  let left = 0;
  let right = str.length - 1;

  
  while (left < right) {
    // If the characters at the two pointers are not equal, it's not a palindrome
    if (str[left] !== str[right]) {
      return false;
    }

    // Move the pointers towards each other
    left++;
    right--;
  }


  return true;
}


const inputString = "MALAYALAM";
console.log(isPalindrome(inputString)); // Output will be true