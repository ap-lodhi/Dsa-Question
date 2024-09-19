function isPrimeBasic(num) {
  if (num <= 1) return false; // 0 and 1 are not prime numbers

  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      return false; // Number is divisible by another number
    }
  }
  return true;
}

// Test the function
console.log(isPrimeBasic(7)); // Output: true
console.log(isPrimeBasic(10)); // Output: false
