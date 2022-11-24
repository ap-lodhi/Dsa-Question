// The Famous Sum Ended
// Description

// You are given two numbers nand k. The number p iscreated by concatenating the string n k times.

// we need to find thesuper digit ofthe integer p

// We definesuperdigit of an integer pusing the following rules:

// If p has only 1 digit, then itssuperdigit is 1.
// Otherwise, thesuperdigit of p is equal to thesuperdigit of the sum of the digits of p.
// Read the Sample input explanation for better understanding.


// Input
// Input Format

// The first line contains two space-separated integers,n-a string representation of an integerand k-an integer, the times to concatenate nto make p.

// Constraints

// 1 <= n <= 10^100000

// 1 <= k <=10^5


// Output
// Print thesuperdigit sum p


// Sample Input 1 

// 148 3
// Sample Output 1

// 3
// Sample Input 2 

// 123 3
// Sample Output 2

// 9
// Hint

// Sample Input 1 Explanation

// Here n = 148 and k = 3 ,so p = 148148148.

// super_digit(P) = super_digit(148148148) 
//                = super_digit(1+4+8+1+4+8+1+4+8)
//                = super_digit(39)
//                = super_digit(3+9)
//                = super_digit(12)
//                = super_digit(1+2)
//                = super_digit(3)
//                = 3.
// Sample Input 2 Explanation

// Here n = 123 and k = 3 ,so p = 123123123

// super_digit(P) = super_digit(123123123) 
//                = super_digit(1+2+3+1+2+3+1+2+3)
//                = super_digit(18)
//                = super_digit(1+8)
//                = super_digit(9)
//                = 9
// Language: 
 
function superD(str, s){
    if(str.length === 0){
        return Number(str);
    }
    var total = 0;
    for(var i=0; i<str.length; i++){
        total += Number(str[i]);
    }
    if(total <10){
        return total;
    }
    str = total.toString();
    return superD(str, total);
 }
 
 function runProgram(input) {
     var arr = input.split(" ");
     var n = arr[0];
     var k = +arr[1];
     var sum = superD(n, 0);
     var str = (sum*k).toString();
     
     console.log(superD(str, 0));
     
 }
   
 if (process.env.USER === "sony") {
   runProgram(``);
 } else {
   process.stdin.resume();
   process.stdin.setEncoding("ascii");
   let read = "";
   process.stdin.on("data", function (input) {
     read += input;
   });
   process.stdin.on("end", function () {
     read = read.replace(/\n$/, "");
     read = read.replace(/\n$/, "");
     runProgram(read);
   });
   process.on("SIGINT", function () {
     read = read.replace(/\n$/, "");
     runProgram(read);
     process.exit(0);
   });
 }