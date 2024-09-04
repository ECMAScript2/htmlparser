goog.provide( 'example.node' );

goog.require( 'htmlparser.exec' );
goog.require( 'htmlparser.example.handler.html2json' );

module.exports = function( html ){
    var handler = htmlparser.example.handler.html2json;
    
    handler._reset();

    htmlparser.exec( html, handler );

    return handler._getResult();
};
