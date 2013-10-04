// exceptions

var add = function (a, b) {
	if (typeof a !== 'number' || typeof b !== 'number') {
		throw {
			name: 'TypeError',
			message: 'add needs numbers'
		};
	}
	return a + b;
};

// Make a try_it function that calls the new add
// function incorrectly.

var try_it = function () {
	try {
		add("seven");
	} catch (e) {
		console.log(e.name + ' : ' + e.message);
	}
};
