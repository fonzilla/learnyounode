var fs = require('fs');
var path = require('path');

module.exports = function(directory, str, callback) {
	fs.readdir(directory,function(err,data){
		if(err)
			return callback(err);

		data = data.filter(function(file){
			return path.extname(file) === '.' + str;
		})
		callback(null,data);
	})
}