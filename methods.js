var a = ['a', 'b', 'c'];
var b = ['x', 'y', 'z'];

// var c = a.concat(b, true);
// console.log(c);

// a.push('d');

// var c = a.join('');
// console.log(c);

// var c = a.pop();

var c = a.push(b, true);
console.log(c);

var rev = a.reverse();
console.log(rev);

var n = [4, 8, 15, 16, 23, 42];

//n.sort();

n.sort(function(a,b) {
    return a - b;
});

