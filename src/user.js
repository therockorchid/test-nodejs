var crypto = require('crypto');

module.exports = function(self) {

	self = self || {};

	self.getName = () => {
		return "rockorchid";
	}

	return self;
};
