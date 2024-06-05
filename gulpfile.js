const pkg             = require('./package.json'),
      gulp            = require('gulp'),
      ClosureCompiler = require('google-closure-compiler').gulp(),
      postProcessor   = require( 'es2-postprocessor' );
      fs              = require('fs'),
      externsJs       = './src/js-externs/externs.js',
      moduleName      = pkg.name,
      tempJsName      = 'temp.js',
      tempDir         = require('os').tmpdir() + '/' + moduleName,
      globalVariables = 'parseFloat',
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
                [ './src/closure-primitives/base.js', './src/js/**/*.js' ]
            ).pipe(
                ClosureCompiler(
                    {
                        dependency_mode  : 'PRUNE',
                        entry_point       : 'goog:example',
                        externs           : [ externsJs ],
                        compilation_level : 'ADVANCED',
                        define            : [
                            'htmlparser.DEFINE.useXML=' + minify,
                            'htmlparser.DEFINE.useLazy=' + minify,
                            'htmlparser.DEFINE.parsingStop=' + minify,
                            'htmlparser.DEFINE.parseProcessingInstruction=' + minify
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
                ClosureCompiler(
                    {
                        externs        : [ externsJs ],
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