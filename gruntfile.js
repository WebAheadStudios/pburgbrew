// Gruntfile.js
module.exports = function (grunt) {
    'use strict';
    // load configs
    require('load-grunt-config')(grunt, {
        init: true
    });

    // load all grunt-tasks
    require('load-grunt-tasks')(grunt);

    // load custom tasks
    // grunt.loadTasks('tasks');

    // measures the time each task takes
    require('time-grunt')(grunt);

    grunt.registerTask('default', ['less:production', 'cssmin:production', 'concat:production', 'uglify:production']);
};
