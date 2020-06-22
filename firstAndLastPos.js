//Problem name is "First and Last Position of Element in Sorted Array" and ID is 34 in LeetCode

//A Function that gives us an array as long as we want

function gimmeArray(Len) {
    let A = []
    for (let i = 0; i < Len; i++) {
        A[i] = Math.floor(Math.random() * 10) + 1
    }
    return A
}

//A Function that sorts the given array
function sortingMachine(myArray) {
    myArray.sort(function (a, b) {
        return (a - b)
    })
    return myArray
}

//Position finder
function findPos(array, target) {
    let first = -1
    let last = -1
    let pos = []
    for (let i = 0; i < array.length; i++) {
        if (array[i] === target) {
            first = i
            break
        }

    }
    for (let i = array.length - 1; i => 0; i--) {
        if (array[i] === target) {
            last = i
            break
        }
    }
    pos[0] = first
    pos[1] = last
    return pos
}

A = gimmeArray(6)
sortingMachine(A)
pos = findPos(A, 6)

console.log("Our Array is :[" + A + "]")
console.log("Sorted Format is :[" + A + "]")
console.log("First and Last Positions of Our Target is :[" + pos + "] \t\t " +
    "**İf positions are [-1,-1] it means the target does not exist in the array.**")