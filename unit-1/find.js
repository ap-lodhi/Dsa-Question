// 5
// acBDb

// output = 0
// cap = -
// small = +

function runProgram(input) {
    input = input.split("\n");
   var n = +input[0];
  var str = input[1]
  var cap = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
  var small = "abcdefghijklmnopqrstuvwxyz"
  var plus = 0
  var minus = 0
  for(var i=0; i<str.length; i++){
      for(var j=0; j<cap.length; j++){
          if(str[i] ==cap[j] ){
              minus += j+1
          }
          else if(str[i] ==small[j]){
              plus += j+1 
          }
      }
  }
  
  var ans  = plus -minus
  console.log(ans)
  
   
  
 
  

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
