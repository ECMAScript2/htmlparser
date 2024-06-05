
/*
 * Original code by Erik John Resig (ejohn.org)
 * http://ejohn.org/blog/pure-javascript-html-parser/
 *
 */

goog.provide( 'htmlparser' );
goog.provide( 'htmlparser.exec' );
goog.provide( 'htmlparser.typedef.Handler' );
goog.provide( 'htmlparser.DEFINE' );

/** @const */
var htmlparser = {};

/** @define {boolean} */
htmlparser.DEFINE.useXML  = goog.define( 'htmlparser.DEFINE.useXML' , false );
/** @define {boolean} */
htmlparser.DEFINE.useLazy = goog.define( 'htmlparser.DEFINE.useLazy', false );
/** @define {boolean} */
htmlparser.DEFINE.parsingStop = goog.define( 'htmlparser.DEFINE.parsingStop', true );
/** @define {boolean} */
htmlparser.DEFINE.parseProcessingInstruction = goog.define( 'htmlparser.DEFINE.parseProcessingInstruction', false );

/**
 * @typedef {{
 *   isXML                        : (boolean | void),
 *   intervalMs                   : (number | void),
 *   onParseError                 : function(string),
 *   onParseStartTag              : function(string, !Array.<string>, boolean, number):boolean,
 *   onParseEndTag                : function(string):boolean,
 *   onParseText                  : function(string),
 *   onParseComment               : function(string),
 *   onParseProcessingInstruction : (function(string) | void),
 *   onParseProgress              : (function(number, !Function, !Arguments) | void),
 *   onComplete                   : (function() | void)
 * }}
 */
htmlparser.typedef.Handler;

/**
 * @private
 * @enum {number}
 */
var _CHAR_KINDS = {
    IS_UPPERCASE_OR_EXCLAMATION_MARK : 1,
    IS_LOWERCASE_ALPHABETS           : 2,
    IS_WHITESPACE                    : 4
};

