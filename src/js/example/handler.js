goog.provide( 'htmlparser.example.handler' );

goog.requireType( 'htmlparser.typedef.Handler' );

/** 
 * @extends {htmlparser.typedef.Handler}
 * @const
 */
var handler =
    {
        isXML   : true,
        _result : '',
        onParseError : function( msg ){
            handler._result = msg;
        },
        onParseStartTag : function( tag, attrs, empty, myIndex ){
            handler._result += '<' + tag;

            for( var i = 0, attr, val; i < attrs.length; i += 2 ){
                attr = attrs[ i ];
                val  = attrs[ i + 1 ];
                handler._result += ' ' + attr[ 0 ] + ( val !== true ? '="' + val.split( '"' ).join( '\\"' ).split( '\\\\"' ).join( '\\"' ) + '"' : '' );
            };
            handler._result += ( empty ? '/' : '' ) + '>';
        },
        onParseEndTag : function( tag ){
            handler._result += '</' + tag + '>';
        },
        onParseText : function( text ){
            // text = X.String.cleanupWhiteSpace( text );
            if( text.split( ' ' ).join( '' ) ){
                text = text.charAt( 0 ) === ' ' ? text.substr( 1 ) : text;
                text = text.length && text.charAt( text.length - 1 ) === ' ' ? text.substr( 0, text.length - 1 ) : text;
                handler._result += text;
            };
        },
        onParseComment : function( comment ){
            //handler._result += '<!--' + comment + '-->';
        },
        onParseCDATASection : function( data ){
            //handler._result += '<![CDATA[' + data + ']]>';
        },
        onParseProcessingInstruction : function(){

        }
    };

htmlparser.example.handler = handler;