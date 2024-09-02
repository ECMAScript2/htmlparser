goog.provide( 'htmlparser.example.handler' );

goog.requireType( 'htmlparser.typedef.Handler' );

/** @type {htmlparser.typedef.Handler} */
htmlparser.example.handler =
    {
        isXML   : true,
        _result : '',
        onParseError : function( msg ){
            this._result = msg;
        },
        onParseStartTag : function( tag, attrs, empty, myIndex ){
            this._result += '<' + tag;

            for( var i = 0, attr, val; i < attrs.length; ++i ){
                attr = attrs[ i ];
                val  = attr[ 1 ];
                this._result += ' ' + attr[ 0 ] + ( val !== true ? '="' + val.split( '"' ).join( '\\"' ).split( '\\\\"' ).join( '\\"' ) + '"' : '' );
            };
            this._result += ( empty ? '/' : '' ) + '>';
        },
        onParseEndTag : function( tag ){
            this._result += '</' + tag + '>';
        },
        onParseText : function( text ){
            // text = X.String.cleanupWhiteSpace( text );
            if( text.split( ' ' ).join( '' ) ){
                text = text.charAt( 0 ) === ' ' ? text.substr( 1 ) : text;
                text = text.length && text.charAt( text.length - 1 ) === ' ' ? text.substr( 0, text.length - 1 ) : text;
                this._result += text;
            };
        },
        onParseComment : function( comment ){
            //this._result += '<!--' + comment + '-->';
        },
        onParseCDATASection : function( data ){
            //this._result += '<![CDATA[' + data + ']]>';
        }
    };
