/**
 * Created by racho008 on 1/28/14.
 */
var assert = require("assert");
var fun = require('./functions').fun;
var idontcare = fun();


describe('Save words', function () {
    describe('test 1', function () {
        it('should add the string to the array', function () {
            var array = [];
            var str = "Hello my name is Computer";
            var myArray = new Array("Hello my name is Computer");
            idontcare.saveWords(str);
            assert.deepEqual(idontcare.saves, myArray);
        })
    });
    describe('test 2', function (){
        it('should add the string to the array and take away an element', function (){
            var array = ["hello", "my", "name", "is", "computer"];
            var str = "hi";
            var myArray = ["hi", "hello", "my", "name", "is"];
            idontcare.saveWords(str);
            assert.deepEqual(idontcare.saves, myArray);
        })
    });
});