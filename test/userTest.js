var  user = require('../src/user.js');
var crypto = require('crypto');
var mocha = require('mocha');
var assert = require('chai').assert;

describe('#user', () => {
	it('should return the correct user name', () => {
		var name = 'rockorchid';

        var newUser = new user();

        assert.equal(name, newUser.getName());
	});
});