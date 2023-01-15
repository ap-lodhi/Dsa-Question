// var  str  = "anilpatel";
// var arr = [];
// for(var  i=0; i<str.length; i++){
//        arr.push(str[i])
// }
var arr =[1,14,10,7,20,1,22,5,]
// arr.sort(function(a,b){
//     return a-b;
// })
// console.log(arr);


 
function swap(arr,j, jp)
{
    var temp = arr[j];
    arr[j] = arr[jp];
    arr[jp] = temp;
}
for(var  i=0; i<arr.length-1; i++){
    for(var j=0; j<arr.length-i-1; j++){
        if(arr[j]>arr[j+1]){
            swap(arr,j,j+1);
         }
    }
}
console.log(arr)