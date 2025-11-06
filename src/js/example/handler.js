goog.provide( 'htmlparser.example.handler' );

goog.requireType( 'htmlparser.typedef.Handler' );
goog.require( 'htmlparser.escapeHTML' );
goog.require( 'htmlparser.unescapeHTML' );
goog.require( 'htmlparser.exec' );
goog.require( 'htmlparser.isNamespacedTag' );
goog.require( 'htmlparser.RAW_TEXT_ELEMENTS' );
goog.require( 'htmlparser.ESCAPABLE_RAW_TEXT_ELEMENTS' );

/** 
 * @extends {htmlparser.typedef.Handler}
 * @const
 */
var handler =
    {
        _result         : '',

        _xmlDeclaration : '',

        _stack          : [],

        _startTime      : 0,

        _init : function( usePause ){
            handler._result = handler._xmlDeclaration = '';
            handler._stack.length = 0;
            if( usePause ){
                handler._startTime = + new Date;
            } else {
                handler._startTime = 0;
            };
        },
        onParseError : function( msg ){
            handler._result = msg;
        },
        onParseDocType : function( doctype ){
            handler._result = handler._xmlDeclaration + doctype;
            handler._xmlDeclaration = '';

            if( handler._startTime ){
                if( handler._startTime + 16 < + new Date ){
                    return true;
                };
            };
        },
        onParseStartTag : function( tag, attrs, empty, myIndex ){
            var name, value;

            handler._result += '<' + tag;

            for( name in attrs ){
                value = attrs[ name ];
                handler._result += ' ' + name + ( value !== true ? '="' + htmlparser.escapeHTML( value ).split( '"' ).join( '\\"' ).split( '\\\\"' ).join( '\\"' ) + '"' : '' );
            };
            handler._result += ( empty ? '/' : '' ) + '>';

            if( !empty ){
                handler._stack.push( tag );
            };
            if( handler._startTime ){
                if( handler._startTime + 16 < + new Date ){
                    return true;
                };
            };
        },
        onParseEndTag : function( tag, isInvalidEndTagOmission, isMissingStartTag ){
            handler._result += '</' + tag + '>';

            if( !isMissingStartTag ){
                if( handler._stack[ handler._stack.length - 1 ] === tag ){
                    handler._stack.pop();
                };
            };
        },
        onParseText : function( text ){
            var parent = handler._stack[ handler._stack.length - 1 ];

            if( htmlparser.RAW_TEXT_ELEMENTS[ parent ] ){
                if( !htmlparser.ESCAPABLE_RAW_TEXT_ELEMENTS[ parent ] ){
                    handler._result += text;
                } else {
                    htmlparser.exec( text, titleHandler ); // <title> contains <data:blog.pageTitle/> at Blogger templete
                };
            } else {
                text = text.split( '\n' ).join( ' ' ).split( '\t' ).join( ' ' );

                while( 0 <= text.indexOf( '  ' ) ){
                    text = text.split( '  ' ).join( ' ' );
                };

                if( text.split( ' ' ).join( '' ) ){
                    text = text.charAt( 0 ) === ' ' ? text.substr( 1 ) : text;
                    text = text.charAt( text.length - 1 ) === ' ' ? text.substr( 0, text.length - 1 ) : text;
                    handler._result += htmlparser.escapeHTML( text );
                };
            };
            if( handler._startTime ){
                if( handler._startTime + 16 < + new Date ){
                    return true;
                };
            };
        },
        onParseComment : function( comment ){
            //handler._result += '<!--' + comment + '-->';
            if( handler._startTime ){
                if( handler._startTime + 16 < + new Date ){
                    return true;
                };
            };
        },
        onParseCDATASection : function( data ){
            // handler._result += '<![CDATA[' + data + ']]>';
            if( handler._startTime ){
                if( handler._startTime + 16 < + new Date ){
                    return true;
                };
            };
        },
        onParseProcessingInstruction : function( data ){
            if( data.indexOf( 'xml ' ) === 0 ){
                handler._xmlDeclaration = '<?' + data + '?>\n';
            };
            if( handler._startTime ){
                if( handler._startTime + 16 < + new Date ){
                    return true;
                };
            };
        }
    };

var titleHandler =
    {
        onParseStartTag : function( tag, attrs, empty, myIndex ){
            var isGML = htmlparser.isNamespacedTag( tag ), name, value;

            handler._result += ( isGML ? '<' : '&gt;' ) + tag;

            for( name in attrs ){
                value = attrs[ name ];
                handler._result += ' ' + name + ( value !== true ? '="' + htmlparser.escapeHTML( value ).split( '"' ).join( '\\"' ).split( '\\\\"' ).join( '\\"' ) + '"' : '' );
            };
            handler._result += ( empty ? '/' : '' ) + ( isGML ? '>' : '&lt;' );
        },
        onParseEndTag : function( tag, isInvalidEndTagOmission, isMissingStartTag ){
            var isGML = htmlparser.isNamespacedTag( tag );

            handler._result += ( isGML ? '</' : '&gt;/' ) + tag + ( isGML ? '>' : '&lt;' );
        },
        onParseText : function( text ){
            handler._result += htmlparser.escapeHTML( text );
        },
        onParseComment : function( comment ){},
        onParseCDATASection : function( data ){}
    };

htmlparser.example.handler = handler;