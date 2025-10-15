goog.provide( 'htmlparser.example.handler' );

goog.requireType( 'htmlparser.typedef.Handler' );
goog.require( 'htmlparser.escapeHTML' );
goog.require( 'htmlparser.RAW_TEXT_ELEMENTS' );
goog.require( 'htmlparser.ESCAPABLE_RAW_TEXT_ELEMENTS' );

/** 
 * @extends {htmlparser.typedef.Handler}
 * @const
 */
var handler =
    {
        _result : '',

        _xmlDeclaration : '',

        _stack : [],

        _init : function(){
            handler._result = handler._xmlDeclaration = '';
            handler._stack.length = 0;
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
                handler._result += ' ' + name + ( value !== true ? '="' + htmlparser.escapeHTML( value ).split( '"' ).join( '\\"' ).split( '\\\\"' ).join( '\\"' ) + '"' : '="' + name + '"' );
            };
            handler._result += ( empty ? '/' : '' ) + '>';

            handler._stack.push( tag.toUpperCase() );
        },
        onParseEndTag : function( tag, isInvalidEndTagOmission, isMissingStartTag ){
            handler._result += '</' + tag + '>';

            if( !isMissingStartTag ){
                if( handler._stack[ handler._stack.length - 1 ] === tag.toUpperCase() ){
                    handler._stack.pop();
                };
            };
        },
        onParseText : function( text ){
            var parent = handler._stack[ handler._stack.length - 1 ];

            if( htmlparser.RAW_TEXT_ELEMENTS[ parent ] && !htmlparser.ESCAPABLE_RAW_TEXT_ELEMENTS[ parent ] ){
                handler._result += text;
            } else {
                text = text.split( '\n' ).join( ' ' ).split( '\t' ).join( ' ' );

                while( 0 <= text.indexOf( '  ' ) ){
                    text = text.split( '  ' ).join( ' ' );
                };

                if( text.split( ' ' ).join( '' ) ){
                    text = text.charAt( 0 ) === ' ' ? text.substr( 1 ) : text;
                    text = text.length && text.charAt( text.length - 1 ) === ' ' ? text.substr( 0, text.length - 1 ) : text;
                    handler._result += htmlparser.escapeHTML( text );
                };
            };
        },
        onParseComment : function( comment ){
            //handler._result += '<!--' + comment + '-->';
        },
        onParseCDATASection : function( data ){
            // handler._result += '<![CDATA[' + data + ']]>';
        },
        onParseProcessingInstruction : function( data ){
            if( data.indexOf( 'xml ' ) === 0 ){
                handler._xmlDeclaration = '<?' + data + '?>\n';
            };
        }
    };

htmlparser.example.handler = handler;