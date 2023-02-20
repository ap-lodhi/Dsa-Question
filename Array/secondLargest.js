var arr =[1,2,4,2,6,5  ,12]
var first  =-1; 
var second = -1; 
for(var  i=0; i<arr.length; i++){
	if(arr[i]> first){
		second =first;
		first = arr[i]
	}
	else if (arr[i] > second && arr[i] != first) {
		second =arr[i]
	}
}

console.log(second)