
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
         * @param {string} unparsedHTML
         * @param {htmlparser.typedef.Handler} handler
         * @param {boolean} isXHTMLDocument
         * @param {!Array.<string>} stack
         * @param {number} originalHTMLLength
         * @param {boolean} isDocumentFragment
         * @param {boolean} isXMLInHTML */
        function exec( unparsedHTML, handler, isXHTMLDocument, stack, originalHTMLLength, isDocumentFragment, isXMLInHTML ){
            var pointer = -1, lastTagName, lastTagUpper, isRawTextElement, index, nodeValue, ignoreEndTag;

            loadLastTagName();
            incrementPosition();

            while( unparsedHTML ){
                isRawTextElement = htmlparser.RAW_TEXT_ELEMENTS[ lastTagUpper ];

                // ProcessingInstruction
                if( htmlparser.DEFINE.USE_PROCESSING_INSTRUCTION && unparsedHTML.indexOf( '<?' ) === pointer ){
                    if( htmlparser.DEFINE.USE_XHTML && isDocumentFragment ){
                        if( unparsedHTML.length === originalHTMLLength ){
                            if( unparsedHTML.indexOf( '<?xml ' ) === pointer ){
                                isDocumentFragment = false;
                                isXHTMLDocument    = true;
                            };
                        };
                    };
                    if( processText() && htmlparser.DEFINE.USE_PAUSE ){
                        return;
                    };
                    index = unparsedHTML.indexOf( '?>' );
                    if( index !== -1 ){
                        nodeValue    = unparsedHTML.substring( 2, index );
                        unparsedHTML = unparsedHTML.substr( index + 2 );
                        if( handler.onParseProcessingInstruction( htmlparser.unescapeHTML( nodeValue ) ) === true && htmlparser.DEFINE.USE_PAUSE ){
                            onProgress();
                            return;
                        };
                    } else {
                        onError( unparsedHTML );
                        return;
                    };
                // end tag
                } else if( unparsedHTML.indexOf( '</', pointer ) === pointer && htmlparser.isAlphabet( unparsedHTML.charAt( pointer + 2 ) ) ){
                    if( isRawTextElement ){
                        if( htmlparser.DEFINE.USE_TRADITIONAL_TAGS && lastTagUpper === 'PLAINTEXT' ){
                            ignoreEndTag = true;
                        } else {
                            if( unparsedHTML.indexOf( isXHTMLDocument ? lastTagName : lastTagName.toLowerCase(), pointer ) !== pointer + 2 &&
                                unparsedHTML.indexOf( lastTagUpper, pointer ) !== pointer + 2
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
                } else if( unparsedHTML.charAt( pointer ) === '<' && htmlparser.isAlphabet( unparsedHTML.charAt( pointer + 1 ) ) ){
                    if( processText() && htmlparser.DEFINE.USE_PAUSE ){
                        return;
                    };
                    if( parseStartTag( stack ) ){
                        return;
                    };
                // Comment
                } else if( unparsedHTML.indexOf( '<!--' ) === pointer ){
                    if( processText() && htmlparser.DEFINE.USE_PAUSE ){
                        return;
                    };
                    index = unparsedHTML.indexOf( '-->' );
                    if( index !== -1 ){
                        nodeValue    = unparsedHTML.substring( 4, index );
                        unparsedHTML = unparsedHTML.substr( index + 3 );
                        if( handler.onParseComment( htmlparser.unescapeHTML( nodeValue ) ) === true && htmlparser.DEFINE.USE_PAUSE ){
                            onProgress();
                            return;
                        };
                    } else {
                        onError( unparsedHTML );
                        return;
                    };
                // CDATASection
                } else if( htmlparser.DEFINE.USE_CDATA_SECTION && unparsedHTML.indexOf( '<![CDATA[' ) === pointer ){
                    if( processText() && htmlparser.DEFINE.USE_PAUSE ){
                        return;
                    };
                    index = unparsedHTML.indexOf( ']]>' );
                    if( index !== -1 ){
                        nodeValue    = unparsedHTML.substring( 9, index );
                        unparsedHTML = unparsedHTML.substr( index + 3 );
                        if( handler.onParseCDATASection( htmlparser.unescapeHTML( nodeValue ) ) === true && htmlparser.DEFINE.USE_PAUSE ){
                            onProgress();
                            return;
                        };
                    } else {
                        onError( unparsedHTML );
                        return;
                    };
                // DocType
                } else if( htmlparser.DEFINE.USE_DOCUMENT_TYPE_NODE && ( unparsedHTML.indexOf( '<!DOCTYPE ' ) === pointer || unparsedHTML.indexOf( '<!doctype ' ) === pointer ) ){
                    unparsedHTML = unparsedHTML.substr( pointer );
                    pointer      = 0;
                    index        = unparsedHTML.indexOf( '>' );
                    if( index !== -1 ){
                        nodeValue    = unparsedHTML.substring( 0, index + 1 );
                        unparsedHTML = unparsedHTML.substr( index + 1 );
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
                        onError( unparsedHTML );
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
                pointer = unparsedHTML.indexOf( '<', pointer + 1 );

                if( pointer === -1 ){
                    pointer = unparsedHTML.length;
                    if( processText() && htmlparser.DEFINE.USE_PAUSE ){
                        return true;
                    };
                };
            };

            /** @return {boolean | void} true:stopped */
            function processText(){
                if( pointer ){
                    var text = unparsedHTML.substr( 0, pointer );

                    unparsedHTML = unparsedHTML.substr( pointer );
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
                    1 - unparsedHTML.length / originalHTMLLength,
                    exec,
                    [ unparsedHTML, handler, isXHTMLDocument, stack, originalHTMLLength, isDocumentFragment, isXMLInHTML ]
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
                    l     = unparsedHTML.length,
                    i     = 3,
                    chr, tagEndIndex, tagName, tagUpper;

                for( ; i < l && phase !== 2; ++i ){
                    chr = unparsedHTML.charAt( i );
                    switch( phase ){
                        case 0 : // タグ名の終わりの空白文字を待つ
                            if( htmlparser.isWhitespace( chr ) ){
                                phase = 1, tagEndIndex = i;
                                break;
                            };
                        case 1 : // タグの終了を待つ
                            if( chr === '>' ){
                                phase = 2, tagEndIndex = i;
                            };
                            break;
                    };
                };
                if( phase === 2 ){
                    tagName      = unparsedHTML.substring( 2, tagEndIndex );
                    unparsedHTML = unparsedHTML.substr( i );
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
                    onError( unparsedHTML );
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
                 * @param {number} tagEndIndex */
                function saveTag( tagEndIndex ){
                    tagName = unparsedHTML.substring( 1, tagEndIndex );

                    if( htmlparser.DEFINE.USE_XML_IN_HTML && !lastXMLInHTML ){
                        isXMLInHTML = htmlparser.isXMLRootElement( tagName );
                    };

                    isXMLOrVML = isXMLInHTML || htmlparser.isNamespacedTag( tagName );
                };
                /**
                 * @param {number=} attrValEndIndexOrVoid */
                function saveAttr( attrValEndIndexOrVoid ){
                    var name  = unparsedHTML.substring( attrNameStartIndex, attrNameEndIndex );
                    var value = attrValEndIndexOrVoid != null ? unparsedHTML.substring( attrValStartIndex, attrValEndIndexOrVoid ) : true;

                    attrs[ name ] = value === true
                                      ? ( isXHTMLDocument || isXMLOrVML
                                            ? name
                                            : value
                                        )
                                  : htmlparser.BOOLEAN_ATTRIBUTES[ name.toLowerCase() ]
                                      ? ( isXHTMLDocument || isXMLOrVML
                                            ? htmlparser.unescapeAttrValue( /** @type {string} */ (value) || name )
                                            : true
                                        )
                                      : ( htmlparser.unescapeAttrValue( /** @type {string} */ (value) || '' ) );
                    ++numAttrs;
                };
                function isEmpty(){
                    empty = unparsedHTML.substr( i, 2 ) === '/>';

                    if( empty ){
                        ++i;
                    };
                    return empty;
                };

                var phase         = 1,
                    l             = unparsedHTML.length,
                    i             = 2,
                    attrs         = {},
                    numAttrs      = 0,
                    empty         = false,
                    lastXMLInHTML = isXMLInHTML,
                    chr, attrNameStartIndex, attrNameEndIndex, attrValStartIndex,
                    tagName, quot, isEscaped, isXMLOrVML, tagUpper;

                for( ; i < l && phase < 9; ++i ){
                    chr = unparsedHTML.charAt( i );
                    switch( phase ){
                        case 1 : // タグ名の終わりの空白文字を待つ
                            if( htmlparser.isWhitespace( chr ) ){
                                phase = 2, saveTag( i );
                            } else if( chr === '>' ){
                                phase = 9, saveTag( i );
                            } else if( isEmpty() ){
                                phase = 9, saveTag( i - 1 );
                            };
                            break;
                        case 2 : // 属性名の開始を待つ
                            if( chr === '>' || isEmpty() ){
                                phase = 9;
                            } else if( !htmlparser.isWhitespace( chr ) ){
                                phase = 3, attrNameStartIndex = i;
                            };
                            break;
                        case 3 : // 属性名の終わりを待つ
                            if( chr === '=' ){
                                phase = 5, attrNameEndIndex = i;
                            } else if( htmlparser.isWhitespace( chr ) ){
                                phase = 4, attrNameEndIndex = i;
                            } else if( chr === '>' ){
                                phase = 9, attrNameEndIndex = i, saveAttr();
                            } else if( isEmpty() ){
                                phase = 9, attrNameEndIndex = i - 1, saveAttr();
                            };
                            break;
                        case 4 : // 属性名に続くスペースの次に続くものは？
                            if( chr === '=' ){
                                phase = 5;
                            } else if( chr === '>' || isEmpty() ){             // <textarea readonly>
                                phase = 9, saveAttr();                         //                   ^
                            } else if( !htmlparser.isWhitespace( chr ) ){      // <textarea readonly x
                                phase = 3, saveAttr(), attrNameStartIndex = i; //                    ^
                            };
                            break;
                        case 5 : // 属性値の開始 quot を待つ
                            if( chr === '"' || chr === "'" ){
                                phase = 6, quot = chr, attrValStartIndex = i + 1;
                            } else if( !htmlparser.isWhitespace( chr ) ){
                                phase = 7, attrValStartIndex = i; // no quote
                            };
                            isEscaped = false;
                            break;
                        case 6 : //属性値の閉じ quot を待つ
                            if( !isEscaped && chr === quot ){
                                phase = 2, saveAttr( i );
                            };
                            isEscaped = chr === '\\' && !isEscaped; // \\\\ is not escape for "
                            break;
                        case 7 : //閉じ quot のない属性の値
                            if( htmlparser.isWhitespace( chr ) ){
                                phase = 2, saveAttr( i );
                            } else if( chr === '>' ){
                                phase = 9, saveAttr( i );
                            };
                            break;
                    };
                };
                if( phase === 9 ){
                    tagName = /** @type {string} */ (tagName);

                    if( isXMLOrVML ){
                        if( !empty ){
                            saveLastTagName( tagName );
                        } else {
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

                    unparsedHTML = unparsedHTML.substr( i );

                    if( handler.onParseStartTag( isXHTMLDocument || isXMLOrVML ? tagName : /** @type {string} */ (tagUpper), numAttrs ? attrs : null, empty, i ) === true && htmlparser.DEFINE.USE_PAUSE ){
                        onProgress();
                        return true;
                    };
                } else {
                    onError( unparsedHTML );
                    return true;
                };
            };
        };
    }
);
