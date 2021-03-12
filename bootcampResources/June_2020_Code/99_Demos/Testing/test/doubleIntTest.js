var assert = require('assert');
var double = require('../double');

// starts a suite of tests
describe(
    '1. Test if the double.js doubles',
    function(){
        // a single test
        it('1.1. should return 4 if i pass in 2', function(){
            var result = double(2);
            assert.equal(result, 4);
        });
        // a single test
        it('1.2 should return -4 if I pass in -2', function(){
            var result = double(-2);
            assert.equal(result, -4);
        })
    }
)