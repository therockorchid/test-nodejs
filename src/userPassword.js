var crypto = require('crypto');

//function to hash password
module.exports = function(self) {

	self = self || {};

	var
		password,
		hash;

	self.setPassword = (passwd) => {
		password = passwd;

		hash = crypto.createHash('sha256').update(password).digest('hex');
	};

	self.getPassword = () => {
		return hash;
	};

	return self;
};
