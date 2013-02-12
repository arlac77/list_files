module.exports = function(grunt) {
  grunt.initConfig({
    test: {
      all: ['test/**/*.js']
    },
    lint: {
      all: [
        'grunt.js',
        '*.js'
      ]
    },
	jsdoc: {
	        dist : {
	            src: ['*.js', 'tests/*.js'], 
	            dest: 'doc'
	        }
	    },
    watch: {
      scripts: {
        files: '<config:lint.all>',
        tasks: 'lint test'
    }
    },
    jshint: {
      options: {
        curly: true,
        eqeqeq: true,
        immed: true,
        latedef: true,
        newcap: true,
        noarg: true,
        sub: true,
        undef: true,
        boss: true,
        eqnull: true,
        node: true,
        es5: true,
        strict: false,
		laxcomma: true
      },
      globals: {}
    }
  });

  grunt.registerTask('default', 'lint test');
  grunt.loadNpmTasks('grunt-jsdoc-plugin');
};
