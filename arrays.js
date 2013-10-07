var empty = [];

var numbers = [
    'zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven',
    'eight', 'nine', 'ten'
];

console.log(empty[1]);

console.log(numbers[1]);

console.log(empty.length);
console.log(numbers.length);o

var numbers_object = {
    0: 'zero', 1: 'one',
    2: 'two',  3:'three',
    4: 'four', 5: 'five',
    6: 'six',  7: 'seven',
    8: 'eight',9: 'nine',
   10: 'ten'
};


var misc = [
    'string', 98.6, true, false, null, undefined,
    ['nested', 'arrays'], {object: true}, NaN, Infinity
];

console.log(misc.length);

var myArray = [ 1, 2, 3];

myArray[9] = 'ten';

var i;
for ( i = 0; i < myArray.length; i +=1 ) {
    console.log(myArray[i]);
}

