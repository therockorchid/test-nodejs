var  user = require('../src/userPassword');
var crypto = require('crypto');
var mocha = require('mocha');
var assert = require('chai').assert;

//test the password hashing function
describe('#user', () => {
	it('should return the correct hashed password', () => {
		var password = 'rockorchid';

        var hash = crypto.createHash('sha256').update(password).digest('hex');

        var newUser = new user();

        newUser.setPassword(password);

        assert.equal(hash, newUser.getPassword());
	});
});
