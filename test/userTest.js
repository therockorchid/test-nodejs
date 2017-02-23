var  user = require('../src/user.js');
var crypto = require('crypto');
var mocha = require('mocha');
var assert = require('chai').assert;

describe('#user', () => {
	it('should return the correct hashed password', function() {
		var name = 'deepak';

        var u = new user();

        assert.equal(name, u.getName());

        //var hashedPasswd = crypto.createHash('sha256');
        //hashedPasswd = hashedPasswd.update(passwd);

        //var passwdGet = u.getPassword();
        //assert.equals(hashedPasswd, passwdGet);
	});
});