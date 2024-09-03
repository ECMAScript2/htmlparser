goog.provide( 'htmlparser.example.handler.html2json' );

goog.requireType( 'htmlparser.typedef.Handler' );

/** 
 * @extends {htmlparser.typedef.Handler}
 * @const
 */
var handler =
    {
        isXML        : true,
        _root        : null,
        _stack       : null,
        _currentNode : null,

        _reset : function(){
            handler._root  = handler._currentNode = [];
            handler._stack = [];
        },

        _getCurrent : function(){
            return handler._currentNode;
        },

        onParseError : function( msg ){

        },
        onParseDocType : function( doctype ){
            var root = handler._root;

            root[ 0 ] = 9;
            root[ 1 ] = doctype;
        },
        onParseStartTag : function( tag, attrs, empty, myIndex ){
            var element = [ tag ];
            var attrObj, i, attr, value;

            if( attrs ){
                attrObj = {};
                for( i = 0; i < attrs.length; i += 2 ){
                    attr  = attrs[ i ];
                    value = attrs[ i + 1 ];
                    attrObj[ attr ] = value;
                };
                if( attrs.length )
                element[ 1 ] = attrObj;
            };

            handler._getCurrent().push( element );

            if( !empty ){
                handler._stack.push( handler._currentNode );
                handler._currentNode = element;
            };
        },
        onParseEndTag : function( tag ){
            if( tag === handler._getCurrent()[ 0 ] ){
                handler._currentNode = handler._stack.pop();
            } else {
                // error
            };
        },
        onParseText : function( text ){
            handler._getCurrent().push( text );
        },
        onParseComment : function( comment ){
            handler._getCurrent().push( [ 8, comment ] );
        },
        onParseCDATASection : function( data ){
            handler._getCurrent().push( [ 4, data ] );
        },
        onParseProcessingInstruction : function( data ){
            handler._getCurrent().push( [ 7, data ] );
        }
    };

htmlparser.example.handler.html2json = handler;