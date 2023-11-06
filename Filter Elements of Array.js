/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var filter = function(arr, fn) {
    var n = arr.length;
    var ans = [];
    for(var i = 0; i<n; i++){
        if(fn(arr[i], i)){
            // ans.push(fn(arr[i], i));
            ans.push(arr[i]);
        }
    }  
    return ans;
};