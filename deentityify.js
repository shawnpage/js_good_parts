// The prototypes of the basic types are public structures, so care
// must be taken when mixing libs. One defensive technique is to add a
// method only if the method is known to be missing.

// // Add a method conditionally.
Function.prototype.method = function(name, func) {
    if( !this.prototype[name] ) {
        this.prototype[name] = func;
        return this;
    }
};

// By augmenting Function.prototype with a 'method' method, we no longer have
// to type the of the 'prototype' property.
// Function.prototype.method = function (name, func) {
//     this.prototype[name] = func;
//     return this;
// };


// module example
// replace html entities with their equivalents
// store entity equivalent pairs in a closure

String.method('deentityify', function() {
    // The entity table.  It maps entity names to characters.

    var entity = {
        quot : '"',
        lt   : '<',
        gt   : '>'
    };

    // Return the deentityify method.
    return function() {
        // This is the deentityify method. It calls the string replace
        // method, looking for substrings that start with '&' and end
        // with ';'.  If the characters in between are in the entity
        // table, then replace the entity with the character from the
        // table. It uses a regular expression.
        
        return this.replace(/&([^&;]+);/g,
            function(a, b) {
                var r = entity[b];
                return typeof r === 'string' ? r : a;
            }
        );
    };
}());

console.log('&lt;&quot;&gt;'.deentityify());


