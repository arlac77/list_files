"use strict";

var path     = require('path')
   ,fs       = require('fs')
   ,async    = require('async');

/**
 * list_files(base, dir, regex, iterator, callback)
 * - base (String): source file
 * - dir (String): source file
 * - regex (String): source file
 * - iterator (Object): to be invoked for each matching file
 * - callback (Object): to be invoked at the end of the file list process
 *
 * walks throug a direcotry and calls iterator. 
 **/
function list_files(base,dir,regex,iterator,callback)
{
    fs.readdir(path.join(base,dir), function(error, files) {
        if(error) { iterator(error); if(callback) callback(error); return; }

		var f = [];

		for(var i in files) {
			f.push(path.join(base,dir,files[i]));
		}

		var subdirs = 0;

		async.map(f,fs.stat,function(error, stats) {
        	if(error) { iterator(error); if(callback) callback(error); return; }
			for(var i in stats) {
				var file = files[i];
	            if(file.charAt(0) === '.') continue;
	
	        	if(stats[i].isDirectory()) {
					subdirs++;
	      			list_files(base,path.join(dir,file),regex,iterator,function(error) { subdirs--; if(callback && subdirs === 0) callback(error); });
				}
	       		else {
					if(file.match(regex))
	       				iterator(undefined,path.join(dir,file),stats[i]);
				}
			}

			if(callback && subdirs === 0) callback(error);
		});
    });
}

exports.list_files        = list_files;
