function alanFrequency(N, string) {
    //write code here
   // string.sort();
   var  alpha  = "abcdefghijklmnopqrstuvwxyz";
    var obj = {};
    for(var i=0; i<alpha.length; i++){
        if(obj[alpha[i]] ===undefined){
             obj[alpha[i]]=0;
        }
        
    }
    for(var i=0; i<N; i++){
        if(obj[string[i]] == undefined){
            obj[string[i]]=1;
        }
        else{
            obj[string[i]] =obj[string[i]]+1
        }
    }
    for(var k  in obj){
        if(obj[k] >0){
            console.log(k +"-"+ obj[k])
        }
    }
  }