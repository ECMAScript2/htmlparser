goog.provide( 'example' );

goog.require( 'htmlparser.exec' );
goog.requireType( 'htmlparser.typedef.Handler' );

function HTMLtoXML( html ){
    var results = '';
    
    htmlparser.exec(
        html,
        /** @type {htmlparser.typedef.Handler} */ ({
            isXML : true,
            onParseError : function( msg ){
                results = msg;
            },
            onParseStartTag : function( tag, attrs, empty, myIndex ){
                if( tag === '![CDATA[]]' ){
                    results += '<![CDATA[\n]]>';
                    return;
                };
                results += "<" + tag;
        
                for( var i = 0, attr; i < attrs.length; ++i ){
                    attr = attrs[ i ];
                    results += " " + attr[ 0 ] + '="' + ( attr[ 1 ] || attr[ 0 ] ) + '"';
                };
                results += ( empty ? "/" : '' ) + ">";
            },
            onParseEndTag : function( tag ){
                if( tag === '![CDATA[]]' ){
                    
                } else {
                    results += "</" + tag + ">";
                };
            },
            onParseText : function( text ){
                // text = X.String.cleanupWhiteSpace( text );
                if( text.split( ' ' ).join( '' ) ){
                    text = text.charAt( 0 ) === ' ' ? text.substr( 1 ) : text;
                    text = text.length && text.charAt( text.length - 1 ) === ' ' ? text.substr( 0, text.length - 1 ) : text;
                    results += text;
                };
            },
            onParseComment : function( text ){
                //results += "<!--" + text + "-->";
            }
        })
    );
    return results;
};

window.onload = function(){
    var input  = document.all("input");
    var output = document.all("output");
    var form   = document.all("form");

/*
    if( 5 <= X.UA.IE && X.UA.IE < 5.5 ){
        input.firstChild.data = "<p>hello <b style='test foo' disabled align=\"b\\\"ar\">john <a href='http://ejohn.org/'>resig</b><img src=test.jpg></img><div>test</div><p>hello world";
    } else {
        input.value = "<p>hello <b style='test foo' disabled align=\"b\\\"ar\">john <a href='http://ejohn.org/'>resig</b><img src=test.jpg></img><div>test</div><p>hello world";
    };
    if( 5 <= X.UA.IE && X.UA.IE < 5.5 ){
        output.firstChild.data = '';
    } else {
        output.value = '';
    }; */

    form.onsubmit = function(e){
        if (e) e.preventDefault();
        if (typeof event != "undefined") event.returnValue = false;
        var now = (new Date()).getTime();
        //if( 5 <= X.UA.IE && X.UA.IE < 5.5 ){
        //    output.firstChild.data = HTMLtoXML(input.value); // ie5
        //} else {
            output.value = HTMLtoXML(input.value);
        //};
        //alert( (new Date()).getTime() - now );
        return false;
    };
};
