module.exports = function(grunt) {
  grunt.initConfig({
	pkg: grunt.file.readJSON('package.json'),
	
    jslint: {
		files: [ 'list_files.js' ]
    },
	jsdoc: {
		dist : {
			src: [ 'list_files.js' ], 
			dest: 'doc'
		}
	},
	vows : {
	    options : {
	      reporter : "spec"
	    },
	    all : {
	      src : [ "<%= allTests %>" ]
	    }
	},
	allTests : "tests/*"
  });

  grunt.registerTask('default', [ 'jslint' ] );
  grunt.loadNpmTasks('grunt-jsdoc');
  grunt.loadNpmTasks('grunt-jslint');
  grunt.loadNpmTasks('grunt-vows-runner');
};
