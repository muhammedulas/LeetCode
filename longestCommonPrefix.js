//Problem name is "Longest Common Prefix" and ID is 14 in LeetCode

//Main Function
function longestCommonPrefix(strs) {
    //There is a few ways to approach. We will use letter by letter in this function
    if (strs.length === 0) return ""
    if (strs.length === 1) return strs[0]
    //selectig first string for comparison
    let firstStr = strs[0]
    let prefix = ""
    let check = 0
    //Taking letters and comparing with other strings letters which on the same index
    for (let i = 0; i < firstStr.length - 1; i++) {
        let j = 1
        //For switching string to compare
        while (j <= strs.length - 1) {
            let cacheStr = strs[j]
            if (firstStr[i] === cacheStr[i]) check += 1
            else return prefix
            //if all strings passed the check adding letter at current index to prefix string
            if (check === strs.length - 1) {
                prefix += firstStr[i]
                check = 0
            }

            j++
        }

    }
    return prefix
}

console.log(longestCommonPrefix(["flow", "flower", "flight"]))