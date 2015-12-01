module.exports = function(grunt) {

    /////////////////////////////////////////////////////////////////////////////////////////////
    //
    // GRUNT TASKS
    //
    /////////////////////////////////////////////////////////////////////////////////////////////

    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-requirejs');

    /////////////////////////////////////////////////////////////////////////////////////////////
    //
    // GRUNT CONFIG
    //
    /////////////////////////////////////////////////////////////////////////////////////////////

    grunt.initConfig({

        clean: ["sample/index-prod.js"],

        requirejs: {
            main: {
                options: {
                    "baseUrl": ".",
                    "paths": {
                        "css": "dev/css",
                        "css-builder": "dev/css-builder",
                        "json": "dev/json",
                        "normalize": "dev/normalize",
                        "require": "dev/require",
                        "text": "dev/text",

                        "ratchet": "empty:",
                        "alpaca": "empty:",
                        "bootstrap": "empty:",
                        "jquery": "empty:",
                        "jgrowl": "empty:",
                        "handlebars": "empty:",
                        "moment": "empty:",
                        "accounting": "empty:",
                        "oneteam": "empty:",
                        "content-helpers": "empty:",
                        "ui": "empty:",
                        "gitana": "empty:",

                        "app": "empty:"
                    },
                    "name": "sample/index",
                    "out": "sample/index-prod.js",
                    "excludeShallow": ["normalize", "css"],
                    "optimize": "uglify2",
                    //"optimizeCss": "none",
                    "insertRequire": ["sample/index"]

                }
            }
        }

    });

    grunt.registerTask('default', ["clean", "requirejs"]);

};
