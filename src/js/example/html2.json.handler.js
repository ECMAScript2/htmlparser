goog.provide( 'htmlparser.example.handler.html2json' );

goog.requireType( 'htmlparser.typedef.Handler' );

var rootNode, currentNode, stack;

/** 
 * @extends {htmlparser.typedef.Handler}
 * @const
 */
htmlparser.example.handler.html2json = {
        _init : function(){
            rootNode = currentNode = [];
            stack = [];
        },

        _getResult : function(){
            if( typeof rootNode[ 0 ] !== 'number' ){
                rootNode.unshift( 11 );
            };
            return rootNode;
        },

        onParseError : function( msg ){
            throw msg;
        },
        onParseDocType : function( doctype ){
            rootNode[ 0 ] = 9;
            rootNode[ 1 ] = '<!DOCTYPE ' + doctype + '>';
        },
        onParseStartTag : function( tag, attrs, empty, myIndex ){
            var element = [ tag ];

            if( attrs ){
                element[ 1 ] = attrs;
            };

            currentNode.push( element );

            if( !empty ){
                stack.push( currentNode );
                currentNode = element;
            };
        },
        onParseEndTag : function( tag, missingEndTag, noStartTag ){
            if( noStartTag ){
                currentNode.push( '</' + tag + '>' );
            } else if( !missingEndTag ){
                if( tag === currentNode[ 0 ] ){
                    currentNode = stack.pop();
                } else {
                    // error
                };
            };
        },
        onParseText : function( text ){
            currentNode.push( text );
        },
        onParseComment : function( comment ){
            currentNode.push( [ 8, comment ] );
        },
        onParseCDATASection : function( data ){
            currentNode.push( [ 4, data ] );
        },
        onParseProcessingInstruction : function( data ){
            currentNode.push( [ 7, data ] );
        }
    };
