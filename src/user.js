var crypto = require('crypto');

module.exports = function(self) {

	self = self || {};

	self.getName = () => {
		return "deepak";
	}

	/*self.setPassword = (password) => { 
		//take password and hash it
		var passwd = crypto.createHash('sha256');
		passwd = passwd.update(password); 
	};

	self.getPassword = () => {
		//return the hashed password
		return passwd; 
	}*/

	return self;
};

/*module.exports = (function(self) {

	self = self || {};

	self.setPassword = (password) => { 
		//take password and hash it
		var passwd = crypto.createHash('sha256');
		passwd = passwd.update(password); 
	};

	self.getPassword = () => {
		//return the hashed password
		return passwd; 
	}

	return self;
})({});*/