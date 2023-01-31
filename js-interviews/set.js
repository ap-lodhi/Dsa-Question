var arr = [1,2,3]

for(var i=0; i<arr.length; i++){
    setTimeout(function(){
        console.log(i,arr[i])
    },i*1000)
}



