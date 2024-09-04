goog.provide( 'htmlparser.example.handler.html2json' );

goog.requireType( 'htmlparser.typedef.Handler' );

var rootNode = [], currentNode = rootNode, stack = [];

/** 
 * @extends {htmlparser.typedef.Handler}
 * @const
 */
htmlparser.example.handler.html2json = {
        _getResult : function(){
            var result = rootNode;

            rootNode = currentNode = [];
            stack = [];

            if( typeof result[ 0 ] !== 'number' ){
                result.unshift( 11 );
            };
            return result;
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
            var attrObj, i, attr, value;

            if( attrs ){
                attrObj = {};
                for( i = 0; i < attrs.length; i += 2 ){
                    attr  = attrs[ i ];
                    value = attrs[ i + 1 ];
                    attrObj[ attr ] = value;
                };
                if( i ){
                    element[ 1 ] = attrObj;
                };
            };

            currentNode.push( element );

            if( !empty ){
                stack.push( currentNode );
                currentNode = element;
            };
        },
        onParseEndTag : function( tag, missingEndTag, noStartTag ){
            if( tag === currentNode[ 0 ] ){
                currentNode = stack.pop();
            } else {
                // error
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
