// Use Side Lane Ended
// Description

// There are N trucks numbered from 1 to N. The trucks are coming on a road in a random manner.(by random, it means that any order of number: not sorted) There is a side lane which can be used to order the sequence of truck properly(1,2,3,..N)

// Use these (Ref :https://imgur.com/a/yWLhQiK) images for better understanding of sample test case.

// If it is possible to achieve using the side land, print "yes"

// else print "no"


// Input
// Input Format :

// There are several test cases.

// The first line of each test case contains a single number n, the number of trucks.

// The second line contains the numbers 1 to n in an arbitrary order.

// All the numbers are separated by single spaces. These numbers indicate the order in which the trucks arrive in the approach street.

// Input ends with number 0

// Constraints :

// N < 1000


// Output
// For each test case your program has to output a line containing a single word "yes" if the trucks can be re-ordered with the help of the side lane, and a single word "no" in case it is not possible.


// Sample Input 1 

// 5
// 5 1 2 4 3 
// 0
// Sample Output 1

// yes  

function side(n,arr ){
    var final =[];
    var si= [];
    var ex = 1;
    var flag =0
    for(var i=0; i<n; i++){
           if(arr[i] ==ex){
        final.push(arr[i])
        ex++
    }else{
        while(si.length > 0 && si[si.length-1]==ex){
            final.push(si[si.length])
            ex++
            si.pop();
        }
        if(si.length ==0){
            si.push(arr[i])
        }
        else if(arr[i] <si[si.length-1]){
            si.push(arr[i])
        }else{
            flag=1;
            break;
        }
        
    }
}
if(flag ==1){
    console.log("no")
    
}
else{
    console.log("yes")
}
    }

function runProgram(input) {
    input = input.split("\n");
    for(var i=0; i<input.length; i=i+2){
        var n = +input[i];
        if(n ===0){
            break;
        }
        var arr = input[i+1].trim().split(" ").map(Number);
        var ans = side(n,arr)
    }
    
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