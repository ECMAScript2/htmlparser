goog.provide( 'htmlparser.example.handler' );

goog.requireType( 'htmlparser.typedef.Handler' );

/** 
 * @extends {htmlparser.typedef.Handler}
 * @const
 */
var handler =
    {
        _result : '',

        _xmlDeclaration : '',

        _init : function(){
            handler._result = handler._xmlDeclaration = '';
        },
        onParseError : function( msg ){
            handler._result = msg;
        },
        onParseDocType : function( doctype ){
            handler._result = handler._xmlDeclaration + doctype;
            handler._xmlDeclaration = '';
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
        onParseEndTag : function( tag, isInvalidEndTagOmission, isMissingStartTag ){
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
        onParseProcessingInstruction : function( data ){
            if( data.indexOf( 'xml ' ) === 0 ){
                handler._xmlDeclaration = '<?' + data + '?>';
            };
        }
    };

htmlparser.example.handler = handler;