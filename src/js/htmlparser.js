
/*
 * Original code by Erik John Resig (ejohn.org)
 * http://ejohn.org/blog/pure-javascript-html-parser/
 *
 */

goog.provide( 'htmlparser' );
goog.provide( 'htmlparser.exec' );
goog.provide( 'htmlparser.typedef.Handler' );
goog.provide( 'htmlparser.DEFINE' );

goog.require( 'OMITTABLE_END_TAG_ELEMENTS_WITH_CHILDREN' );

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

/**
 * @private
 * @enum {number}
 */
var _CHAR_KINDS = {
    IS_UPPERCASE_ALPHABETS : 1,
    IS_LOWERCASE_ALPHABETS : 2,
    IS_WHITESPACE          : 4
};

goog.scope(
    function(){
        /**
         * 
         * @const {Object.<string, boolean>} */
        var TAGS_XML = {
            xml : true, svg : true, math : true
        };

        /**
         * Empty Elements - HTML 4.01
         * @const {Object.<string, boolean>} */
        var TAGS_EMPTY = {
            AREA    : true, BASE    : true, BASEFONT : true, BR    : true, BGSOUND : true,
            COL     : true, COMMAND : true, FRAME    : true, HR    : true, IMG     : true,
            INPUT   : true, ISINDEX : true, KEYGEN   : true, LINK  : true, META    : true,
            PARAM   : true, SOURCE  : true, TRACK    : true, EMBED : true, WBR     : true
        };

        /**
         * Special Elements (can contain anything)
         * @const {Object.<string, boolean>} */
        var TAGS_SPECIAL = {
            SCRIPT : true, STYLE : true, PLAINTEXT : true, XMP : true, TEXTAREA : true
        };

        /**
         * 
         * @const {Object.<string, boolean>} */
        var ATTR_VAL_IS_URI = {
            action   : true, archive  : true, background : true, cite : true,
            classid  : true, codebase : true, data       : true, href : true,
            longdesc : true, profile  : true, src        : true, // lowsrc, dynsrc
            usemap   : true
        };

        /**
         * 
         * @const {Object.<string, boolean>} */
        var ATTR_IS_NO_VAL = {
            checked  : true, compact  : true, declare  : true, defer    : true,
            disabled : true, ismap    : true, multiple : true, nohref   : true,
            noresize : true, noshade  : true, nowrap   : true, readonly : true,
            selected : true
        };

        /**
         * @const {Object.<string, number>} */
        var CHARS = {
            'a':2,'b':2,'c':2,'d':2,'e':2,'f':2,'g':2,'h':2,'i':2,'j':2,'k':2,'l':2,'m':2,
            'n':2,'o':2,'p':2,'q':2,'r':2,'s':2,'t':2,'u':2,'v':2,'w':2,'x':2,'y':2,'z':2,
            'A':1,'B':1,'C':1,'D':1,'E':1,'F':1,'G':1,'H':1,'I':1,'J':1,'K':1,'L':1,'M':1,
            'N':1,'O':1,'P':1,'Q':1,'R':1,'S':1,'T':1,'U':1,'V':1,'W':1,'X':1,'Y':1,'Z':1,
            '\b':4,'\f':4,'\n':4,'\r':4,'\t':4,' ':4
        };

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
            var lastTagName, lastTagUpperCased, index, nextIndex, htmlLength;

            while( html ){
                lastTagName = lastTagUpperCased = stack[ stack.length - 1 ];

                if( lastTagName && isXML ){
                    lastTagUpperCased = lastTagName.toUpperCase();
                };

                // Make sure we're not in a script or style element
                if( TAGS_SPECIAL[ lastTagUpperCased ] ){
                    if( lastTagUpperCased === 'PLAINTEXT' ){
                        handler.onParseText( html );
                        html = '';
                    } else {
                        index = html.toUpperCase().indexOf( '</' + lastTagUpperCased );
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
                        handler.onParseProcessingInstruction( html.substring( 2, index ) );
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
                        handler.onParseCDATASection( html.substring( 9, index ) );
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
                        handler.onParseComment( html.substring( 4, index ) );
                        html = html.substring( index + 3 );
                    } else {
                        handler.onParseError( html );
                        return;
                    };
                // end tag
                } else if( html.indexOf( '</' ) === pos ){
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
                } else if( html.charAt( pos ) === '<' && isAlphabet( html.charAt( pos + 1 ) ) ){
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
                        handler.onParseText( html );
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
                    handler.onParseText( html.substring( 0, pos ) );
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
             * @param {string} chr 
             * @return {number}
             */
            function isWhitespace( chr ){
                return CHARS[ chr ] & _CHAR_KINDS.IS_WHITESPACE;
            };
            /**
             * @param {string} chr 
             * @return {number}
             */
            function isAlphabet( chr ){
                return CHARS[ chr ] & ( _CHAR_KINDS.IS_UPPERCASE_ALPHABETS + _CHAR_KINDS.IS_LOWERCASE_ALPHABETS );
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
                    i     = 2,
                    tagName, chr, start;

                while( i < l && phase !== 3 ){
                    chr = html.charAt( i );
                    switch( phase ){
                        case 0 : // タグ名の開始を待つ
                            if( isAlphabet( chr ) ){
                                phase = 1;
                                start = i;
                            };
                            break;
                        case 1 : // タグ名の終わりの空白文字を待つ
                            if( isWhitespace( chr ) ){
                                phase = 2;
                            } else if( chr === '>' ){
                                phase = 3;
                            };
                            if( phase !== 1 ){
                                tagName = html.substring( /** @type {number} */ (start), i );
                            };
                            break;
                        case 2 : // タグの終了を待つ
                            if( chr === '>' ){
                                phase = 3;
                            };
                            break;
                    };
                    ++i;
                };
                if( phase === 3 ){
                    tagName = /** @type {string} */ (tagName);
                    if( closeTag( stack, handler, isXML ? tagName : tagName.toUpperCase(), false ) && htmlparser.DEFINE.parsingStop ){
                        return PARSING_STOP;
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
                    return closeAutomatically && !OMITTABLE_END_TAG_ELEMENTS_WITH_CHILDREN[ tagName ];
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
                        if( htmlparser.DEFINE.useXML && isXML && TAGS_XML[ stack[ i ] ] ){
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
                 * @param {string=} opt_value 
                 */
                function saveAttr( name, opt_value ){
                    attrs[ name ] = ATTR_IS_NO_VAL[ name.toLowerCase() ]
                                  ? ( isXML ? opt_value || name : true )
                                  : ( opt_value || '' );
                    ++numAttrs;
                };
                function isEmpty(){
                    empty = html.substr( i, 2 ) === '/>';

                    if( empty ){
                        ++i;
                    };
                    return empty;
                };
                function isAttributePrefixSymbol(){
                    return htmlparser.DEFINE.attributePrefixSymbol && chr === htmlparser.DEFINE.attributePrefixSymbol;
                };

                var phase    = 0,
                    l        = html.length,
                    i        = 1,
                    attrs    = {},
                    numAttrs = 0,
                    empty    = false,
                    tagName, chr, start, attrName, quot, escape, tagUpper;

                while( i < l && phase < 9 ){
                    chr = html.charAt( i );
                    switch( phase ){
                        case 0 : // タグ名の開始を待つ
                            if( isAlphabet( chr ) ){
                                phase = 1, start = i;
                            };
                            break;
                        case 1 : // タグ名の終わりの空白文字を待つ
                            if( isWhitespace( chr ) ){
                                phase = 2, tagName = html.substring( start, i );
                            } else if( chr === '>' || isEmpty() ){
                                phase = 9, tagName = html.substring( start, i );
                            };
                            break;
                        case 2 : // 属性名の開始を待つ
                            if( isAttributePrefixSymbol() ){
                                phase = 3, start = i;
                            } else if( isAlphabet( chr ) ){
                                phase = 4, start = i;
                            } else if( chr === '>' || isEmpty() ){
                                phase = 9;
                            };
                            break;
                        case 3 : // 属性の接頭の記号に続くアルファベットを待つ
                            if( htmlparser.DEFINE.attributePrefixSymbol ){
                                if( isAlphabet( chr ) ){
                                    phase = 4;
                                } else {
                                    phase = 9;
                                };
                            };
                            break;
                        case 4 : // 属性名の終わりを待つ
                            if( chr === '=' ){
                                phase = 6, attrName = html.substring( start, i );
                            } else if( isWhitespace( chr ) ){
                                phase = 5, attrName = html.substring( start, i );
                            } else if( chr === '>' || isEmpty() ){
                                phase = 9, saveAttr( /** @type {string} */ (html.substring( start, i )) );
                            };
                            break;
                        case 5 : // 属性名に続くスペースの次に続くものは？
                            if( isAttributePrefixSymbol() ){
                                phase = 3, saveAttr( /** @type {string} */ (attrName) ), start = i;
                            } else if( isAlphabet( chr ) ){
                                phase = 4, saveAttr( /** @type {string} */ (attrName) ), start = i; // <textarea readonly>
                            } else if( chr === '=' ){
                                phase = 6;
                            } else if( chr === '>' || isEmpty() ){
                                phase = 9, saveAttr( /** @type {string} */ (attrName) );
                            };
                            break;
                        case 6 : // 属性値の開始 quot を待つ
                            if( chr === '"' || chr === "'" ){
                                phase = 7, quot = chr, start = i + 1;
                            } else if( !isWhitespace( chr ) ){
                                phase = 8, start = i; // no quot
                            };
                            escape = false;
                            break;
                        case 7 : //属性値の閉じ quot を待つ
                            if( !escape && chr === quot ){
                                phase = 2, saveAttr( /** @type {string} */ (attrName), /** @type {string} */ (html.substring( start, i )) );
                            };
                            escape = chr === '\\' && !escape; // \\\\ is not escape for "
                            break;
                        case 8 : //閉じ quot のない属性の値
                            if( isWhitespace( chr ) ){
                                phase = 2;
                            } else if( chr === '>' ){
                                phase = 9;
                            } else if( !ATTR_VAL_IS_URI[ /** @type {string} */ (attrName) ] && isEmpty() ){// attr の val が uri で / で終わりかつ、未対応属性の場合
                                phase = 9;
                            };
                            if( phase !== 8 ){
                                saveAttr( /** @type {string} */ (attrName), /** @type {string} */ (html.substring( start, i )) );
                            };
                            break;
                    };
                    ++i;
                };
                if( phase === 9 ){
                    tagUpper = tagName.toUpperCase();

                    if( htmlparser.DEFINE.useXML && !isXML ){
                        isXML = !!TAGS_XML[ tagName ];
                    };
                    if( !isXML ){
                        while( lastTagName ){
                            if( OMITTABLE_END_TAG_ELEMENTS_WITH_CHILDREN[ lastTagName ] && !OMITTABLE_END_TAG_ELEMENTS_WITH_CHILDREN[ lastTagName ][ tagUpper ] ){
                                if( closeTag( stack, handler, lastTagName, false ) && htmlparser.DEFINE.parsingStop ){
                                    return PARSING_STOP;
                                };
                                lastTagName = stack[ stack.length - 1 ];
                            } else {
                                break;
                            };
                        };
                    };

                    empty = empty || !!TAGS_EMPTY[ tagUpper ];
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
