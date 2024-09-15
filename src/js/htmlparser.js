
/*
 * Original code by Erik John Resig (ejohn.org)
 * http://ejohn.org/blog/pure-javascript-html-parser/
 *
 */

goog.provide( 'htmlparser' );
goog.provide( 'htmlparser.exec' );
goog.provide( 'htmlparser.typedef.Handler' );
goog.provide( 'htmlparser.DEFINE' );

goog.require( 'htmlparser.XML_ROOT_ELEMENTS' );
goog.require( 'htmlparser.VOID_ELEMENTS' );
goog.require( 'htmlparser.RAW_TEXT_ELEMENTS' );
goog.require( 'htmlparser.BOOLEAN_ATTRIBUTES' );
goog.require( 'htmlparser.OMITTABLE_END_TAG_ELEMENTS_WITH_CHILDREN' );

/** @define {boolean} */
htmlparser.DEFINE.useXML                   = goog.define( 'htmlparser.DEFINE.useXML' , false );
/** @define {boolean} */
htmlparser.DEFINE.useDocTypeNode           = goog.define( 'htmlparser.DEFINE.useDocTypeNode' , false );
/** @define {boolean} */
htmlparser.DEFINE.useProcessingInstruction = goog.define( 'htmlparser.DEFINE.useProcessingInstruction', false );
/** @define {boolean} */
htmlparser.DEFINE.useLazy                  = goog.define( 'htmlparser.DEFINE.useLazy', false );
/** @define {boolean} */
htmlparser.DEFINE.parsingStop              = goog.define( 'htmlparser.DEFINE.parsingStop', true );
/** @define {boolean} */
htmlparser.DEFINE.useCDATASection          = goog.define( 'htmlparser.DEFINE.useCDATASection', true );
/** @define {string} */
htmlparser.DEFINE.attributePrefixSymbol    = goog.define( 'htmlparser.DEFINE.attributePrefixSymbol', '' );

/**
 * @typedef {{
 *   isXHTML                      : (boolean | void),
 *   intervalMs                   : (number | void),
 *   onParseError                 : (function(string) | void),
 *   onParseDocType               : (function(string) | void),
 *   onParseStartTag              : function(string, Object.<string, (string | boolean)>, boolean, number):(boolean | void),
 *   onParseEndTag                : function(string, boolean, boolean):(boolean | void),
 *   onParseText                  : function(string),
 *   onParseComment               : function(string),
 *   onParseCDATASection          : (function(string) | void),
 *   onParseProcessingInstruction : (function(string) | void),
 *   onParseProgress              : (function(number, !Function, !Array) | void),
 *   onComplete                   : (function() | void)
 * }}
 */
