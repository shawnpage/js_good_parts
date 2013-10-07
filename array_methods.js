// Add a method conditionally.
Function.prototype.method = function (name, func) {
    if ( !this.prototype[name] ) {
        this.prototype[name] = func;
        return this;
    }
};

Array.method('reduce', function(f, value) {
    var i;

    for (i = 0; i < this.length; i += 1) {
        value = f(this[i], value);
    }
    return value;
});

var data = [4, 8, 15, 16, 23, 42];

var add = function(a,b) {
    return a + b;
}

var mult = function(a,b) {
    return a * b;
}

var sum = data.reduce(add, 0);
console.log('sum: ' + sum);


var product = data.reduce(mult, 1);
console.log('product: ' + product);

data.total = function() {
    return this.reduce(add,0);
};

total = data.total();
console.log('total: ' + total);

Array.dim = function(dimension, initial) {
    var a = [], i;

    for ( i = 0 ; i < dimension; i += 1) {
        a[i] = initial;
    }
    return a;
};

var myArray = Array.dim(10,0);

var matrix = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8]
];

console.log('matrix 2 1: ' + matrix[2][1]);

var i;
var n = 5;
var my_array = [];
for ( i = 0; i < n; i += 1) {
    my_array[i] = [];
}

Array.matrix = function(m, n, initial) {
    var a, i, j, mat = [];

    for (i = 0; i < m; i += 1) {
        a = [];
        for (j = 0; j < n; j +=1 ) {
            a[j] = initial;
        }
        mat[i] = a;
    }
    return mat;
};

var myMatrix = Array.matrix(4, 4, 0);

//console.log(myMatrix[3][3]);

Array.identity = function(n) {
    var i, mat = Array.matrix(n, n, 0);
console.log(mat);
    for (i = 0; i < n; i += 1) {
        mat[i][i] = 1;
    }
    return mat;
}

myMatrix = Array.identity(4);
//console.log(myMatrix);
