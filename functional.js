// Add a method conditionally.
Function.prototype.method = function (name, func) {
    if ( !this.prototype[name] ) {
        this.prototype[name] = func;
        return this;
    }
};

Object.method('superior', function(name) {
    var that   = this,
        method = that[name];

    return function() {
        return method.apply(that, arguments);
    };
});

var mammal = function(spec) {
    var that = {};

    that.get_name = function() {
        return spec.name;
    };

    that.says = function() {
        return spec.saying || '';
    };

    return that;
};

var myMammal = mammal({name: 'Herb'});

var cat = function(spec) {
    spec.saying = spec.saying || 'meow';
    var that = mammal(spec);
    that.purr = function(n) {
        var i, s = '';
        for ( i = 0; i < n; i += 1) {
            if (s) {
                s += '-';
            }
            s += 'r';
        }

        return s;
    };
    
    that.get_name = function() {
        return this.says() + ' ' + spec.name + ' ' + this.says();
    };

    return that;
};  

var myCat = cat({name: 'Henrietta'});

var coolcat = function(spec) {
    var that = cat(spec),
        super_get_name = that.superior('get_name');
    that.get_name = function(n) {
        return 'like ' + super_get_name() + ' baby';
    };
    return that;
};

var myCoolCat = coolcat({name: 'Bix'});
var name = myCoolCat.get_name();

