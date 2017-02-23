var  user = require('../src/user.js');
var crypto = require('crypto');
var mocha = require('mocha');
var assert = require('chai').assert;

describe('#user', () => {
	it('should return the correct user name', () => {
		var name = 'rockorchid';

		/*
		check the difference in implementation in user.js
		Compared to the below test you wont be able to do below for this test
		
		var newUser = new user();

        TypeError: user is not a constructor
        at Context.it (test/userTest.js:11:17)
		*/
		
		assert.equal(name, user(name));
	});

	it('should return the correct user name', () => {
		var name = 'rockorchid';

        var newUser = new user();

        assert.equal(name, newUser.getName());
	});
});