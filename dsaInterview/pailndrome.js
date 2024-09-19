

function isPalindrome(str) {
  str = str.toLowerCase();
  let left = 0;
  let right = str.length - 1;

  while (left < right) {
    if (str[left] !== str[right]) {
      return false;
    }
    left++;
    right--;
  }
  return true;
}



function isPalindromeNumber(num) {
    // Negative numbers are not palindromes
    if (num < 0) return false;

    // Store the original number to compare later
    let originalNum = num;
    let reversedNum = 0;

    // Reverse the number
    while (num > 0) {
        let digit = num % 10; // Get the last digit
        reversedNum = reversedNum * 10 + digit; // Build the reversed number
        num = Math.floor(num / 10); // Remove the last digit from the number
    }

    // Compare the reversed number with the original number
    return originalNum === reversedNum;
}

// Test the function
console.log(isPalindromeNumber(121)); // Output: true
console.log(isPalindromeNumber(-121)); // Output: false
console.log(isPalindromeNumber(123)); // Output: false

