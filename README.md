crawls a directory for files.



list_files  = require('../lib/list_files').list_files;


var cache = "CACHE MANIFEST\n# version 1\n\nCACHE:\n";

list_files("docroot",
	'',
	/.*\.js$/,
	function(error,file) {
		cache += file + "\n";
	},
	function(error) {
		cache += "\nNETWORK:\n";
  	});
