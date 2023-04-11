//  var myFirstWord = "Rahul";
//   var mySecondWord = "honest";
//   var myThirdWord = "hard working";
//   var myFourthWord = "employee";


//   var FinalSentence = myFirstWord + mySecondWord + myThirdWord + myFourthWord;
//   var FinalSentence = "myFirstWord" + "mySecondWord" + "myThirdWord" + "myFourthWord";
//   var FinalSentence = myFirstWord + "is a" + mySecondWord + "&" + myThirdWord + "" + myFourthWord + ".";
//   var FinalSentence = myFirstWord + " is a " + mySecondWord + " & " + myThirdWord + " " + myFourthWord + ".";



//   var FinalSentence = myFirstWord + " is a " + mySecondWord + " & " + myThirdWord + " & sincere " + myFourthWord + ".";
//   var FinalSentence = myFirstWord + " is a " + mySecondWord + " & " + myThirdWord + " & skilled " + myFourthWord + ".";
//   var FinalSentence = myFirstWord + "is a" + mySecondWord + "&" + myThirdWord + "& enthusiastic" + myFourthWord + ".";
//   var FinalSentence = myFirstWord + " is a " + mySecondWord + " & " + myThirdWord + " " + myFourthWord + ".";
// console.log(FinalSentence)



function resultAll(arr) {
       let result = 0;
      for (let k = 0; k < arr.length; k++) {
        for (let m = 0; m < arr[ k ].length; m++) {
          if( arr[ k ][ m ] > 9 ) {

              result += (arr[ k ][ m ]); 
          }
         }
      }
         return result;
     }
      
      resultAll ( [ [1, 2], [3, 4], [5, 6, 7] ] );
     