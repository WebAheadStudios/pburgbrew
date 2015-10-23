module.exports = {
    options: {
        banner: '/*! Philipsburg Brewing Co. - v<%= package.version %> */',
    },
    production: {
        files: {
            'assets/js/build.min.js': ['assets/js/build.js']
        }
    }
};
