/**
 * @return {Function}
 */
var createHelloWorld = function() {
    
    return function(...args) {
    var ans = "Hello World";
    return ans;
    }
};

/**
 * const f = createHelloWorld();
 * f(); // "Hello World"
 */