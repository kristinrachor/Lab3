/**
 * Created by racho008 on 1/28/14.
 */
var assert = require("assert");
var countWords = require('./functions').countWords;

describe('Count words', function () {
    describe('test 1', function () {
        it('should be the length of the given string', function () {
            assert.equal(countWords("Blah"), 4);
        })
    });
});