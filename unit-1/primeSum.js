/*/
Prime Sum Up Ended
Description

You are given a number, stored in a variable with the namenum. Find out the sum of all prime numbers in the range of [1,num], including the value stored innum


Input
The first and the only line of the input contains the value stored innum


Output
Print the sum of all prime numbers in the range of[1,num], includingnumitself


Sample Input 1 

13
Sample Output 1

41
Hint

In the sample test case, the value stored innum = 13. Therefore, all the prime numbers, in the range of[1,num]are

2
3
5
7
11
13
Therefore, the sum of prime numbers becomes,2 + 3 + 5 + 7 + 11 + 13 = 41, which is the required answer
*/






function primeSumUp(num) {
    // Write code here
    var sum = 0;
    for(var j=2; j<=num; j++){
        var  prime=primeCheck(j)
            if(prime){
                sum+=j
            }
            }
            console.log(sum)
            function primeCheck(n){
                for(var i=2; i*i<=n; i++){
                    if(n%i ==0){
                        return false;
                    }
                }
                return true;
            }
    
    
    
    
}
