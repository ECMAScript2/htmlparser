
/*
 * Original code by Erik John Resig (ejohn.org)
 * http://ejohn.org/blog/pure-javascript-html-parser/
 *
 */

goog.provide( 'htmlparser' );
goog.provide( 'htmlparser.exec' );
goog.provide( 'htmlparser.DEFINE' );
goog.provide( 'htmlparser.typedef.Handler' );
goog.provide( 'htmlparser.isWhitespace' );
goog.provide( 'htmlparser.isAlphabet' );
goog.provide( 'htmlparser.isXMLRootElement' );
goog.provide( 'htmlparser.isNamespacedTag' );
goog.provide( 'htmlparser.unescapeHTML' );
goog.provide( 'htmlparser.escapeHTML' );
goog.provide( 'htmlparser.unescapeAttrValue' );

goog.require( 'htmlparser.XML_ROOT_ELEMENTS' );
goog.require( 'htmlparser.VOID_ELEMENTS' );
goog.require( 'htmlparser.RAW_TEXT_ELEMENTS' );
goog.require( 'htmlparser.ESCAPABLE_RAW_TEXT_ELEMENTS' );
goog.require( 'htmlparser.BOOLEAN_ATTRIBUTES' );
goog.require( 'htmlparser.OMITTABLE_END_TAG_ELEMENTS_WITH_CHILDREN' );

/** @define {boolean} */
htmlparser.DEFINE.USE_XML                    = goog.define( 'htmlparser.DEFINE.USE_XML'                   , true );
/** @define {boolean} */
htmlparser.DEFINE.USE_VML                    = goog.define( 'htmlparser.DEFINE.USE_VML'                   , false );
/** @define {boolean} */
htmlparser.DEFINE.USE_DOCUMENT_TYPE_NODE     = goog.define( 'htmlparser.DEFINE.USE_DOCUMENT_TYPE_NODE'    , false );
/** @define {boolean} */
htmlparser.DEFINE.USE_CDATA_SECTION          = goog.define( 'htmlparser.DEFINE.USE_CDATA_SECTION'         , true );
/** @define {boolean} */
htmlparser.DEFINE.USE_PROCESSING_INSTRUCTION = goog.define( 'htmlparser.DEFINE.USE_PROCESSING_INSTRUCTION', false );

/** @define {boolean} */
htmlparser.DEFINE.TIME_SLICE_EXECUTION       = goog.define( 'htmlparser.DEFINE.TIME_SLICE_EXECUTION'      , false );
/** @define {boolean} */
htmlparser.DEFINE.STOP_PARSING               = goog.define( 'htmlparser.DEFINE.STOP_PARSING'              , true );

/**
 * @typedef {{
 *   isXHTML                      : (boolean | void),
 *   intervalMs                   : (number | void),
 *   onParseError                 : (function(string) | void),
 *   onParseDocType               : (function(string):(boolean | void) | void),
 *   onParseStartTag              : function(string, Object.<string, (string | boolean)>, boolean, number):(boolean | void),
 *   onParseEndTag                : function(string, boolean, boolean):(boolean | void),
 *   onParseText                  : function(string):(boolean | void),
 *   onParseComment               : function(string):(boolean | void),
 *   onParseCDATASection          : (function(string):(boolean | void) | void),
 *   onParseProcessingInstruction : (function(string):(boolean | void) | void),
 *   onParseProgress              : (function(number, !Function, !Array) | void),
 *   onParseComplete              : (function() | void)
 * }}
 */
htmlparser.typedef.Handler;

/**
 * @private
 * @enum {number}
 */
htmlparser._CHAR_KINDS = {
    IS_UPPERCASE_ALPHABETS : 1,
    IS_LOWERCASE_ALPHABETS : 2,
    IS_WHITESPACE          : 4
};

/**
 * @see https://infra.spec.whatwg.org/#ascii-whitespace
 *   ASCII whitespace is U+0009, U+000A, U+000C, U+000D, or U+0020.
 *                       TAB     LF      FF      CR         SPACE
 *                       \t      \n      \f      \r
 * @private
 * @const {Object.<string, number>} */
htmlparser._CHARS = {
	'a':2,'b':2,'c':2,'d':2,'e':2,'f':2,'g':2,'h':2,'i':2,'j':2,'k':2,'l':2,'m':2,
	'n':2,'o':2,'p':2,'q':2,'r':2,'s':2,'t':2,'u':2,'v':2,'w':2,'x':2,'y':2,'z':2,
	'A':1,'B':1,'C':1,'D':1,'E':1,'F':1,'G':1,'H':1,'I':1,'J':1,'K':1,'L':1,'M':1,
	'N':1,'O':1,'P':1,'Q':1,'R':1,'S':1,'T':1,'U':1,'V':1,'W':1,'X':1,'Y':1,'Z':1,
	'\t':4,'\n':4,'\f':4,'\r':4,' ':4
};

