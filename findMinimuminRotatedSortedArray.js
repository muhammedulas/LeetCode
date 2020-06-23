//Problem name is Find Minimum in Rotated Sorted Array and ID is 154

//Actually there is an easy way to solve this problem with 2 basic lines of code like;
/* nums.sort(function(a,b){return(a-b)})
   return nums[0]  but i think there is a reason for classifying this problem as "hard". so i decided to write sorting
   function myself.
 */

//Sorting Function (Insertion Sort Method(WorstCase Complexity is O(n^2)))
function homeMadeSorter(arr) {
    let length = arr.length;
    //Starting from 1 for checking backward
    for (let i = 1; i < length; i++) {
        // selecting current item to comparison
        let key = arr[i];
        let j = i - 1;
        //decreases j if current item is smaller than previous
        while (j >= 0 && arr[j] > key) {
            arr[j + 1] = arr[j];
            j--;
        }
        arr[j + 1] = key;
    }
    //returning the first and smallest item in array
    return arr[0];
}


//Driver code
console.log(homeMadeSorter([1, 3, 6, 5]))
//or
let minimum = homeMadeSorter([1, 3, 6, 5])
console.log(minimum)