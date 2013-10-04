// Add a method conditionally.
Function.prototype.method = function (name, func) {
    if ( !this.prototype[name] ) {
        this.prototype[name] = func;
        return this;
    }
};

var add = function (a, b) {
	if (typeof a !== 'number' || typeof b !== 'number') {
		throw {
			name: 'TypeError',
			message: 'add needs numbers'
		};
	}
	return a + b;
};


Function.method('curry', function() {
    var slice = Array.prototype.slice,
        args = slice.apply(arguments),
        that = this;

    return function() {
console.log(args);
        return that.apply(null, args.concat(slice.apply(arguments)));
    };
});

var add1 = add.curry(1);
console.log(add1(6)); // 7
