module.exports = function(x) {
    // Return false if input variable is null or undefined or length of string/array/object is 0 or containing just whitespaces.
    if (x === null || x === undefined || x.length === 0 || Object.keys(x).length === 0 || !/\S/.test(x)){
        return false
    }
    // Return true for otherwise
    else{
        return true
    }
}