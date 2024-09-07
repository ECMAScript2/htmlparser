goog.provide( 'htmlparser.example.handler' );

goog.requireType( 'htmlparser.typedef.Handler' );

/** 
 * @extends {htmlparser.typedef.Handler}
 * @const
 */
var handler =
    {
        _result : '',
        onParseError : function( msg ){
            handler._result = msg;
        },
        onParseStartTag : function( tag, attrs, empty, myIndex ){
            var name, value;

            handler._result += '<' + tag;

            for( name in attrs ){
                value = attrs[ name ];
                handler._result += ' ' + name + ( value !== true ? '="' + value.split( '"' ).join( '\\"' ).split( '\\\\"' ).join( '\\"' ) + '"' : '' );
            };
            handler._result += ( empty ? '/' : '' ) + '>';
        },
        onParseEndTag : function( tag, missingEndTag, noStartTag ){
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