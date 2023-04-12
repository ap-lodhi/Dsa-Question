
function target_sum(arr, target) {
    arr.sort(function(a,b){
        return a-b
    })
    var left = 0;
    var right = arr.length;
    var sum = 0;
    var ans  = ""
    while (left < right) {
        sum = arr[left] + arr[right]
        if (sum == target) {
           ans +=  arr[left] + " "+  arr[right]
           return ans
        } else if (sum < target) {
            left++
        } else {
           right--
        }
    }
    return 0
}
var arr = [2, 4, 8, 9, 12]
var target = 1

console.log( target_sum(arr,target))