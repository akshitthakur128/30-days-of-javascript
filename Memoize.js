/**
 * @param {Function} fn
 * @return {Function}
 */
function memoize(fn) {
    const myMap = new Map();
    return function(...args) {
    const s = args.toString();
    if(s in myMap){
        return myMap[s];
    }
    else{
        var ans = fn(...args);
        myMap[s] = ans;
        return ans;
    }
    }
}


/** 
 * let callCount = 0;
 * const memoizedFn = memoize(function (a, b) {
 *	 callCount += 1;
 *   return a + b;
 * })
 * memoizedFn(2, 3) // 5
 * memoizedFn(2, 3) // 5
 * console.log(callCount) // 1 
 */