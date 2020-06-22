//The Problem Name is "Median of Two Sorted Arrays" and ID number is 4 on LeetCode

//First thing to do is generating two arrays with this function
function arrayMaker(Len) {

    let A = []
    for (let i = 0;i < Len; i++){
        A[i] = Math.floor(Math.random() * 10) + 1
    }
    return A
}

//Then we'll sort those arrays
function sorter(myArray) {

    myArray.sort(function (a, b) {
        return (a - b)
    })
    return myArray

}

//merging arrays with concat method
function mergeArrays(a1, a2) {

    return a1.concat(a2)

}


function median(array) {

    let i
    let l = array.length
    if ((l %= 2) === 0) {

        let m1, m2, med;
        i = array.length / 2
        m1 = array[i]
        i--
        m2 = array[i]
        med = (m1 + m2) / 2
        return med

    } else {
        i = (array.length / 2) - 0.5
        return array[i]

    }

}



array1 = sorter(arrayMaker(3))
console.log("nums1 = " + array1)
array2 = sorter(arrayMaker(3))
console.log("nums2 = " + array2)
mergedArray = sorter(mergeArrays(array1, array2))
console.log("Merged Array = " + mergedArray)
result = median(mergedArray)
console.log("Median = " + result)



