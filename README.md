# list_files

crawls a directory for files.



list_files  = require('../lib/list_files').list_files;


## Quick Examples

	var cache = "CACHE MANIFEST\n# version 1\n\nCACHE:\n";

	list_files("docroot",
		'',
		/.*\.js$/,
		function(error, file, fstat) {
			// each matching file
			cache += file + "\n";
		},
		function(error) {
			// in the end
			cache += "\nNETWORK:\n";
  	});

## Download

	Releases are available for download from
	[GitHub](git@github.com:arlac77/list_files.git).
