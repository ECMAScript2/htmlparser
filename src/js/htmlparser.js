
/*
 * Original code by Erik John Resig (ejohn.org)
 * http://ejohn.org/blog/pure-javascript-html-parser/
 *
 */

goog.provide( 'htmlparser' );
goog.provide( 'htmlparser.exec' );
goog.provide( 'htmlparser.typedef.Handler' );
goog.provide( 'htmlparser.isWhitespace' );
goog.provide( 'htmlparser.isAlphabet' );
goog.provide( 'htmlparser.isXMLRootElement' );
goog.provide( 'htmlparser.isNamespacedTag' );
goog.provide( 'htmlparser.unescapeHTML' );
goog.provide( 'htmlparser.escapeHTML' );
goog.provide( 'htmlparser.unescapeAttrValue' );

goog.require( 'htmlparser.DEFINE' );
goog.require( 'htmlparser.XML_ROOT_ELEMENTS' );
goog.require( 'htmlparser.VOID_ELEMENTS' );
goog.require( 'htmlparser.NON_TEXT_CHILD_ELEMENTS' );
goog.require( 'htmlparser.RAW_TEXT_ELEMENTS' );
goog.require( 'htmlparser.ESCAPABLE_RAW_TEXT_ELEMENTS' );
goog.require( 'htmlparser.BOOLEAN_ATTRIBUTES' );
goog.require( 'htmlparser.OMITTABLE_END_TAG_ELEMENTS_WITH_CHILDREN' );

/**
 * @typedef {{
 *   onParseError                 : (function(string) | void),
 *   onParseDocType               : (function(string):(boolean | void) | void),
 *   onParseStartTag              : function(string, Object.<string, (string | boolean)>, boolean, number):(boolean | void),
 *   onParseEndTag                : function(string, boolean, boolean),
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
 * @enum {number} */
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
 * @return {number} */
htmlparser.isWhitespace = function( chr ){
	return htmlparser._CHARS[ chr ] & htmlparser._CHAR_KINDS.IS_WHITESPACE;
};

/**
 * @param {string} chr 
 * @return {number} */
htmlparser.isAlphabet = function( chr ){
	return htmlparser._CHARS[ chr ] & ( htmlparser._CHAR_KINDS.IS_UPPERCASE_ALPHABETS + htmlparser._CHAR_KINDS.IS_LOWERCASE_ALPHABETS );
};

/**
 * @param {string} tagName
 * @return {boolean} */
htmlparser.isXMLRootElement = function( tagName ){
	return !!htmlparser.XML_ROOT_ELEMENTS[ tagName ];
};

/**
 * @param {string} tagName
 * @return {boolean} */
htmlparser.isNamespacedTag = function( tagName ){
	return 0 < tagName.indexOf( ':' );
};

/**
 * @param {string} str 
 * @return {string} */
htmlparser.unescapeHTML = function( str ){
    return str.split( '&lt;' ).join( '<' )
              .split( '&gt;' ).join( '>' )
              .split( '&amp;lt;' ).join( '&lt;' )
              .split( '&amp;gt;' ).join( '&gt;' );
};

/**
 * @param {string} str 
 * @return {string} */
htmlparser.escapeHTML = function ( str ){
    return str.split( '&lt;' ).join( '&amp;lt;' )
              .split( '&gt;' ).join( '&amp;gt;' )
              .split( '<' ).join( '&lt;' )
              .split( '>' ).join( '&gt;' );
};

/**
 * @param {string} str 
 * @return {string} */
htmlparser.unescapeAttrValue = function normalize( str ){
    return htmlparser.unescapeHTML( str ).split( '\\"' ).join( '"' )
                                         .split( "\\'" ).join( "'" );
};

