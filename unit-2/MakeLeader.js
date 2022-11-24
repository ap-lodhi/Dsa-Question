// Make Leaderboard Ended
// Description

// You are given name and marks of N different students in a hackerrank contest. Your task is to write a program that makes leaderboard of the students under following conditions:

// - If two students get same marks they get same rank

// - The student placed next to the same marks students will get the rank skipping the intermediate ranks.

// Refer to the sample test case for better understanding

// Note : You cannot use built-in sort function. Using that can lead to disqualification. Write your own sorting algorithm


// Input
// Input Format :
// First line of input contains N

// Next N line contains name and marks respectively of N different students (where name and marks is separated by a space)



// Constraints :

// N < 100


// Output
// Output N names with their rank. Follow these rules for generating the list:

// 1. The students having more mark gets better rank

// 2. If students have similar mark, their rank will be same(In case of similar marks, the person whose name comes first in alphabetical order comes first in order. However their rank will be same)

// 3. The student placed next to the same marks students will get the rank skipping the intermediate ranks.


// Sample Input 1 

// 6
// rancho 45
// chatur 32
// raju 30
// farhan 28
// virus 32
// joy 45
// Sample Output 1

// 1 joy
// 1 rancho
// 3 chatur
// 3 virus
// 5 raju
// 6 farhan
function swap_or_not(a,b){
    var len = Math.min(a.length,b.length);
    for(var i=0; i<len; i++){
        if(a[i] != b[i]){
            if(a[i]>b[i]){
                return true;
            }
            else{
                return false;
            }
        }
    }
    return false; 
    } 
    function swap(name,marks,i,j){
         var temp =name[i];
         name[i]= name[j];
         name[j]=temp;
         var temp1 = marks[i];
         marks[i] =marks[j];
          marks[j] =temp1;
      }
    
      
    // function rank_list(marks,name){
    //  var prev =-1;
    //  var rank =1;
    //  var count =0;
    //  for(var i=0; i<marks.length; i++){
    //      if(name[i] == prev){
    //          console.log(rank +" " +marks[i]);
    //      }
    //      else{
    //          rank +=count;
    //          console.log(rank +" " +marks[i]);
    //          count=0;
    //      }
    //      count++;
    //      prev =name[i];
    //  }
    // }
    
    function runProgram(input) {
      input = input.split("\n");
      var t = +input[0];
      var marks = [];
      var name = [];
      for(var i=1; i<=t; i++){
          var a = input[i].split(" ");
          name.push(a[0]);
          marks.push(+a[1]);
        
      }
    
        for(var i=0; i<marks.length-1; i++){
            for(var j=0; j<marks.length-i-1; j++){
                if(swap_or_not(name[j],name[j+1])=== true){
                    swap(name,marks, j,j+1);
                }
            }
        }
        for(var i=0; i<marks.length-1; i++){
            for(var j=0; j<marks.length-i-1; j++){
                if(marks[j] <marks[j+1]){
                    swap(name,marks,j,j+1)
                }
            }
        }
         var prev =-1;
     var rank =1;
     var count =0;
     for(var i=0; i<marks.length; i++){
         if(marks[i] == prev){
             console.log(rank +" " +name[i]);
         }
         else{
             rank +=count;
             console.log(rank +" " +name[i]);
             count=0;
         }
         count++;
         prev =marks[i];
     }
    //console.log(name)
    //console.log(marks)
        
     //var ans  = rank_list(name,marks)
     //console.log(ans)
     }