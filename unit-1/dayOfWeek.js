function dayOfTheWeek(day, N) {
    var days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
const dayMap = new Map();
for(var i=0; i<7; i++){
    dayMap.set(i, days[i]);
}
console.log(dayMap)
var k =0 ;
for(const [key, value] of dayMap){
    if(day === value){
    k = (key+(N%7))%7;
    }
    
}
console.log(dayMap.get(k));




}
var day = 'wednesday'
var N =5
var ans  = dayOfTheWeek(day,N)