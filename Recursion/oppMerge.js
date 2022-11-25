// Opp Merge Sort Ended
// Description

// Given a list of n integers. Write a program for merge sort algorithm such that it reverses the list in descending order.  You must not write any other sorting algorithm


// Input
// First line contains n which is the number of elements present in the array



// Second line contains n space-separated integers


// Output
// Output the elements present in the array sorted in descending order


// Sample Input 1 

// 5
// 2 3 1 4 5
// Sample Output 1

// 5 4 3 2 1

function margeArray(arr, s, m, e){
    var lf = m-s+1;
    var rt = e-m;
    var arr1 = [], arr2 =[];
    for(var i=0; i<lf; i++){
        arr1[i] = arr[s+i];
    }
    for(var i=0; i<lf; i++){
        arr2[i] = arr[m+1+i];
    }
    var i =0, j =0, l =s;
    while(i < lf && j < rt){
        if(arr1[i] >= arr2[j]){
            arr[l] = arr1[i];
            i++;
            l++;
        }else{
            arr[l] = arr2[j];
            l++;
            j++;
        }
    }
    while(i < lf){
        arr[l] = arr1[i];
        l++;
        i++;
    }
    while(j < rt){
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