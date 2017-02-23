var  user = require('../src/user.js');
var crypto = require('crypto');
var mocha = require('mocha');
var assert = require('chai').assert;

describe('#user', () => {
	it('should return the correct hashed password', function() {
		var name = 'rockOrchid';

        var newUser = new user();

        assert.equal(name, newUser.getName());
	});
});