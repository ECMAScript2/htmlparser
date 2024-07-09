goog.provide( 'example.browser' );

goog.require( 'htmlparser.exec' );
goog.require( 'htmlparser.example.handler' );

function HTMLtoXML( html ){
    var handler = htmlparser.example.handler;
    
    htmlparser.exec( html, handler );

    return handler._result;
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
