goog.provide( 'example.browser' );

goog.require( 'htmlparser.exec' );
goog.require( 'htmlparser.example.handler' );

var h = htmlparser.example.handler;

window.onload = function(){
    var isIE5    = !!window[ '__isIE5' ];
    var input    = window[ 'input'    ] || document.all( 'input'    );
    var output   = window[ 'output'   ] || document.all( 'output'   );
    var form     = window[ 'form'     ] || document.all( 'form'     );
    var progress = window[ 'progress' ] || document.all( 'progress' );
    var textlen  = window[ 'textlen'  ] || document.all( 'textlen'  );
    var originalHTMLLength;

    if( isIE5 ){
        output.firstChild.data = '';
    } else {
        output.value = '';
    };
    textlen.value = '';
    progress.style.width = '0';

    h.onParseProgress = function( ratio, exec, args ){
        progress.style.width = ratio * 100 + '%';

        setTimeout(
            function(){
                handler._startTime = + new Date;

                if( isIE5 ){
                    exec( args[ 0 ], args[ 1 ], args[ 2 ], args[ 3 ], args[ 4 ] );
                } else {
                    exec.apply( null, args );
                };
            }, 16
        );
    };

    h.onParseComplete = function(){
        progress.style.width = 100 + '%';

        var html = h._result;

        if( isIE5 ){
            output.firstChild.data = html;
        } else {
            output.value = html;
        };
        textlen.value = originalHTMLLength + ' => ' + html.length;
    };

    form.onsubmit = function(e){
        if (e) e.preventDefault();
        if (typeof event != 'undefined') event.returnValue = false;

        // var now = (new Date()).getTime();

        var html = input.value.split( '\r\n' ).join( '\n' ).split( '\n\r' ).join( '\n' ).split( '\r' ).join( '\n' );

        if( isIE5 ){
            output.firstChild.data = '';
        } else {
            output.value = '';
        };
        textlen.value = originalHTMLLength = html.length;
        progress.style.width = '0';

        h._init( true );
        htmlparser.exec( html, h );

        //alert( (new Date()).getTime() - now );
        return false;
    };
};