/**
 * @param {string} chr 
 * @return {number}
 */
htmlparser.isWhitespace = function( chr ){
	return htmlparser._CHARS[ chr ] & htmlparser._CHAR_KINDS.IS_WHITESPACE;
};

/**
 * @param {string} chr 
 * @return {number}
 */
htmlparser.isAlphabet = function( chr ){
	return htmlparser._CHARS[ chr ] & ( htmlparser._CHAR_KINDS.IS_UPPERCASE_ALPHABETS + htmlparser._CHAR_KINDS.IS_LOWERCASE_ALPHABETS );
};

/**
 * @param {string} tagName
 * @return {boolean}
 */
htmlparser.isXMLRootElement = function( tagName ){
	return !!htmlparser.XML_ROOT_ELEMENTS[ tagName ];
};

/**
 * @param {string} tagName
 * @return {boolean}
 */
htmlparser.isNamespacedTag = function( tagName ){
	return 0 < tagName.indexOf( ':' );
};

/**
 * @param {string} str 
 * @return {string}
 */
htmlparser.unescapeHTML = function( str ){
    return str.split( '&lt;' ).join( '<' )
              .split( '&gt;' ).join( '>' )
              .split( '&amp;lt;' ).join( '&lt;' )
              .split( '&amp;gt;' ).join( '&gt;' );
};

/**
 * @param {string} str 
 * @return {string}
 */
htmlparser.escapeHTML = function ( str ){
    return str.split( '&lt;' ).join( '&amp;lt;' )
              .split( '&gt;' ).join( '&amp;gt;' )
              .split( '<' ).join( '&lt;' )
              .split( '>' ).join( '&gt;' );
};

/**
 * @param {string} str 
 * @return {string}
 */
htmlparser.unescapeAttrValue = function normalize( str ){
    return htmlparser.unescapeHTML( str ).split( '\\"' ).join( '"' )
                                         .split( "\\'" ).join( "'" );
};

