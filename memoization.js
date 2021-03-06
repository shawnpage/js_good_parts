// var fibonacci = (function(n) {
//     var memo = [0, 1];

//     var fib = function(n) {
//         var result = memo[n];

//         if ( typeof result !== 'number') {
//             result = fib(n-1) + fib(n-2);
//             memo[n] = result;
//         }
//     };
//     return fib;
// }());

// for (var i = 0; i < 10; i += 1) {
//     console.log('// ' + i + ': ' + fibonacci(i));
// }

var memoizer = function(memo, formula) {
    var recur = function(n) {
        var result = memo[n];
        if ( typeof result !== 'number' ) {
            result = formula(recur, n);
            memo[n] = result;
        }
        return result;
    };
    return recur;
};

var fibonacci = memoizer([0,1], function(recur, n) {
    return recur(n-1) + recur(n-2);
});

for (var i = 0; i < 10; i += 1) {
    console.log('// ' + i + ': ' + fibonacci(i));
}

var factorial = memoizer([1,1], function(recur, n) {
    return n * recur(n-1);
});

for (var i = 0; i < 10; i += 1) {
    console.log('// ' + i + ': ' + factorial(i));
}

