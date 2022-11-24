// Masai Packers & Movers II Ended
// Description

// You are excited about your new job and want to move to Bangalore, as soon as possible. You have to transport K units of weight of your stuff to Bangalore, therefore, you hired Masai Packers & Movers to do the job for you. The company has N trucks, each with a certain capacity C. Because of surge in fuel prices, the company has made a new policy that the trucks will be allowed to travelled, only if the truck is completely filled and has no empty spaces. Also, because of some issues, the company has only one driver. Therefore, in one day only a single truck can be used, to transport the things to Bangalore. Print the minimum and the maximum number of days, it will take to transport everything to Bangalore. If it is impossible to transport everything to Bangalore, print -1.


// Input
// The first line contains K and N, the total weight that needs to be transported, and N the number of trucks available.

// Next line contains N space separated integers, denoting the capacity of each truck.

// Constraints

// 1 <= K <= 40

// 1 <= N <= 7

// 1 <= C <= 10


// Output
// Print a single line containing two integers denoting the minimum and the maximum number of days it will take, to transport all the weight to Bangalore. If, it is impossible, print -1.


// Sample Input 1 

// 3 3
// 1 2 3
// Sample Output 1

// 1 3
// Sample Input 2 

// 39 3
// 8 10 2
// Sample Output 2

// -1
// Hint

// The total number of ways in which the boxes can be delivered is 4, given as, (1,1,1),(2,1),(1,2),(3). The maximum number of repetitions required will be  3 and the minimum would be 1. Therefore, the answer is 1 3

// In the second test case, there is no way, in which the entire weight can be transported, therefore, the output is -1.

function maxMinNum(arr, n, k, l, m){
    if(0 >= k){
        if(k === 0){
            if(m[1] < l){
                m[1] = l;
            }
            if(m[0] > l){
                m[0] = l;
                return m;
            }
            return m;
        }
        return m;
    }
    for(var i=0; i<n; i++){
        m = maxMinNum(arr, n, k-arr[i], l+1, m)
    }
    return m;
}


function runProgram(input) {
    input = input.split("\n");
    var a = input[0].split(" ").map(Number);
    var n = a[1];
    var k = a[0]
    var arr = input[1].split(" ").map(Number);
    if(maxMinNum(arr, n, k, 0, [100000,0])[1] !== 0){
        console.log(...maxMinNum(arr, n, k, 0, [Number.MAX_SAFE_INTEGER,0]));
    }else{
        console.log(-1);
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