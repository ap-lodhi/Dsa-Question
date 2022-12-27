
function check(arr){

    for(var  i=0; i<arr.length ; i++){
        sum = arr[i]+arr[i+1];
        for(var j=0; j<arr.length; j++){
            if(sum == arr[j]){
                return 1
            }
        }
        
    }
    return 0
}

    var arr = [6, 10, 10, 10, 8, 4 ,7]
    var ans  = check(arr)
    console.log(ans)