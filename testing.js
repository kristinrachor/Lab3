/**
 * Created by racho008 on 1/28/14.
 */
var assert = require("assert");
var countWords = require('./functions').countWords;
var saveWords = require('./functions').saveWords;

describe('Count words', function () {
    describe('test 1', function () {
        it('should be the length of the given string', function () {
            assert.equal(countWords("Blah"), 4);
        })
    });
});

describe('Save words', function () {
    describe('test 1', function () {
        it('should add the string to the array', function () {
            var array = [];
            var str = "Hello my name is Computer";
            var myArray = new Array("Hello my name is Computer");
            saveWords(array, str);
            assert.deepEqual(array, myArray);
        })
    });
});