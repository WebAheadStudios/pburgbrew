module.exports = {
    options: {
        banner: '/*! Philipsburg Brewing Co. - v<%= package.version %> - ' +
        '<%= grunt.template.today("yyyy-mm-dd") %> */',
    },
    production: {
        files: {
            'assets/js/build.min.js': ['assets/js/build.js']
        }
    }
};
