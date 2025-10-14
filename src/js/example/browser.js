goog.provide( 'example.browser' );

goog.require( 'htmlparser.exec' );
goog.require( 'htmlparser.example.handler' );

function HTMLtoXML( html ){
    var handler = htmlparser.example.handler;

    handler._init();
    
    htmlparser.exec( html, handler );

    return handler._result;
};

window.onload = function(){
    var isIE5  = !!window[ '__isIE5' ];
    var input  = window[ 'input'  ] || document.all( 'input'  );
    var output = window[ 'output' ] || document.all( 'output' );
    var form   = window[ 'form'   ] || document.all( 'form'   );

    if( isIE5 ){
        output.firstChild.data = '';
    } else {
        output.value = '';
    };

    form.onsubmit = function(e){
        if (e) e.preventDefault();
        if (typeof event != 'undefined') event.returnValue = false;

        // var now = (new Date()).getTime();

        var html = input.value.split( '\r\n' ).join( '\n' ).split( '\n\r' ).join( '\n' ).split( '\r' ).join( '\n' );

        html = HTMLtoXML( html );

        if( isIE5 ){
            output.firstChild.data = html;
        } else {
            output.value = html;
        };
        //alert( (new Date()).getTime() - now );
        return false;
    };
};
