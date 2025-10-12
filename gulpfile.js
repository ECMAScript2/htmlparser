const pkg             = require('./package.json'),
      gulp            = require('gulp'),
      ClosureCompiler = require('google-closure-compiler').gulp(),
      postProcessor   = require( 'es2-postprocessor' );
      fs              = require('fs'),
      moduleName      = pkg.name,
      tempJsName      = 'temp.js',
      tempDir         = require('os').tmpdir() + '/' + moduleName,
      globalVariables = 'document,Date',
      copyright       = moduleName + '@' + pkg.version + '\n' +
                       '(c) 2024-' + (new Date).getFullYear() + ' ' + pkg.author + '(' + pkg.homepage + '), ' + pkg.license + '.';

let minify       = false;
let fileName     = 'htmlparser.js';
let outputDir    = './dist';
let formatting   = 'PRETTY_PRINT';

gulp.task( 'dist', gulp.series(
    function(){
        return gulp
            .src(
                [ './src/closure-primitives/base.js', './src/js/**/*.js', './node_modules/@externs/nodejs/**/*.js' ]
            ).pipe(
                ClosureCompiler(
                    {
                        // env               : 'CUSTOM',
                        dependency_mode   : 'PRUNE',
                        entry_point       : 'goog:example.node',
                        compilation_level : 'ADVANCED',
                        define            : [
                            'htmlparser.DEFINE.USE_XML=' + true,
                            'htmlparser.DEFINE.USE_VML=' + true,
                            'htmlparser.DEFINE.USE_DOCUMENT_TYPE_NODE=' + true,
                            'htmlparser.DEFINE.USE_CDATA_SECTION=' + true,
                            'htmlparser.DEFINE.USE_PROCESSING_INSTRUCTION=' + true,
                            'htmlparser.DEFINE.USE_PAUSE=' + false
                        ],
                        warning_level     : 'VERBOSE',
                        language_in       : 'ECMASCRIPT6',
                        language_out      : 'ECMASCRIPT6',
                        formatting        : 'PRETTY_PRINT',
                        js_output_file    : 'index.js',
                        output_wrapper    : '\/* ' + copyright + ' *\/\n' + '%output%'
                    }
                )
            ).pipe(
                gulp.dest( outputDir )
            );
    },
    function(){
        return gulp
            .src(
                [ './src/closure-primitives/base.js', './src/js/**/*.js' ]
            ).pipe(
                ClosureCompiler(
                    {
                        dependency_mode   : 'PRUNE',
                        entry_point       : 'goog:example.browser',
                        compilation_level : 'ADVANCED',
                        define            : [
                            'htmlparser.DEFINE.USE_XML=' + true,
                            'htmlparser.DEFINE.USE_DOCUMENT_TYPE_NODE=' + true,
                            'htmlparser.DEFINE.USE_CDATA_SECTION=' + true,
                            'htmlparser.DEFINE.USE_PROCESSING_INSTRUCTION=' + true,
                            'htmlparser.DEFINE.USE_PAUSE=' + false
                        ],
                        warning_level     : 'VERBOSE',
                        language_in       : 'ECMASCRIPT3',
                        language_out      : 'ECMASCRIPT3',
                        output_wrapper    :
                            '(function(window, ' + globalVariables + '){\n' +
                                '%output%\n' +
                            '})(this, ' + globalVariables + ');'
                    }
                )
            ).pipe(
                postProcessor.gulp(
                    {
                        hoist : true
                    }
                )
            ).pipe(
                ClosureCompiler(
                    {
                        // externs        : [ './src/js/htmlparser.externs.js' ],
                        warning_level  : 'QUIET',
                        language_in    : 'ECMASCRIPT3',
                        language_out   : 'ECMASCRIPT3'
                    }
                )
            ).pipe(
                postProcessor.gulp(
                    {
                        minIEVersion    : 5,
                        minOperaVersion : 7,
                        minGeckoVersion : 0.6
                    }
                )
            ).pipe(
                ClosureCompiler(
                    {
                        compilation_level : 'WHITESPACE_ONLY',
                        warning_level     : 'QUIET',
                        formatting        : formatting,
                        js_output_file    : fileName,
                        output_wrapper    : '\/* ' + copyright + ' *\/\n' + '%output%'
                    }
                )
            ).pipe(
                gulp.dest( outputDir )
            );
    }
));