# list_files

crawls a directory for files.

[![Build Status](https://secure.travis-ci.org/arlac77/list_files.png)](http://travis-ci.org/arlac77/list_files)


## IMPORTANT

**You need node v0.6 or higher to run this program.**


## Quick Examples

	var list_files  = require('../lib/list_files').list_files;

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
	
## Legal Stuff

"list_files" is owned by Markus Felten.  All
rights not explicitly granted in the MIT license are reserved. See the
included LICENSE file for more details.

"Node.js" and "node" are trademarks owned by Joyent, Inc.

