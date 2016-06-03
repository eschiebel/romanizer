"use strict";


module.exports = function(grunt) {

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        mochaTest: {
			test: {
				options: {
					reporter: 'spec'
				},
				src: ['test/**/*-test.js']
			}
		}
	});

    grunt.loadNpmTasks('grunt-mocha-test');

    grunt.registerTask('default', ['unittest']);
    grunt.registerTask('unittest', 'run unit tests', 'mochaTest');
}
