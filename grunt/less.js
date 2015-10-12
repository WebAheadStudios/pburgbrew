module.exports = function (grunt) {
    "use strict";
    var Autoprefix = new require("less-plugin-autoprefix");
    var lessAutoPrefix = new Autoprefix({
        browsers: ["last 2 version"]
    });
    var Cleancss = new require("less-plugin-clean-css");
    var lessCleanCss = new Cleancss({
        debug: true
    });

    return {
        options: {
            paths: ["assets/less"],
            banner: "/*! Philipsburg Brewing Co. (c) 2015 */",
            globalVars: {
                imgPath: "'http://images.philipsburgbrewingcompany.com'"
            }
        },
        production: {
            options: {
                plugins: [
                    lessAutoPrefix,
                    lessCleanCss
                ],
            },
            files: {
                "assets/css/template.css": ["assets/less/template.less"]
            }
        }
    };
};
