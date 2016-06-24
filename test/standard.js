'use strict';

var assert = require('assert');
var standard = require('../lib');

describe('standard', function() {
	it('should catch invalid params', function() {
		assert.throws(function() {
			standard();
		});
		assert.throws(function() {
			standard(12);
		});
		assert.throws(function() {
			standard('text');
		});
		assert.throws(function() {
			standard('text', 1);
		});
	});

	it('should convert ro', function() {
		var text = standard('Ţăpușor', 'ro');
		assert.equal(text, 'Țăpușor');
	});

});
