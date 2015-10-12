module.exports = {
    options: {
        banner: '/*! Philipsburg Brewing Co. - v<%= package.version %> - ' +
        '<%= grunt.template.today("yyyy-mm-dd") %> */',
    },
    production: {
        src: [
            'assets/js/bootstrap-3.1.1.min.js',
            'assets/js/jquery.isotope.min.js',
            'assets/js/jquery.singlePageNav.min.js',
            'assets/js/main.js'
        ],
        dest: 'assets/js/build.js'
    }
};
