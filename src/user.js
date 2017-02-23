var crypto = require('crypto');

module.exports = (name) => {
	return name;
};

module.exports = function(self) {

	self = self || {};

	self.getName = () => {
		return "rockorchid";
	}

	return self;
};
