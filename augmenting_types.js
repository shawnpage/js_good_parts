// By augmenting Function.prototype with a 'method' method, we no longer have
// to type the of the 'prototype' property.
Function.prototype.method = function (name, func) {
    this.prototype[name] = func;
    return this;
}

Number.method('integer', function () {
    return Math[this < 0 ? 'ceil' : 'floor'](this);
});

// console.log((-10/3));
// console.log((-10/3).integer());
// console.log((-1/3).integer());

String.method('trim', function () {
    return this.replace(/^\s+|\s+$/g, '');
});

//console.log('"' + "    neat    ".trim() + '"');

// The prototypes of the basic types are public structures, so care
// must be taken when mixing libs. One defensive technique is to add a
// method only if the method is known to be missing.

// Add a method conditionally.
Function.prototype.method = function (name, func) {
    if ( !this.prototyp[name] ) {
        this.prototype[name] = func;
        return this;
    }
};
