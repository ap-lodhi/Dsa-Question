function vowelsColumns(N,M, mat){
    //write code here
    for(var i =0; i<N; i++){
        var count = 0
        for(var j=0; j<M; j++){
            if(mat[j][i] == 'a' ||mat[j][i] == 'e' || mat[j][i] == 'i' ||  mat[j][i] == 'u' || mat[j][i] == 'o' ){
              count++  
            } 
        }
        if(count  > 0){
            console.log('Yes')
        }else{
            console.log("No")
        }
    }
  
}