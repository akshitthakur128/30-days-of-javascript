/**
 * @param {integer} init
 * @return { increment: Function, decrement: Function, reset: Function }
 */
var createCounter = function(init) {
    var check = init;
    return {
        increment(){
            init = init + 1;
            return init;
        },
        decrement(){
            init = init -1;
            return init;
        },
        reset(){
            // init = init;
            init = check;
            return init;
        } 
    }
};

/**
 * const counter = createCounter(5)
 * counter.increment(); // 6
 * counter.reset(); // 5
 * counter.decrement(); // 4
 */