/**
 * Created by Сергей on 1.11.2016.
 */
// module.exports = function(grunt) {
//
//     grunt.initConfig({
//         concat: {
//             options: {
//                 // Task-specific options go here. 
//                 separator: ';'
//             },
//             dist: {
//                 src: ['js/src/*.js'],
//                 dest: 'js/dist/script.main.js'
//             }
//         },
//         concat_css: {
//             options: {
//                 // Task-specific options go here. 
//             },
//             all: {
//                 src: ['css/src/*.css'],
//                 dest: 'css/dist/style.main.css'
//             }
//         },
//         uglify: {
//             js: {
//                 src: ['js/dist/script.main.js'],
//                 dest: 'js/dist/script.main.min.js'
//             }
//         },
//         uglify_css: {
//             css: {
//                 src: ['css/dist/style.main.css'],
//                 dest: 'css/dist/style.main.min.css'
//             }
//         }
//         });
//
//     grunt.loadNpmTasks('grunt-contrib-concat');
//     grunt.loadNpmTasks('grunt-contrib-uglify');
//     grunt.loadNpmTasks('grunt-css');
//     grunt.loadNpmTasks('grunt-concat-css');
//    
//     grunt.registerTask('default', ['concat', 'uglify', 'concat_css']);
//     // grunt.registerTask('default', ['concat', 'uglify', 'cssmin']);
// };

module.exports = function(grunt) {

    // 1. Робимо настройки grunt
    grunt.initConfig({
// обєднання js i css файлів
        concat: {
            options: {
                // Task-specific options go here. 
                separator: ''
            },
            js: {
                src: ['js/src/script1.js', 'js/src/script2.js'],
                dest: 'js/dist/script.main.js'
            },
            css: {
                src: ['css/src/style1.css', 'css/src/style2.css'],
                dest: 'css/dist/style.main.css'
            }
        },
        // мініфікація файлів
        uglify: {
            js_min: {
                src: 'js/dist/script.main.js',
                dest: 'js/dist/script.main.min.js'
            }
            // css_min:{
            //     src: 'css/dist/style.main.css',
            //     dest: 'css/dist/style.main.min.css'
            // }
        },
        cssmin: {
            css_min:{
                src: 'css/dist/style.main.css',
                dest: 'css/dist/style.main.min.css'
            }
        }

    });

    // плагіни для використання
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-css');

    // консоль grunt, що виконується
    grunt.registerTask('default', ['concat', 'uglify', 'cssmin']);

};