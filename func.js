// Create a variable called add and store a function
// in it that adds two numbers.

var add = function (a,b ) {
  return a + b;
};

function minus (a, b) {
//console.log(this);
//console.log(arguments);
  return a - b;
};

// Create myObject.  It has a value and an increment
// method.  The increment method takes an optional
// parameter.  If the argument is not a number, then 1
// is used as the default.

var myObject = {
    value: 0,
    increment: function (inc) {
    	this.value += typeof inc === 'number' ? inc : 1;
    }
};

myObject.double = function () {
	
	var that = this;  // workaround

	var helper = function () {
//		console.log(that);
// 		this.value = add(this.value, this.value);
		that.value = add(that.value, that.value);
	};

	helper();
};

myObject.double();
console.log(myObject.value);


// Create a constructor function called Quo.
// it makes an object with a tatus property.
var Quo = function (string) {
	this.status = string;
};

// Give all instances of Quo a public method
// called get_status.

Quo.prototype.get_status = function () {
	return this.status
};


// Make an instance of Quo.

var myQuo = new Quo("confused");
console.log(myQuo.get_status());

var array = [3,4];
var sum = add.apply(null, array);

var statusObject = {
	status: 'A-OK'
};

// statusObject does not inherit from Quo.prototype,
// but we can invoke the get_status method on
// statusObject even though statusObject does not have
// a get_status method.

var status = Quo.prototype.get_status.apply(statusObject);  // status is A-OK