htmlparser.typedef.Handler;

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
            exec( html, 0, handler, htmlparser.DEFINE.useLazy && !!handler.onComplete, html.length );
        };

        /**
         * 
         * @param {string} html 
         * @param {number} pos
         * @param {htmlparser.typedef.Handler} handler
         * @param {boolean} lazy 
         * @param {number} originalHTMLLength 
         * @param {!Array.<string>=} opt_stack
         */
        function exec( html, pos, handler, lazy, originalHTMLLength, opt_stack ){
            /** @const {number} */
            var startTime  = lazy ? now() : 0;
            /** @const {number} */
            var intervalMs = handler.intervalMs || 16;
            /** @const {!Array.<string>} */
            var stack      = opt_stack || [];

            /** @type {boolean} */
            var isXML      = htmlparser.DEFINE.useXML && !!handler.isXHTML;
            /** @type {number} */
            var lastLength = html.length - pos;
            var lastTagName, index, nextIndex, htmlLength;

            while( html ){
                lastTagName = stack[ stack.length - 1 ];

                // Make sure we're not in a script or style element
                if( htmlparser.RAW_TEXT_ELEMENTS[ lastTagName ] ){
                    if( lastTagName === 'PLAINTEXT' || lastTagName === 'plaintext' ){
                        handler.onParseText( unescapeForHTML( html ) );
                        html = '';
                    } else {
                        index = html.indexOf( '</' + ( isXML ? lastTagName : lastTagName.toLowerCase() ) );
                        if( index === -1 ){
                            index = html.indexOf( '</' + ( isXML ? lastTagName.toUpperCase() : lastTagName ) );
                        };
                        if( 0 <= index ){
                            pos = index;
                            processText();
                            nextIndex = parseEndTag( stack, handler, html );
    
                            if( nextIndex === PARSING_STOP && htmlparser.DEFINE.parsingStop ){
                                return;
                            } else if( nextIndex ){
                                html = html.substring( nextIndex );
                            } else {
                                handler.onParseError( html );
                                return;
                            };
                        } else {
                            handler.onParseError( html );
                            return;
                        };
                    };
                // DocType
                } else if( htmlparser.DEFINE.useDocTypeNode && html.indexOf( '<!DOCTYPE ' ) === pos ){
                    processText();
                    index = html.indexOf( '>' );
                    if( index !== -1 ){
                        handler.onParseDocType( html.substring( 10, index ) );
                        html = html.substring( index + 1 );
                    } else {
                        handler.onParseError( html );
                        return;
                    };
                // ProcessingInstruction
                } else if( htmlparser.DEFINE.useProcessingInstruction && html.indexOf( '<?' ) === pos ){
                    processText();
                    index = html.indexOf( '?>' );
                    if( index !== -1 ){
                        handler.onParseProcessingInstruction( unescapeForHTML( html.substring( 2, index ) ) );
                        html = html.substring( index + 2 );
                    } else {
                        handler.onParseError( html );
                        return;
                    };
                // CDATASection
                } else if( htmlparser.DEFINE.useCDATASection && html.indexOf( '<![CDATA[' ) === pos ){
                    processText();
                    index = html.indexOf( ']]>' );
                    if( index !== -1 ){
                        handler.onParseCDATASection( unescapeForHTML( html.substring( 9, index ) ) );
                        html = html.substring( index + 3 );
                    } else {
                        handler.onParseError( html );
                        return;
                    };
                // Comment
                } else if( html.indexOf( '<!--' ) === pos ){
                    processText();
                    index = html.indexOf( '-->' );
                    if( index !== -1 ){
                        handler.onParseComment( unescapeForHTML( html.substring( 4, index ) ) );
                        html = html.substring( index + 3 );
                    } else {
                        handler.onParseError( html );
                        return;
                    };
                // end tag
                } else if( html.indexOf( '</' ) === pos && htmlparser.isAlphabet( html.charAt( pos + 2 ) ) ){
                    processText();
                    nextIndex = parseEndTag( stack, handler, html );

                    if( htmlparser.DEFINE.parsingStop && nextIndex === PARSING_STOP ){
                        return;
                    } else if( nextIndex ){
                        html = html.substring( nextIndex );
                    } else {
                        handler.onParseError( html );
                        return;
                    };
                // start tag
                } else if( html.charAt( pos ) === '<' && htmlparser.isAlphabet( html.charAt( pos + 1 ) ) ){
                    processText();
                    nextIndex = parseStartTag( stack, lastTagName, handler, html );

                    if( htmlparser.DEFINE.parsingStop && nextIndex === PARSING_STOP ){
                        return;
                    } else if( nextIndex ){
                        html = html.substring( nextIndex );
                    } else {
                        handler.onParseError( html );
                        return;
                    };
                } else {
                    index = html.indexOf( '<', pos );
                    if( index === -1 ){
                        handler.onParseText( unescapeForHTML( html ) );
                        html = '';
                    } else if( pos < index ){
                        pos = index;
                    } else {
                        ++pos;
                    };
                };

                htmlLength = html.length - pos;

                if( htmlLength === lastLength ){
                    handler.onParseError( html );
                    return;
                };

                if( htmlparser.DEFINE.useLazy && lazy && html && ( startTime + intervalMs <= now() ) ){
                    handler.onParseProgress( 1 - htmlLength / originalHTMLLength, exec, [ html, pos, handler, lazy, originalHTMLLength, stack ] );
                    return;
                };

                lastLength = htmlLength;
            };

            processText();

            // Clean up any remaining tags
            closeTag( stack, handler, '', true );

            htmlparser.DEFINE.useLazy && lazy && handler.onComplete();

            function processText(){
                if( pos ){
                    handler.onParseText( unescapeForHTML( html.substring( 0, pos ) ) );
                    html = html.substring( pos );
                    pos = 0;
                };
            };

            /**
             * @return {number}
             */
            function now(){
                return + new Date;
            };
            /**
             * @param {string} str 
             * @return {string}
             */
            function unescapeForHTML( str ){
                return str.split( '&lt;' ).join( '<' ).split( '&gt;' ).join( '>' ).split( '&amp;' ).join( '&' );
            };
            /**
             * 
             * @param {!Array.<string>} stack 
             * @param {htmlparser.typedef.Handler} handler 
             * @param {string} html "</" で始まる HTML 文字列
             * @return {number} 0:error, 1:Parsing Stop, 4~:success
             */
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
                        if( closeTag( stack, handler, isXML ? tagName : tagName.toUpperCase(), false ) && htmlparser.DEFINE.parsingStop ){
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
             * @param {boolean} closeAutomatically
             * @return {boolean | void}
             */
            function closeTag( stack, handler, tagName, closeAutomatically ){
                function missingEndTag( tagName ){
                    return closeAutomatically && !htmlparser.OMITTABLE_END_TAG_ELEMENTS_WITH_CHILDREN[ tagName ];
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
                        if( handler.onParseEndTag( stack[ --i ], missingEndTag( stack[ i ] ), false ) === true && htmlparser.DEFINE.parsingStop ){
                            return true;
                        };
                        if( htmlparser.DEFINE.useXML && isXML && htmlparser.XML_ROOT_ELEMENTS[ stack[ i ] ] ){
                            isXML = !!handler.isXHTML;
                        };
                    };
                    // Remove the open elements from the stack
                    stack.length = pos;
                } else {
                    if( handler.onParseEndTag( tagName, false, true ) === true && htmlparser.DEFINE.parsingStop ){
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
             * @return {number} 0:error, 1:Parsing Stop, 3~:success
             */
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
                                  ?    ( isXML ? unescapeForHTML( /** @type {string | void} */ (opt_value) || name ) : true )
                                  :    ( unescapeForHTML( /** @type {string | void} */ (opt_value) || '' ) );
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

                    if( htmlparser.DEFINE.useXML && !isXML ){
                        isXML = !!htmlparser.XML_ROOT_ELEMENTS[ tagName ];
                    };
                    if( !isXML ){
                        while( lastTagName ){
                            if( htmlparser.OMITTABLE_END_TAG_ELEMENTS_WITH_CHILDREN[ lastTagName ] && !htmlparser.OMITTABLE_END_TAG_ELEMENTS_WITH_CHILDREN[ lastTagName ][ tagUpper ] ){
                                if( closeTag( stack, handler, lastTagName, false ) && htmlparser.DEFINE.parsingStop ){
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
                        stack[ stack.length ] = isXML ? tagName : tagUpper;
                    };

                    if( handler.onParseStartTag( isXML ? tagName : tagUpper, numAttrs ? attrs : null, empty, i ) === true && htmlparser.DEFINE.parsingStop ){
                        return PARSING_STOP;
                    };
                    return i;
                };
                return 0; // error
            };
        };
    }
);
