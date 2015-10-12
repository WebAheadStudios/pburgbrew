module.exports = {
    options: {
        debug: true
    },
    production: {
        files: [{
            expand: true,
            cwd: 'assets/css',
            src: ['*.css', '!*.min.css'],
            dest: 'assets/css',
            ext: '.min.css'
        }]
    }
};
