// Merge Sorting Ended
// Description

// You are given N numbers. Your task is to write MERGE SORT sorting algorithm (from scratch) to sort those N numbers.

// USING ANY OTHER ALGORITHM OR IN BUILT FUNCTION WOULD LEAD TO DISQUALIFICATION FROM NEXT HACKERRANK CONTEST


// Input
// Input Format:

// First line of input contains N

// Next line contains N space separated integers.

// Constraints:

// N < 1000000


// Output
// Output the sorted form of provided numbers


// Sample Input 1 

// 5
// 3 5 0 9 8
// Sample Output 1

// 0 3 5 8 9

function margeArray(arr, s, m, e){
    var left = m-s+1;
    var right = e-m;
    var arr1 = [], arr2 =[];
    for(var i=0; i<left; i++){
        arr1[i] = arr[s+i];
    }
    for(var i=0; i<left; i++){
        arr2[i] = arr[m+1+i];
    }
    var i =0, j =0, l =s;
    while(i < left && j < right){
        if(arr1[i] <= arr2[j]){
            arr[l] = arr1[i];
            i++;
            l++;
        }else{
            arr[l] = arr2[j];
            l++;
            j++;
        }
    }
    while(i < left){
        arr[l] = arr1[i];
        l++;
        i++;
    }
    while(j < right){
        arr[l] = arr2[j];
        l++;
        j++;
    }
}


function margeSort(arr, s, e){
    if(s >= e){
        return ;
    }
    
    var mid = s + Math.floor((e-s)/2);
    margeSort(arr, s, mid);
    margeSort(arr, mid+1, e);
    margeArray(arr, s, mid, e);
}

function runProgram(input) {
    input = input.split("\n");
    var n = +input[0];
    var arr = input[1].split(" ").map(Number);
    margeSort(arr, 0, n-1);
    console.log(arr.join(" "));
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