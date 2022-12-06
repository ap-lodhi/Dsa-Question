// Given an array of integers and a number k, find the maximum sum of a subarray of size k. 

// Examples: 

// Input  : arr[] = {100, 200, 300, 400}
//          k = 2
// Output : 700

// Input  : arr[] = {1, 4, 2, 10, 23, 3, 1, 0, 20}
//          k = 4 
// Output : 39
// We get maximum sum by adding subarray {4, 2, 10, 23}
// of size 4.

// Input  : arr[] = {2, 3}
//          k = 3
// Output : Invalid
// There is no subarray of size 3 as size of whole
// array is 2. 
// Recommended Problem
// Max Sum Subarray of size K
// Misc
// prefix-sum
// +1 more
// OYO Rooms
// Solve ProblemSubmission count: 54.7K
// A Simple Solution is to generate all subarrays of size k, compute their sums and finally return the maximum of all sums. The time complexity of this solution is O(n*k).

// An Efficient Solution is based on the fact that sum of a subarray (or window) of size k can be obtained in O(1) time using the sum of the previous subarray (or window) of size k. Except for the first subarray of size k, for other subarrays, we compute the sum by removing the first element of the last window and adding the last element of the current window.



function maxSum(arr,n,k)
    {
        // k must be smaller than n
        if (n < k)
        {
            document.write("Invalid");
            return -1;
        }
     
        // Compute sum of first window of size k
        let res = 0;
        for (let i=0; i<k; i++)
        res += arr[i];
     
        // Compute sums of remaining windows by
        // removing first element of previous
        // window and adding last element of
        // current window.
        let curr_sum = res;
        for (let i=k; i<n; i++)
        {
            curr_sum += arr[i] - arr[i-k];
            console.log(curr_sum, "current sum ")
            res = Math.max(res, curr_sum);
        }
     
        return res;
    }
     
    /* Driver program to test above function */
     
        let arr = [1, 4, 2, 10, 2, 3, 1, 0, 20];
        let k = 4;
        let n = arr.length;
        console.log(maxSum(arr, n, k));