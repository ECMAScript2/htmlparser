goog.provide( 'example.node' );

goog.require( 'htmlparser.exec' );
goog.require( 'htmlparser.example.handler' );

module.exports = function( html ){
    var handler = htmlparser.example.handler;
    
    htmlparser.exec( html, handler );

    return handler._result;
};