goog.scope(
    function(){
        /**
         * 
         * @param {string} html html document or document fragment
         * @param {htmlparser.typedef.Handler} handler
         * @param {boolean=} opt_isXHTMLFragment Parse as XHTML when the input is a document fragment */
        htmlparser.exec = function( html, handler, opt_isXHTMLFragment ){
            exec( html, handler, htmlparser.DEFINE.USE_XHTML && !!opt_isXHTMLFragment, [], html.length, true, false );
        };

        /**
         * 
         * @param {string} unpersedHTML
         * @param {htmlparser.typedef.Handler} handler
         * @param {boolean} isXHTMLDocument
         * @param {!Array.<string>} stack
         * @param {number} originalHTMLLength
         * @param {boolean} isDocumentFragment
         * @param {boolean} isXMLInHTML */
        function exec( unpersedHTML, handler, isXHTMLDocument, stack, originalHTMLLength, isDocumentFragment, isXMLInHTML ){
            var pointer = -1, lastTagName, lastTagUpper, isRawTextElement, index, nodeValue, ignoreEndTag;

            loadLastTagName();
            incrementPosition();

            while( unpersedHTML ){
                isRawTextElement = htmlparser.RAW_TEXT_ELEMENTS[ lastTagUpper ];

                // ProcessingInstruction
                if( htmlparser.DEFINE.USE_PROCESSING_INSTRUCTION && unpersedHTML.indexOf( '<?' ) === pointer ){
                    if( htmlparser.DEFINE.USE_XHTML && isDocumentFragment ){
                        if( unpersedHTML.length === originalHTMLLength ){
                            if( unpersedHTML.indexOf( '<?xml ' ) === pointer ){
                                isDocumentFragment = false;
                                isXHTMLDocument    = true;
                            };
                        };
                    };
                    if( processText() && htmlparser.DEFINE.USE_PAUSE ){
                        return;
                    };
                    index = unpersedHTML.indexOf( '?>' );
                    if( index !== -1 ){
                        nodeValue    = unpersedHTML.substring( 2, index );
                        unpersedHTML = unpersedHTML.substr( index + 2 );
                        if( handler.onParseProcessingInstruction( htmlparser.unescapeHTML( nodeValue ) ) === true && htmlparser.DEFINE.USE_PAUSE ){
                            onProgress();
                            return;
                        };
                    } else {
                        onError( unpersedHTML );
                        return;
                    };
                // end tag
                } else if( unpersedHTML.indexOf( '</', pointer ) === pointer && htmlparser.isAlphabet( unpersedHTML.charAt( pointer + 2 ) ) ){
                    if( isRawTextElement ){
                        if( htmlparser.DEFINE.USE_TRADITIONAL_TAGS && lastTagUpper === 'PLAINTEXT' ){
                            ignoreEndTag = true;
                        } else {
                            if( unpersedHTML.indexOf( isXHTMLDocument ? lastTagName : lastTagName.toLowerCase(), pointer ) !== pointer + 2 &&
                                unpersedHTML.indexOf( lastTagUpper, pointer ) !== pointer + 2
                            ){
                                ignoreEndTag = true;
                            };
                        };
                    };
                    if( ignoreEndTag ){
                        if( incrementPosition() && htmlparser.DEFINE.USE_PAUSE ){
                            return;
                        };
                        ignoreEndTag = false;
                    } else {
                        if( processText() && htmlparser.DEFINE.USE_PAUSE ){
                            return;
                        };
                        if( parseEndTag( stack ) ){
                            return;
                        };
                    };
                } else if( isRawTextElement ){
                    if( incrementPosition() && htmlparser.DEFINE.USE_PAUSE ){
                        return;
                    };
                // start tag
                } else if( unpersedHTML.charAt( pointer ) === '<' && htmlparser.isAlphabet( unpersedHTML.charAt( pointer + 1 ) ) ){
                    if( processText() && htmlparser.DEFINE.USE_PAUSE ){
                        return;
                    };
                    if( parseStartTag( stack ) ){
                        return;
                    };
                // Comment
                } else if( unpersedHTML.indexOf( '<!--' ) === pointer ){
                    if( processText() && htmlparser.DEFINE.USE_PAUSE ){
                        return;
                    };
                    index = unpersedHTML.indexOf( '-->' );
                    if( index !== -1 ){
                        nodeValue    = unpersedHTML.substring( 4, index );
                        unpersedHTML = unpersedHTML.substr( index + 3 );
                        if( handler.onParseComment( htmlparser.unescapeHTML( nodeValue ) ) === true && htmlparser.DEFINE.USE_PAUSE ){
                            onProgress();
                            return;
                        };
                    } else {
                        onError( unpersedHTML );
                        return;
                    };
                // CDATASection
                } else if( htmlparser.DEFINE.USE_CDATA_SECTION && unpersedHTML.indexOf( '<![CDATA[' ) === pointer ){
                    if( processText() && htmlparser.DEFINE.USE_PAUSE ){
                        return;
                    };
                    index = unpersedHTML.indexOf( ']]>' );
                    if( index !== -1 ){
                        nodeValue    = unpersedHTML.substring( 9, index );
                        unpersedHTML = unpersedHTML.substr( index + 3 );
                        if( handler.onParseCDATASection( htmlparser.unescapeHTML( nodeValue ) ) === true && htmlparser.DEFINE.USE_PAUSE ){
                            onProgress();
                            return;
                        };
                    } else {
                        onError( unpersedHTML );
                        return;
                    };
                // DocType
                } else if( htmlparser.DEFINE.USE_DOCUMENT_TYPE_NODE && ( unpersedHTML.indexOf( '<!DOCTYPE ' ) === pointer || unpersedHTML.indexOf( '<!doctype ' ) === pointer ) ){
                    unpersedHTML = unpersedHTML.substr( pointer );
                    pointer      = 0;
                    index        = unpersedHTML.indexOf( '>' );
                    if( index !== -1 ){
                        nodeValue    = unpersedHTML.substring( 0, index + 1 );
                        unpersedHTML = unpersedHTML.substr( index + 1 );
                        if( htmlparser.DEFINE.USE_XHTML && isDocumentFragment ){
                            // update XHTML fragment mode
                            isXHTMLDocument = 0 < nodeValue.indexOf( '-//W3C//DTD XHTML ' );
                        };
                        isDocumentFragment = false;
                        if( handler.onParseDocType( nodeValue ) === true && htmlparser.DEFINE.USE_PAUSE ){
                            onProgress();
                            return;
                        };
                    } else {
                        onError( unpersedHTML );
                        return;
                    };
                } else {
                    if( incrementPosition() && htmlparser.DEFINE.USE_PAUSE ){
                        return;
                    };
                };
            };

            // Clean up any remaining tags
            closeTag( stack, '', true );

            htmlparser.DEFINE.USE_PAUSE && handler.onParseComplete && handler.onParseComplete();

            function loadLastTagName(){
                lastTagName = stack[ stack.length - 1 ] || '';
                updateLastTagUpper();
            };

            /** @param {string} newLastTagName */
            function saveLastTagName( newLastTagName ){
                lastTagName = stack[ stack.length ] = newLastTagName;
                updateLastTagUpper();
            };

            function updateLastTagUpper(){
                if( isXMLInHTML || htmlparser.isNamespacedTag( lastTagName ) ){
                    lastTagUpper = '';
                } else {
                    lastTagUpper = isXHTMLDocument ? lastTagName.toUpperCase() : lastTagName;
                };
            };

            /** @return {boolean | void} true:stopped */
            function incrementPosition(){
                pointer = unpersedHTML.indexOf( '<', pointer + 1 );

                if( pointer === -1 ){
                    pointer = unpersedHTML.length;
                    if( processText() && htmlparser.DEFINE.USE_PAUSE ){
                        return true;
                    };
                };
            };

            /** @return {boolean | void} true:stopped */
            function processText(){
                if( pointer ){
                    var text = unpersedHTML.substr( 0, pointer );

                    unpersedHTML = unpersedHTML.substr( pointer );
                    pointer      = 0;

                    if( isDocumentFragment || lastTagName && !htmlparser.NON_TEXT_CHILD_ELEMENTS[ lastTagUpper ] ){
                        if( handler.onParseText(
                                isRawTextElement && !htmlparser.ESCAPABLE_RAW_TEXT_ELEMENTS[ lastTagUpper ] ? text : htmlparser.unescapeHTML( text )
                            ) === true && htmlparser.DEFINE.USE_PAUSE ){
                            onProgress();
                            return true;
                        };
                    };
                };
            };

            function onProgress(){
                handler.onParseProgress &&
                handler.onParseProgress(
                    1 - unpersedHTML.length / originalHTMLLength,
                    exec,
                    [ unpersedHTML, handler, isXHTMLDocument, stack, originalHTMLLength, isDocumentFragment, isXMLInHTML ]
                );
            };

            function onError( msg ){
                handler.onParseError && handler.onParseError( msg );
            };

            /**
             * 
             * @param {!Array.<string>} stack
             * @return {boolean | void} true:error */
            function parseEndTag( stack ){
                var phase = 0,
                    l     = unpersedHTML.length,
                    i     = 3,
                    chr, tagName, tagUpper;

                for( ; i < l && phase !== 2; ++i ){
                    chr = unpersedHTML.charAt( i );
                    switch( phase ){
                        case 0 : // タグ名の終わりの空白文字を待つ
                            if( htmlparser.isWhitespace( chr ) ){
                                phase = 1;
                            } else if( chr === '>' ){
                                phase = 2;
                            };
                            if( phase ){
                                tagName = unpersedHTML.substring( 2, i );
                            };
                            break;
                        case 1 : // タグの終了を待つ
                            if( chr === '>' ){
                                phase = 2;
                            };
                            break;
                    };
                };
                if( phase === 2 ){
                    unpersedHTML = unpersedHTML.substr( i );
                    tagName      = /** @type {string} */ (tagName);
                    if( isXMLInHTML || htmlparser.isNamespacedTag( tagName ) ){
                        closeTag( stack, tagName, false );
                    } else {
                        tagUpper = tagName.toUpperCase();
                        if( !htmlparser.VOID_ELEMENTS[ tagUpper ] ){
                            closeTag( stack, isXHTMLDocument ? tagName : tagUpper, false );
                        };
                    };
                } else {
                    onError( unpersedHTML );
                    return true;
                };
            };
            /**
             * If return true:Parsing Stop
             * @param {!Array.<string>} stack 
             * @param {string} tagName
             * @param {boolean} isClosingAutomatically */
            function closeTag( stack, tagName, isClosingAutomatically ){
                function detectInvalidEndTagOmission( tagName ){
                    if( isXHTMLDocument ){
                        tagName = tagName.toUpperCase();
                    };
                    return !htmlparser.OMITTABLE_END_TAG_ELEMENTS_WITH_CHILDREN[ tagName ];
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
                        handler.onParseEndTag( stack[ --i ], isClosingAutomatically && detectInvalidEndTagOmission( stack[ i ] ), false );

                        if( htmlparser.DEFINE.USE_XML_IN_HTML && isXMLInHTML && htmlparser.isXMLRootElement( stack[ i ] ) ){
                            isXMLInHTML = false;
                        };
                    };
                    // Remove the open elements from the stack
                    stack.length = pos;
                } else {
                    handler.onParseEndTag( tagName, false, true );
                };
                loadLastTagName();
            };
            /**
             * 
             * @param {!Array.<string>} stack
             * @return {boolean | void} true:stopped or error */
            function parseStartTag( stack ){
                /**
                 * @param {string} name 
                 * @param {(string | boolean)} value */
                function saveAttr( name, value ){
                    attrs[ name ] = value === true
                                      ? ( isXMLInHTML
                                            ? name
                                            : value
                                        )
                                  : htmlparser.BOOLEAN_ATTRIBUTES[ name.toLowerCase() ]
                                      ? ( isXMLInHTML
                                            ? htmlparser.unescapeAttrValue( /** @type {string} */ (value) || name )
                                            : true
                                        )
                                      : ( htmlparser.unescapeAttrValue( /** @type {string} */ (value) || '' ) );
                    ++numAttrs;
                };
                function isEmpty(){
                    empty = unpersedHTML.substr( i, 2 ) === '/>';

                    if( empty ){
                        ++i;
                    };
                    return empty;
                };

                var phase    = 1,
                    l        = unpersedHTML.length,
                    i        = 2,
                    attrs    = {},
                    numAttrs = 0,
                    empty    = false,
                    chr, tagName, start, attrName, quot, escape, isXMLOrVML, tagUpper, lastXMLInHTML;

                for( ; i < l && phase < 9; ++i ){
                    chr = unpersedHTML.charAt( i );
                    switch( phase ){
                        case 1 : // タグ名の終わりの空白文字を待つ
                            if( htmlparser.isWhitespace( chr ) ){
                                phase = 2, tagName = unpersedHTML.substring( 1, i );
                            } else if( chr === '>' ){
                                phase = 9, tagName = unpersedHTML.substring( 1, i );
                            } else if( isEmpty() ){
                                phase = 9, tagName = unpersedHTML.substring( 1, i - 1 );
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
                                phase = 5, attrName = unpersedHTML.substring( start, i );
                            } else if( htmlparser.isWhitespace( chr ) ){
                                phase = 4, attrName = unpersedHTML.substring( start, i );
                            } else if( chr === '>' ){
                                phase = 9, saveAttr( unpersedHTML.substring( start, i ), true );
                            } else if( isEmpty() ){
                                phase = 9, saveAttr( unpersedHTML.substring( start, i - 1 ), true );
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
                                phase = 2, saveAttr( /** @type {string} */ (attrName), unpersedHTML.substring( start, i ) );
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
                                saveAttr( /** @type {string} */ (attrName), unpersedHTML.substring( start, i ) );
                            };
                            break;
                    };
                };
                if( phase === 9 ){
                    tagName = /** @type {string} */ (tagName);

                    if( htmlparser.DEFINE.USE_XML_IN_HTML && !( lastXMLInHTML = isXMLInHTML ) ){
                        isXMLInHTML = htmlparser.isXMLRootElement( tagName );
                    };

                    if( isXMLInHTML || htmlparser.isNamespacedTag( tagName ) ){
                        isXMLOrVML = true;
                        if( !empty ){
                            saveLastTagName( tagName );
                        } else {
                            /** @suppress {checkTypes} */
                            isXMLInHTML = lastXMLInHTML;
                        };
                    } else {
                        tagUpper = tagName.toUpperCase();

                        while( lastTagName ){
                            if( htmlparser.OMITTABLE_END_TAG_ELEMENTS_WITH_CHILDREN[ lastTagUpper ] && !htmlparser.OMITTABLE_END_TAG_ELEMENTS_WITH_CHILDREN[ lastTagUpper ][ tagUpper ] ){
                                closeTag( stack, lastTagName, false );
                            } else {
                                break;
                            };
                        };

                        empty = empty || !!htmlparser.VOID_ELEMENTS[ tagUpper ];
                        if( !empty ){
                            saveLastTagName( isXHTMLDocument ? tagName : tagUpper );
                        };
                    };

                    unpersedHTML = unpersedHTML.substr( i );

                    if( handler.onParseStartTag( isXHTMLDocument || isXMLOrVML ? tagName : /** @type {string} */ (tagUpper), numAttrs ? attrs : null, empty, i ) === true && htmlparser.DEFINE.USE_PAUSE ){
                        onProgress();
                        return true;
                    };
                } else {
                    onError( unpersedHTML );
                    return true;
                };
            };
        };
    }
);