goog.scope(
    function(){
        /** @const {number} */
        var PARSING_STOP = 1;

        /**
         * 
         * @param {string} html 
         * @param {htmlparser.typedef.Handler} handler
         */
        htmlparser.exec = function( html, handler ){
            exec( html, handler, [], html.length, 0, htmlparser.DEFINE.TIME_SLICE_EXECUTION && !!handler.onParseProgress, htmlparser.DEFINE.USE_XML && !!handler.isXHTML, false );
        };

        /**
         * 
         * @param {string} html
         * @param {htmlparser.typedef.Handler} handler
         * @param {!Array.<string>} stack
         * @param {number} originalHTMLLength
         * @param {number} pos
         * @param {boolean} lazy 
         * @param {boolean} isXML 
         * @param {boolean} isInVML */
        function exec( html, handler, stack, originalHTMLLength, pos, lazy, isXML, isInVML ){
            /** @const {number} */
            var startTime  = lazy ? now() : 0;
            /** @const {number} */
            var intervalMs = handler.intervalMs || 16;

            /** @type {number} */
            var lastLength = html.length - pos;

            var lastTagName, isRawElement, index, ignoreEndTag, nextIndex, htmlLength;

            while( html ){
                lastTagName = stack[ stack.length - 1 ];

                isRawElement = htmlparser.RAW_TEXT_ELEMENTS[ lastTagName ];

                // console.log( pos, html, lastTagName || '.' );

                // ProcessingInstruction
                if( htmlparser.DEFINE.USE_PROCESSING_INSTRUCTION && html.indexOf( '<?' ) === pos ){
                    if( processText() && htmlparser.DEFINE.STOP_PARSING ){
                        return;
                    };
                    index = html.indexOf( '?>' );
                    if( index !== -1 ){
                        if( handler.onParseProcessingInstruction( htmlparser.unescapeHTML( html.substring( 2, index ) ) ) === true && htmlparser.DEFINE.STOP_PARSING ){
                            return;
                        };
                        html = html.substr( index + 2 );
                    } else {
                        onError( html );
                        return;
                    };
                // end tag
                } else if( html.indexOf( '</', pos ) === pos && htmlparser.isAlphabet( html.charAt( pos + 2 ) ) ){
                    if( isRawElement ){
                        if( lastTagName === 'PLAINTEXT' || lastTagName === 'plaintext' ){
                            ignoreEndTag = true;
                        } else {
                            if( html.indexOf( lastTagName.toLowerCase(), pos ) !== pos + 2 &&
                                html.indexOf( lastTagName.toUpperCase(), pos ) !== pos + 2
                            ){
                                ignoreEndTag = true;
                            };
                        };
                    };
                    if( ignoreEndTag ){
                        if( incrementPosition() && htmlparser.DEFINE.STOP_PARSING ){
                            return;
                        };
                        ignoreEndTag = false;
                    } else {
                        if( processText() && htmlparser.DEFINE.STOP_PARSING ){
                            return;
                        };
                        nextIndex = parseEndTag( stack, handler, html );

                        if( htmlparser.DEFINE.STOP_PARSING && nextIndex === PARSING_STOP ){
                            return;
                        } else if( nextIndex ){
                            html = html.substr( nextIndex );
                        } else {
                            onError( html );
                            return;
                        };
                    };
                } else if( isRawElement ){
                    if( incrementPosition() && htmlparser.DEFINE.STOP_PARSING ){
                        return;
                    };
                // start tag
                } else if( html.charAt( pos ) === '<' && htmlparser.isAlphabet( html.charAt( pos + 1 ) ) ){
                    if( processText() && htmlparser.DEFINE.STOP_PARSING ){
                        return;
                    };
                    nextIndex = parseStartTag( stack, lastTagName, handler, html );

                    if( htmlparser.DEFINE.STOP_PARSING && nextIndex === PARSING_STOP ){
                        return;
                    } else if( nextIndex ){
                        html = html.substr( nextIndex );
                    } else {
                        onError( html );
                        return;
                    };
                // Comment
                } else if( html.indexOf( '<!--' ) === pos ){
                    if( processText() && htmlparser.DEFINE.STOP_PARSING ){
                        return;
                    };
                    index = html.indexOf( '-->' );
                    if( index !== -1 ){
                        if( handler.onParseComment( htmlparser.unescapeHTML( html.substring( 4, index ) ) ) === true && htmlparser.DEFINE.STOP_PARSING ){
                            return;
                        };
                        html = html.substr( index + 3 );
                    } else {
                        onError( html );
                        return;
                    };
                // CDATASection
                } else if( htmlparser.DEFINE.USE_CDATA_SECTION && html.indexOf( '<![CDATA[' ) === pos ){
                    if( processText() && htmlparser.DEFINE.STOP_PARSING ){
                        return;
                    };
                    index = html.indexOf( ']]>' );
                    if( index !== -1 ){
                        if( handler.onParseCDATASection( htmlparser.unescapeHTML( html.substring( 9, index ) ) ) === true && htmlparser.DEFINE.STOP_PARSING ){
                            return;
                        };
                        html = html.substr( index + 3 );
                    } else {
                        onError( html );
                        return;
                    };
                // DocType
                } else if( htmlparser.DEFINE.USE_DOCUMENT_TYPE_NODE && html.indexOf( '<!DOCTYPE ' ) === pos ){
                    if( processText() && htmlparser.DEFINE.STOP_PARSING ){
                        return;
                    };
                    index = html.indexOf( '>' );
                    if( index !== -1 ){
                        if( handler.onParseDocType( html.substring( pos, index + 1 ) ) === true && htmlparser.DEFINE.STOP_PARSING ){
                            return;
                        };
                        html = html.substr( index + 1 );
                    } else {
                        onError( html );
                        return;
                    };
                } else {
                    if( incrementPosition() && htmlparser.DEFINE.STOP_PARSING ){
                        return;
                    };
                };

                htmlLength = html.length - pos;

                if( htmlLength === lastLength ){
                    onError( html );
                    return;
                };

                if( htmlparser.DEFINE.TIME_SLICE_EXECUTION && lazy && html && ( startTime + intervalMs <= now() ) ){
                    handler.onParseProgress( 1 - htmlLength / originalHTMLLength, exec, [ html, handler, stack, originalHTMLLength, pos, lazy, isXML, isInVML ] );
                    return;
                };

                lastLength = htmlLength;
            };

            // Clean up any remaining tags
            closeTag( stack, handler, '', true );

            htmlparser.DEFINE.TIME_SLICE_EXECUTION && lazy && handler.onParseComplete && handler.onParseComplete();

            function incrementPosition(){
                pos = html.indexOf( '<', pos + 1 );

                if( pos === -1 ){
                    pos = html.length;
                    if( processText() && htmlparser.DEFINE.STOP_PARSING ){
                        return true;
                    };
                };
            };

            function processText(){
                if( pos ){
                    var text = html.substr( 0, pos );

                    if( handler.onParseText(
                            isRawElement && !htmlparser.ESCAPABLE_RAW_TEXT_ELEMENTS[ lastTagName ] ? text : htmlparser.unescapeHTML( text )
                        ) === true && htmlparser.DEFINE.STOP_PARSING ){
                        return true;
                    };
                    html = html.substr( pos );
                    pos = 0;
                };
            };

            function onError( msg ){
                handler.onParseError && handler.onParseError( msg );
            };

            /**
             * @return {number}
             */
            function now(){
                return + new Date;
            };
            /**
             * 
             * @param {!Array.<string>} stack 
             * @param {htmlparser.typedef.Handler} handler 
             * @param {string} html "</" で始まる HTML 文字列
             * @return {number} 0:error, 1:Parsing Stop, 4~:success */
            function parseEndTag( stack, handler, html ){
                var phase = 0,
                    l     = html.length,
                    i     = 3,
                    tagName, chr;

                while( i < l && phase !== 2 ){
                    chr = html.charAt( i );
                    switch( phase ){
                        case 0 : // タグ名の終わりの空白文字を待つ
                            if( htmlparser.isWhitespace( chr ) ){
                                phase = 1;
                            } else if( chr === '>' ){
                                phase = 2;
                            };
                            if( phase ){
                                tagName = html.substring( 2, i );
                            };
                            break;
                        case 1 : // タグの終了を待つ
                            if( chr === '>' ){
                                phase = 2;
                            };
                            break;
                    };
                    ++i;
                };
                if( phase === 2 ){
                    tagName = /** @type {string} */ (tagName);
                    if( !htmlparser.VOID_ELEMENTS[ tagName ] ){
                        if( closeTag( stack, handler, isXML || isInVML ? tagName : tagName.toUpperCase(), false ) && htmlparser.DEFINE.STOP_PARSING ){
                            return PARSING_STOP;
                        };
                    };
                    return i;
                };
                return 0; // error!
            };
            /**
             * If return true:Parsing Stop
             * @param {!Array.<string>} stack 
             * @param {htmlparser.typedef.Handler} handler 
             * @param {string} tagName
             * @param {boolean} isClosingAutomatically
             * @return {boolean | void} */
            function closeTag( stack, handler, tagName, isClosingAutomatically ){
                function missingEndTag( tagName ){
                    return isClosingAutomatically && !htmlparser.OMITTABLE_END_TAG_ELEMENTS_WITH_CHILDREN[ tagName ];
                };

                var pos = 0, i = stack.length;
                // If no tag name is provided, clean shop
            
                // Find the closest opened tag of the same type
                if( tagName ){
                    for( pos = i; 0 <= pos; ){
                        if( stack[ --pos ] === tagName ){
                            break;
                        };
                    };
                };
                if( 0 <= pos ){
                    // Close all the open elements, up the stack
                    for( ; pos < i; ){
                        if( handler.onParseEndTag( stack[ --i ], missingEndTag( stack[ i ] ), false ) === true && htmlparser.DEFINE.STOP_PARSING ){
                            return true;
                        };
                        if( htmlparser.DEFINE.USE_XML && isXML && htmlparser.isXMLRootElement( stack[ i ] ) ){
                            isXML = !!handler.isXHTML;
                        };
                    };
                    // Remove the open elements from the stack
                    stack.length = pos;
                    // Update isInVML
                    if( htmlparser.DEFINE.USE_VML && isInVML ){
                        isInVML = false;
                        for( i = pos; i; ){
                            if( htmlparser.isNamespacedTag( stack[ --i ] ) ){
                                isInVML = true;
                                break;
                            };
                        };
                    };
                } else {
                    if( handler.onParseEndTag( tagName, false, true ) === true && htmlparser.DEFINE.STOP_PARSING ){
                        return true;
                    };
                };
            };
            /**
             * 
             * @param {!Array.<string>} stack 
             * @param {string} lastTagName 
             * @param {htmlparser.typedef.Handler} handler 
             * @param {string} html "<" で始まる HTML 文字列
             * @return {number} 0:error, 1:Parsing Stop, 3~:success */
            function parseStartTag( stack, lastTagName, handler, html ){
                /**
                 * 
                 * @param {string} name 
                 * @param {(string | boolean)=} opt_value 
                 */
                function saveAttr( name, opt_value ){
                    attrs[ name ] = opt_value === true
                                  ?    true
                                  : htmlparser.BOOLEAN_ATTRIBUTES[ name.toLowerCase() ]
                                  ?    ( isXML ? htmlparser.unescapeAttrValue( /** @type {string | void} */ (opt_value) || name ) : true )
                                  :    ( htmlparser.unescapeAttrValue( /** @type {string | void} */ (opt_value) || '' ) );
                    ++numAttrs;
                };
                function isEmpty(){
                    empty = html.substr( i, 2 ) === '/>';

                    if( empty ){
                        ++i;
                    };
                    return empty;
                };

                var phase    = 1,
                    l        = html.length,
                    i        = 2,
                    attrs    = {},
                    numAttrs = 0,
                    empty    = false,
                    chr, tagName, start, attrName, quot, escape, tagUpper;

                while( i < l && phase < 9 ){
                    chr = html.charAt( i );
                    switch( phase ){
                        case 1 : // タグ名の終わりの空白文字を待つ
                            if( htmlparser.isWhitespace( chr ) ){
                                phase = 2, tagName = html.substring( 1, i );
                            } else if( chr === '>' || isEmpty() ){
                                phase = 9, tagName = html.substring( 1, i );
                            };
                            break;
                        case 2 : // 属性名の開始を待つ
                            if( chr === '>' || isEmpty() ){
                                phase = 9;
                            } else if( !htmlparser.isWhitespace( chr ) ){
                                phase = 3, start = i;
                            };
                            break;
                        case 3 : // 属性名の終わりを待つ
                            if( chr === '=' ){
                                phase = 5, attrName = html.substring( start, i );
                            } else if( htmlparser.isWhitespace( chr ) ){
                                phase = 4, attrName = html.substring( start, i );
                            } else if( chr === '>' || isEmpty() ){
                                phase = 9, saveAttr( /** @type {string} */ (html.substring( start, i )), true );
                            };
                            break;
                        case 4 : // 属性名に続くスペースの次に続くものは？
                            if( chr === '=' ){
                                phase = 5;
                            } else if( chr === '>' || isEmpty() ){
                                phase = 9, saveAttr( /** @type {string} */ (attrName), true );
                            } else if( !htmlparser.isWhitespace( chr ) ){
                                phase = 3, saveAttr( /** @type {string} */ (attrName), true ), start = i; // <textarea readonly>
                            };
                            break;
                        case 5 : // 属性値の開始 quot を待つ
                            if( chr === '"' || chr === "'" ){
                                phase = 6, quot = chr, start = i + 1;
                            } else if( !htmlparser.isWhitespace( chr ) ){
                                phase = 7, start = i; // no quot
                            };
                            escape = false;
                            break;
                        case 6 : //属性値の閉じ quot を待つ
                            if( !escape && chr === quot ){
                                phase = 2, saveAttr( /** @type {string} */ (attrName), /** @type {string} */ (html.substring( start, i )) );
                            };
                            escape = chr === '\\' && !escape; // \\\\ is not escape for "
                            break;
                        case 7 : //閉じ quot のない属性の値
                            if( htmlparser.isWhitespace( chr ) ){
                                phase = 2;
                            } else if( chr === '>' ){
                                phase = 9;
                            };
                            if( phase !== 7 ){
                                saveAttr( /** @type {string} */ (attrName), /** @type {string} */ (html.substring( start, i )) );
                            };
                            break;
                    };
                    ++i;
                };
                if( phase === 9 ){
                    tagUpper = tagName.toUpperCase();

                    if( htmlparser.DEFINE.USE_XML && !isXML ){
                        isXML = htmlparser.isXMLRootElement( tagName );
                    };
                    if( htmlparser.DEFINE.USE_VML && !isInVML ){
                        isInVML = htmlparser.isNamespacedTag( tagName );
                    };
                    if( !isXML && !isInVML ){
                        while( lastTagName ){
                            if( htmlparser.OMITTABLE_END_TAG_ELEMENTS_WITH_CHILDREN[ lastTagName ] && !htmlparser.OMITTABLE_END_TAG_ELEMENTS_WITH_CHILDREN[ lastTagName ][ tagUpper ] ){
                                if( closeTag( stack, handler, lastTagName, false ) && htmlparser.DEFINE.STOP_PARSING ){
                                    return PARSING_STOP;
                                };
                                lastTagName = stack[ stack.length - 1 ];
                            } else {
                                break;
                            };
                        };
                    };

                    empty = empty || !!htmlparser.VOID_ELEMENTS[ tagUpper ];
                    if( !empty ){
                        stack[ stack.length ] = isXML || isInVML ? tagName : tagUpper;
                    };

                    if( handler.onParseStartTag( isXML || isInVML ? tagName : tagUpper, numAttrs ? attrs : null, empty, i ) === true && htmlparser.DEFINE.STOP_PARSING ){
                        return PARSING_STOP;
                    };
                    return i;
                };
                return 0; // error
            };
        };
    }
);
