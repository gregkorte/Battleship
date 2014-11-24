/* global describe, it */
(function () {
	'use strict';
	describe('Give it some context', function () {
		describe('maybe a bit more context here', function () {
			it('should run here few assertions', function () {
			});
		});
	});
})()



// beforeEach(function(){
// 	previousResult = undefined;
// 	nextOperation = undefined;
// 	$('#displayoutput').val('');
// });

// function type(){
// 	var args = Array.prototype.slice.call(arguments);
// 	args.forEach(function(arg){
// 		press(arg);
// 	});
// }

// 	describe('Entering numbers', function(){
// 		describe('displayoutput', function(){
// 			it('should return the value of the display', function(){
// 				$('#displayoutput').val(1.23);
// 				assert.equal(displayOutput(), 1.23);
// 				$('#displayoutput').val(2.34);
// 				assert.equal(displayOutput(), 2.34);
// 			});
// 		});