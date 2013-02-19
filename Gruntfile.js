module.exports = function(grunt) {
  grunt.initConfig({
	pkg: grunt.file.readJSON('package.json'),
	
    jslint: {
      files: [
        'list_files.js'
      ]
    },
	jsdoc: {
		dist : {
			src: [ 'list_files.js' ], 
			dest: 'doc'
		}
	}
  });

  grunt.registerTask('default', [ 'jslint' ] );
  grunt.loadNpmTasks('grunt-jsdoc');
  grunt.loadNpmTasks('grunt-jslint');
};