goog.scope(
    function(){
        /**
         * Empty Elements - HTML 4.01
         * @const {Object.<string, boolena>} */
        var TAGS_EMPTY = {
            AREA  : true, BASE    : true, BASEFONT : true, BR   : true,
            COL   : true, FRAME   : true, HR       : true, IMG  : true,
            INPUT : true, ISINDEX : true, LINK     : true, META : true,
            PARAM : true, EMBED   : true
        };

        /**
         * Block Elements - HTML 4.01
         * @const {Object.<string, boolena>} */
        var TAGS_BLOCK = {
            ADDRESS : true, APPLET   : true, BLOCKQUOTE : true, BUTTON   : true,
            CENTER  : true, DD       : true, DEL        : true, DIR      : true,
            DIV     : true, DL       : true, DT         : true, FIELDSET : true,
            FORM    : true, FRAMESET : true, HR         : true, IFRAME   : true,
            INS     : true, ISINDEX  : true, LI         : true, MAP      : true,
            MENU    : true, NOFRAMES : true, NOSCRIPT   : true, OBJECT   : true,
            OL      : true, P        : true, PRE        : true, SCRIPT   : true,
            TABLE   : true, TBODY    : true, TD         : true, TFOOT    : true,
            TH      : true, THEAD    : true, TR         : true, UL       : true
        };

        /**
         * Inline Elements - HTML 4.01
         * @const {Object.<string, boolena>} */
        var TAGS_INLINE = {
            /*A:true,*/      ABBR     : true, ACRONYM : true, APPLET : true,
            B        : true, BASEFONT : true, BDO     : true, BIG    : true,
            BR       : true, BUTTON   : true, CITE    : true, CODE   : true,
            DEL      : true, DFN      : true, EM      : true, FONT   : true,
            I        : true, IFRAME   : true, IMG     : true, INPUT  : true,
            INS      : true, KBD      : true, LABEL   : true, MAP    : true,
            OBJECT   : true, Q        : true, S       : true, SAMP   : true,
            SCRIPT   : true, SELECT   : true, SMALL   : true, SPAN   : true,
            STRIKE   : true, STRONG   : true, SUB     : true, SUP    : true,
            TEXTAREA : true, TT       : true, U       : true, VAR    : true
        };

        /**
         * Elements that you can,' intentionally,' leave open (and which close themselves)
         * @const {Object.<string, boolena>} */
        var TAGS_CLOSE_SELF = {
            COLGROUP : true, DD : true, DT    : true, LI : true,
            OPTIONS  : true, P  : true, TBODY : true, TD : true,
            TFOOT    : true, TH : true, THEAD : true, TR : true
        };

        /**
         * Elements that you can,' intentionally,' leave open (and which close themselves)
         * @const {Object.<string, Object.<string, boolean>>} */
        var TAGS_SIBLING = {
            TH       : { TD      : true },
            TD       : { TH      : true },
            DT       : { DD      : true },
            DD       : { DT      : true },
            COLGROUP : { CAPTION : true },
            THEAD    : { CAPTION : true, COLGROUP : true },
            /*
             * http://www.tohoho-web.com/html/tbody.htm
             *   > HTML4.01では、ヘッダとフッタを先読みして表示するために、<tbody> よりも <tfoot> の方を先に記述しなくてはならないと定義されています。
             *   > IE5.0 などでは HEAD → BODY → FOOT の順に表示するのですが、
             *   > <tfoot> に未対応の古いブラウザでは、HEAD → FOOT → BODY の順に表示されてしまいます。
             *   > また、HTML5 では、<tfoot> と <tbody> の順番はどちらでもよいことになりました。
             */
            TFOOT    : { CAPTION : true, COLGROUP : true, THEAD : true, TBODY : true },
            TBODY    : { CAPTION : true, COLGROUP : true, THEAD : true, TFOOT : true }
        };

        /**
         * Special Elements (can contain anything)
         * @const {Object.<string, Object.<string, boolean>>} */
        var TAGS_SPECIAL = {
            SCRIPT : true, STYLE : true, PLAINTEXT : true, XMP : true, TEXTAREA : true
        };

        /**
         * Special Elements (can contain anything)
         * @const {Object.<string, boolena>} */
        var ATTR_VAL_IS_URI = {
            action   : true, archive  : true, background : true, cite : true,
            classid  : true, codebase : true, data       : true, href : true,
            longdesc : true, profile  : true, src        : true, // lowsrc, dynsrc
            usemap   : true
        };

        /**
         * 
         * @const {Object.<string, boolena>} */
        var ATTR_IS_NO_VAL = {
            checked  : true, compact  : true, declare  : true, defer    : true,
            disabled : true, ismap    : true, multiple : true, nohref   : true,
            noresize : true, noshade  : true, nowrap   : true, readonly : true,
            selected : true
        };

        /**
         * @const {Object.<string, number>} */
        var CHARS = (function(){
            var chars = 'abcdefghijklmnopqrstuvwxyz! \t\r\n\f\b',
                ret   = {}, i;

            for( i = 26; i; ){
                ret[ chars.charAt( --i ) ] = _CHAR_KINDS.IS_LOWERCASE_ALPHABETS;
            };
            for( i = 27, chars = chars.toUpperCase(); i; ){
                ret[ chars.charAt( --i ) ] = _CHAR_KINDS.IS_UPPERCASE_OR_EXCLAMATION_MARK;
            };
            for( i = 33; 27 < i; ){
                ret[ chars.charAt( --i ) ] = _CHAR_KINDS.IS_WHITESPACE;
            };
            return ret;
        })();

        /** @const {number} */
        var PARSING_STOP = 1;

        /**
         * 
         * @param {string} html 
         * @param {htmlparser.typedef.Handler} handler
         */
        htmlparser.exec = function( html, handler ){
            exec( html, handler, htmlparser.DEFINE.useLazy && !!handler.onComplete, html.length );
        };

        /**
         * 
         * @param {string} html 
         * @param {htmlparser.typedef.Handler} handler
         * @param {boolean} lazy 
         * @param {number} originalHTMLLength 
         * @param {Array.<string>=} opt_stack
         */
        function exec( html, handler, lazy, originalHTMLLength, opt_stack ){
            /** @const {boolean} */
            var isXML      = htmlparser.DEFINE.useXML && !!handler.isXML;
            /** @const {number} */
            var startTime  = lazy ? now() : 0;
            /** @const {number} */
            var intervalMs = handler.intervalMs || 16;
            /** @const {Array.<string>} */
            var stack      = opt_stack || [];

            /** @type {string} */
            var lastHtml   = html;
            var lastTagName, lastTagUpperCased, index, nextIndex;

            while( html ){
                lastTagName = lastTagUpperCased = stack[ stack.length - 1 ];

                if( lastTagName && isXML ){
                    lastTagUpperCased = lastTagName.toUpperCase();
                };

                // Make sure we're not in a script or style element
                if( lastTagName && TAGS_SPECIAL[ lastTagUpperCased ] ){
                    index = html.toUpperCase().indexOf( '</' + lastTagUpperCased );
                    if( 0 <= index ){
                        if( index ){
                            handler.onParseText( html.substring( 0, index ) );
                        };
                        html  = html.substring( index );
                        nextIndex = parseEndTag( stack, handler, html );

                        if( nextIndex === PARSING_STOP && htmlparser.DEFINE.parsingStop ){
                            return;
                        } else if( nextIndex ){
                            html = html.substring( nextIndex );
                        } else {
                            handler.onParseText( html );
                            html = '';
                        };
                    } else {
                        handler.onParseText( html );
                        html = '';
                    };
                // Comment
                } else if( html.indexOf( '<!--' ) === 0 ){
                    index = html.indexOf( '-->' );
                    if( index !== -1 ){
                        handler.onParseComment( html.substring( 4, index ) );
                        html = html.substring( index + 3 );
                    } else {
                        handler.onParseComment( html.substring( 4 ), true );
                        html = '';
                    };
                } else {
                    // end tag
                    if( html.indexOf( '</' ) === 0 ){
                        nextIndex = parseEndTag( stack, handler, html );

                        if( nextIndex === PARSING_STOP && htmlparser.DEFINE.parsingStop ){
                            return;
                        } else if( nextIndex ){
                            html = html.substring( nextIndex );
                        } else {
                            // 解析できなかった閉じタグをテキストとして扱う
                            html = '&lt;' + html.substr( 1 );
                        };
                    // start tag
                    } else if( html.indexOf( '<' ) === 0 ){
                        nextIndex = parseStartTag( stack, lastTagName, handler, html, isXML, false );

                        if( nextIndex === PARSING_STOP && htmlparser.DEFINE.parsingStop ){
                            return;
                        } else if( nextIndex ){
                            html = html.substring( nextIndex );
                        } else {
                            // 解析できなかった開始タグをテキストとして扱う
                            html = '&lt;' + html.substr( 1 );
                        };
                    };

                    index = html.indexOf( '<' );
                    if( index === -1 ){
                        handler.onParseText( html );
                        html = '';
                    } else if( index ){
                        handler.onParseText( html.substring( 0, index ) );
                        html = html.substring( index );
                    };
                };

                if( html === lastHtml ){
                    handler.onParseError( html );
                    return;
                };

                if( htmlparser.DEFINE.useLazy && lazy && html && ( startTime + intervalMs <= now() ) ){
                    handler.onParseProgress( 1 - html.length / originalHTMLLength, exec, [ html, handler, lazy, originalHTMLLength, stack ] );
                    return;
                };

                lastHtml = html;
            };

            // Clean up any remaining tags
            closeTag( stack, handler );

            htmlparser.DEFINE.useLazy && lazy && handler.onComplete();

            /**
             * @return {number}
             */
            function now(){
                return + new Date;
            };
            /**
             * @param {string} chr 
             * @return {boolean}
             */
            function isWhitespace( chr ){
                return CHARS[ chr ] & _CHAR_KINDS.IS_WHITESPACE;
            };
            /**
             * @param {string} chr 
             * @return {boolean}
             */
            function isAlphabet( chr ){
                return CHARS[ chr ] & ( _CHAR_KINDS.IS_UPPERCASE_OR_EXCLAMATION_MARK + _CHAR_KINDS.IS_LOWERCASE_ALPHABETS );
            };
            /**
             * 
             * @param {Array.<string>} stack 
             * @param {htmlparser.typedef.Handler} handler 
             * @param {string} html "</" で始まる HTML 文字列
             * @param {boolean} isXML
             * @return {number} 0:error, 1:Parsing Stop, 4~:success
             */
            function parseEndTag( stack, handler, html, isXML ){
                var phase = 1,
                    l     = html.length,
                    i     = 2,
                    tagName, chr, start;
            
                while( i < l && phase !== 4 ){
                    chr = html.charAt( i );
                    switch( phase ){
                        /* case 0 :
                            if( html.substr( i, 2 ) === '</' ){
                                phase = 1;
                                ++i; // 
                            };
                            break; */
                        case 1 : // タグ名の開始を待つ
                            if( isAlphabet( chr ) ){
                                phase = 2;
                                start = i;
                            };
                            break;
                        case 2 : // タグ名の終わりの空白文字を待つ
                            if( isWhitespace( chr ) ){
                                phase = 3;
                            } else if( chr === '>' ){
                                phase = 4;
                            };
                            if( phase !== 2 ){
                                tagName = html.substring( start, i );
                            };
                            break;
                        case 3 : // タグの終了を待つ
                            if( chr === '>' ){
                                phase = 4;
                            };
                            break;
                    };
                    ++i;
                };
                if( phase === 4 ){
                    if( closeTag( stack, handler, isXML ? tagName : tagName.toUpperCase() ) && htmlparser.DEFINE.parsingStop ){
                        return PARSING_STOP;
                    };
                    return i;
                };
                return 0; // error!
            };
            /**
             * If return true:Parsing Stop
             * @param {Array.<string>} stack 
             * @param {htmlparser.typedef.Handler} handler 
             * @param {string} tagName 
             */
            function closeTag( stack, handler, tagName ){
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
                        if( handler.onParseEndTag( stack[ --i ] ) === false && htmlparser.DEFINE.parsingStop ){
                            return true;
                        };
                    };
                    // Remove the open elements from the stack
                    stack.length = pos;
                };
            };
            /**
             * 
             * @param {Array.<string>} stack 
             * @param {string} lastTagName 
             * @param {htmlparser.typedef.Handler} handler 
             * @param {string} html "<" で始まる HTML 文字列
             * @param {boolean} isXML
             * @param {boolean} skipFixNesting
             * @return {number} 0:error, 1:Parsing Stop, 3~:success
             */
            function parseStartTag( stack, lastTagName, handler, html, isXML, skipFixNesting ){
                /**
                 * 
                 * @param {string} _name 
                 * @param {string=} opt_value 
                 */
                function saveAttr( _name, opt_value ){
                    var name  = _name.toLowerCase();
                    var value = ATTR_IS_NO_VAL[ name ] ? name : ( opt_value || '' );

                    attrs[ ++attrIndex ] = name;
                    attrs[ ++attrIndex ] =
                        value.indexOf( '"' ) !== -1
                              ? value.split( '"' ).join( '\\"' ).split( '\\\\"' ).join( '\\"' )
                              : value;
                };
                function isEmpty(){
                    empty = html.substr( i, 2 ) === '/>';

                    if( empty ){
                        ++i;
                    };
                    return empty;
                };

                var phase     = 1,
                    l         = html.length,
                    i         = 1,
                    attrs     = [],
                    attrIndex = -1,
                    empty     = false,
                    tagName, chr, start, attrName, quot, escape, tagUpper;

                while( i < l && phase < 9 ){
                    chr = html.charAt( i );
                    switch( phase ){
                        /* case 0 :
                            chr === '<' && ( phase = 1 );
                            break; */
                        case 1 : // タグ名の開始を待つ
                            if( isAlphabet( chr ) ){
                                phase = 2, start = i;
                            };
                            break;
                        case 2 : // タグ名の終わりの空白文字を待つ
                            if( isWhitespace( chr ) ){
                                phase = 3, tagName = html.substring( start, i );
                            } else if( chr === '>' || isEmpty() ){
                                phase = 9, tagName = html.substring( start, i );
                            };
                            break;
                        case 3 : // 属性名の開始を待つ
                            if( isAlphabet( chr ) ){
                                phase = 4, start = i;
                            } else if( chr === '>' || isEmpty() ){
                                phase = 9;
                            };
                            break;
                        case 4 : // 属性名の終わりを待つ
                            if( chr === '=' ){
                                phase = 6, attrName = html.substring( start, i );
                            } else if( isWhitespace( chr ) ){
                                phase = 5, attrName = html.substring( start, i );
                            } else if( chr === '>' || isEmpty() ){
                                phase = 9, saveAttr( html.substring( start, i ) );
                            };
                            break;
                        case 5 : // 属性名に続く = または次の属性または htmlタグの閉じ
                            if( isAlphabet( chr ) ){
                                phase = 4, saveAttr( attrName ), start = i; // <textarea readonly>
                            } else if( chr === '=' ){
                                phase = 6;
                            } else if( chr === '>' || isEmpty() ){
                                phase = 9, saveAttr( attrName );
                            };
                            break;
                        case 6 : // 属性値の開始 quot を待つ
                            if( chr === '"' || chr === "'" ){
                                phase = 7, quot = chr, start = i + 1;
                            } else if( !isWhitespace( chr ) ){
                                phase = 8, start = i; // no quot
                            };
                            break;
                        case 7 : //属性値の閉じ quot を待つ
                            if( !escape && chr === quot ){
                                phase = 3, saveAttr( attrName, html.substring( start, i ) );
                            };
                            break;
                        case 8 : //閉じ quot のない属性の値
                            if( isWhitespace( chr ) ){
                                phase = 3, saveAttr( attrName, html.substring( start, i ) );
                            } else if( chr === '>' ){
                                phase = 9, saveAttr( attrName, html.substring( start, i ) );
                            } else if( !escape && !ATTR_VAL_IS_URI[ attrName ] && isEmpty() ){// attr の val が uri で / で終わりかつ、未対応属性の場合
                                phase = 9, saveAttr( attrName, html.substring( start, i ) );
                            };
                            break;
                    };
                    escape = chr === '\\' && !escape; // \\\\ is not escape for "
                    ++i;
                };
                if( phase === 9 ){
                    tagUpper = tagName.toUpperCase();

                    if( !skipFixNesting && TAGS_BLOCK[ tagUpper ] ){
                        while( lastTagName && TAGS_INLINE[ isXML ? lastTagName.toUpperCase() : lastTagName ] ){
                            if( closeTag( stack, handler, lastTagName ) && htmlparser.DEFINE.parsingStop ){
                                return PARSING_STOP;
                            };
                            lastTagName = stack[ stack.length - 1 ];
                        };
                    };
                    if( lastTagName && TAGS_CLOSE_SELF[ tagUpper ] &&
                        ( lastTagName === tagName || ( TAGS_SIBLING[ tagUpper ] && TAGS_SIBLING[ tagUpper ][ isXML ? lastTagName.toUpperCase() : lastTagName ] ) )
                    ){
                        if( closeTag( stack, handler, lastTagName ) && htmlparser.DEFINE.parsingStop ){
                            return PARSING_STOP;
                        };
                    };

                    empty = empty || TAGS_EMPTY[ tagUpper ];
                    if( !empty ){
                        stack[ stack.length ] = isXML ? tagName : tagUpper;
                    };
            
                    if( handler.onParseStartTag( isXML ? tagName : tagUpper, attrs, empty, i ) === false && htmlparser.DEFINE.parsingStop ){
                        return PARSING_STOP;
                    };
                    return i;
                };
                return 0; // error
            };
        };
    }
);
