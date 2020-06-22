function constructor(target) {
    let n = target.length
    let sum = 0
    let startingArray = []
    let isPossible
    for (let i = 0;i < n;i++){
        startingArray[i] = 1
    }
    for (let i = 0;i < n;i++) {
        for (let j = 0; j < n; j++) {
            sum += startingArray[j]
            for (let k = 0; k < n; k++) {
                if (sum === target[k]) {
                    startingArray[k] = target[k]
                    sum = 0
                }
            }
        }
    }
    //lets check if these arrays are equal
    for (let i = 0;i < n;i++){
        if (startingArray[i] !== target[i]){
            isPossible = false
        }
        else {
            isPossible = true
        }
    }
    return isPossible
}
console.log("Hedef Dizi:","[8,5,3]","Mümkün :",constructor([8,5,3]))