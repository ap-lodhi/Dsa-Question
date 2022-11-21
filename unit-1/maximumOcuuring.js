// Sample Input 1 

// 5
// 0 2 0 6 9
// Sample Output 1

// 0
//this question solved using map 

function maximumOccuringElement(A,N){
   
    var m  =new Map();
for(var i=0; i<N; i++){
  if(m.has(A[i])){
    let current = m.get(A[i]);
    m.set(A[i],current+1);
  }
  else{
    m.set(A[i],1)
  }
}
var max = 0; 
var res ;
for(var i=0; i<N; i++){
    if(m.get(A[i] )> max){
        max = m.get(A[i])
        res = A[i]
    }
}
console.log(res)
}

var A = [0, 2, 0, 6, 9]
var N = 5
var ans  =maximumOccuringElement(A,N)