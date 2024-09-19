


function reverse(str){

    var newstr = str.split('');
    var  l = 0
    var r= newstr.length-1;

    while(l<r){
        var  temp = newstr[l];
        newstr[l]=newstr[r];
        newstr[r]=temp;
        l++
        r--
    }
    return newstr.join('');

}

var string = "anil"

console.log(reverse(string));