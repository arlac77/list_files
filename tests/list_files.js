var vows     = require('vows'),
	path     = require('path'),
    fs       = require('fs'),
	mkdirp   = require('mkdirp'),
	assert   = require('assert'),
    list_files  = require('../list_files').list_files;

var testdir = path.join("/tmp","vows" + process.pid);

mkdirp.sync(path.join(testdir,'dir1'),'0755');
fs.writeFileSync(path.join(testdir,'dir1','file1'),'123');

mkdirp.sync(path.join(testdir,'dir1','dir1_1'),'0755');
fs.writeFileSync(path.join(testdir,'dir1','dir1_1','file1_1'),'1234');

mkdirp.sync(path.join(testdir,'dir2','dir2_1'),'0755');
fs.writeFileSync(path.join(testdir,'dir2','dir2_1','file2_1'),'12345');

vows.describe('list_files').addBatch({
    'none existing base dir': {
        topic: function() {
			var cb = this.callback;
			list_files('/not existing dir/dfsdfd/','','.*',function(error,file,stat) { }, function(error) {cb(null,error);});
		},
        'final callback': function(unused,error) {
			assert.isNotNull(error);
        }
	},
    'none existing dir base iterator': {
        topic: function() {
			list_files('/not existing dir/dfsdfd/','','.*',this.callback);
		},
        'iterator': function(error,file,stat) {
			assert.isNotNull(error);
        }
	}
}).addBatch({
    'simple recursive list callback': {
        topic: function() {
			list_files(testdir,'','.*',function(error,file,stat) { console.log(file); }, this.callback);
		},
        'final callback': function(error) {
			assert.ifError(error);
        }
	},
    'simple recursive list iterator': {
        topic: function() {
			var t = this;
			var files = {};
			list_files(testdir,'','.*',function(error,file,fstat) { files[file] = fstat.size; }, function(error) { t.callback(error,files); } );
		},
        'iterator': function(error,files) {
			assert.isNull(error);
			assert.deepEqual({ 'dir1/file1' : 3, 'dir1/dir1_1/file1_1' : 4, 'dir2/dir2_1/file2_1' : 5 }, files);
        }
	},
    'filter recursive list iterator': {
        topic: function() {
			var t = this;
			var files = {};
			list_files(testdir,'','.*1_1',function(error,file,fstat) { files[file] = fstat.size; }, function(error) { t.callback(error,files); } );
		},
        'iterator': function(error,files) {			
			assert.isNull(error);
			assert.deepEqual({ 'dir1/dir1_1/file1_1' : 4 }, files);
        }
	}
}).export(module);

