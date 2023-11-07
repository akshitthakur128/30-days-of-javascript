/**
 * @param {...(null|boolean|number|string|Array|Object)} args
 * @return {number}
 */
var argumentsLength = function(...args) {
    var x = [...args];
    var len = x.length;
    return len;
};

/**
 * argumentsLength(1, 2, 3); // 3
 */