// Sample Input 1 

// 4
// aman
// Sample Output 1

// a-2
// m-1
// n-1









function alanFrequency(N, string) {
    //write code here
    var str = []
    
    for(var j=0; j<N; j++){
        str.push(string[j])
    }
    str.sort();
    
    var obj = {};
    for(var i=0; i<N; i++){
        if(obj[str[i] ] === undefined){
            obj[str[i]] = 1
        }
        else{
            var prev = obj[str[i]];
            obj[str[i]] = prev+1
        }
    }
    for(var  key in obj ){
        console.log(key+"-"+ obj[key])
    }
  }