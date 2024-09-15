goog.provide( 'htmlparser.isWhitespace' );
goog.provide( 'htmlparser.isAlphabet' );
goog.provide( 'htmlparser.XML_ROOT_ELEMENTS' );
goog.provide( 'htmlparser.VOID_ELEMENTS' );
goog.provide( 'htmlparser.RAW_TEXT_ELEMENTS' );
goog.provide( 'htmlparser.BOOLEAN_ATTRIBUTES' );
goog.provide( 'htmlparser.OMITTABLE_END_TAG_ELEMENTS_WITH_CHILDREN' );

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
 * @private
 * @const {Object.<string, number>} */
htmlparser._CHARS = {
	'a':2,'b':2,'c':2,'d':2,'e':2,'f':2,'g':2,'h':2,'i':2,'j':2,'k':2,'l':2,'m':2,
	'n':2,'o':2,'p':2,'q':2,'r':2,'s':2,'t':2,'u':2,'v':2,'w':2,'x':2,'y':2,'z':2,
	'A':1,'B':1,'C':1,'D':1,'E':1,'F':1,'G':1,'H':1,'I':1,'J':1,'K':1,'L':1,'M':1,
	'N':1,'O':1,'P':1,'Q':1,'R':1,'S':1,'T':1,'U':1,'V':1,'W':1,'X':1,'Y':1,'Z':1,
	'\b':4,'\f':4,'\n':4,'\r':4,'\t':4,' ':4
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
 * 
 * @const {Object.<string, boolean>} */
htmlparser.XML_ROOT_ELEMENTS = {
	xml : true, svg : true, math : true
};

/**
 * @see https://html.spec.whatwg.org/multipage/syntax.html#void-elements
 *   Void elements
 *     area, base, br, col, embed, hr, img, input, link, meta, source, track, wbr
 * @const {!Object.<string, boolean>} */
htmlparser.VOID_ELEMENTS = {
	AREA    : true, BASE    : true, BASEFONT : true, BR    : true, BGSOUND : true,
	COL     : true, COMMAND : true, FRAME    : true, HR    : true, IMG     : true,
	INPUT   : true, ISINDEX : true, KEYGEN   : true, LINK  : true, META    : true,
	PARAM   : true, SOURCE  : true, TRACK    : true, EMBED : true, WBR     : true
};

/**
 * @see https://html.spec.whatwg.org/multipage/syntax.html#raw-text-elements
 *   Raw text elements
 *     script, style
 * 
 * @see https://html.spec.whatwg.org/multipage/syntax.html#escapable-raw-text-elements
 *   Escapable raw text elements
 *     textarea, title
 * 
 * @const {!Object.<string, boolean>} */
htmlparser.RAW_TEXT_ELEMENTS = {
	SCRIPT : true, STYLE : true, TEXTAREA : true, TITLE : true, PLAINTEXT : true, XMP : true
};

/**
 * @see https://html.spec.whatwg.org/multipage/syntax.html#attributes-2
 *   Empty attribute syntax
 *     Just the attribute name. The value is implicitly the empty string.
 * @const {Object.<string, boolean>} */
htmlparser.BOOLEAN_ATTRIBUTES = {
	checked  : true, compact  : true, declare  : true, defer    : true,
	disabled : true, ismap    : true, multiple : true, nohref   : true,
	noresize : true, noshade  : true, nowrap   : true, readonly : true,
	selected : true
};

/**
 * @see https://html.spec.whatwg.org/multipage/syntax.html#optional-tags
 * 
 *   Elements that can omit end tag and elements they can make children of.
 * 
 * @const {Object.<string, Object.<string, boolean>>} */
var OMITTABLE_END_TAG_ELEMENTS_WITH_CHILDREN = {
	CAPTION  : {ARTICLE:!0,SECTION:!0,NAV:!0,ASIDE:!0,H1:!0,H2:!0,H3:!0,H4:!0,H5:!0,H6:!0,HEADER:!0,FOOTER:!0,ADDRESS:!0,P:!0,HR:!0,PRE:!0,BLOCKQUOTE:!0,OL:!0,UL:!0,DL:!0,FIGURE:!0,DIV:!0,A:!0,EM:!0,STRONG:!0,SMALL:!0,S:!0,CITE:!0,Q:!0,DFN:!0,ABBR:!0,DATA:!0,TIME:!0,CODE:!0,VAR:!0,SAMP:!0,KBD:!0,SUB:!0,SUP:!0,I:!0,B:!0,U:!0,MARK:!0,RUBY:!0,BDI:!0,BDO:!0,SPAN:!0,BR:!0,WBR:!0,INS:!0,DEL:!0,PICTURE:!0,IMG:!0,IFRAME:!0,EMBED:!0,OBJECT:!0,VIDEO:!0,AUDIO:!0,MAP:!0,AREA:!0,math:!0,svg:!0,         FORM:!0,LABEL:!0,INPUT:!0,BUTTON:!0,SELECT:!0,DATALIST:!0,TEXTAREA:!0,KEYGEN:!0,OUTPUT:!0,PROGRESS:!0,METER:!0,FIELDSET:!0,DETAILS:!0,DIALOG:!0,SCRIPT:!0,NOSCRIPT:!0,TEMPLATE:!0,CANVAS:!0},
	DD       : {ARTICLE:!0,SECTION:!0,NAV:!0,ASIDE:!0,H1:!0,H2:!0,H3:!0,H4:!0,H5:!0,H6:!0,HEADER:!0,FOOTER:!0,ADDRESS:!0,P:!0,HR:!0,PRE:!0,BLOCKQUOTE:!0,OL:!0,UL:!0,DL:!0,FIGURE:!0,DIV:!0,A:!0,EM:!0,STRONG:!0,SMALL:!0,S:!0,CITE:!0,Q:!0,DFN:!0,ABBR:!0,DATA:!0,TIME:!0,CODE:!0,VAR:!0,SAMP:!0,KBD:!0,SUB:!0,SUP:!0,I:!0,B:!0,U:!0,MARK:!0,RUBY:!0,BDI:!0,BDO:!0,SPAN:!0,BR:!0,WBR:!0,INS:!0,DEL:!0,PICTURE:!0,IMG:!0,IFRAME:!0,EMBED:!0,OBJECT:!0,VIDEO:!0,AUDIO:!0,MAP:!0,AREA:!0,math:!0,svg:!0,TABLE:!0,FORM:!0,LABEL:!0,INPUT:!0,BUTTON:!0,SELECT:!0,DATALIST:!0,TEXTAREA:!0,KEYGEN:!0,OUTPUT:!0,PROGRESS:!0,METER:!0,FIELDSET:!0,DETAILS:!0,DIALOG:!0,SCRIPT:!0,NOSCRIPT:!0,TEMPLATE:!0,CANVAS:!0},
	           // => LI, TD
	DT       : {                                                                                              ADDRESS:!0,P:!0,HR:!0,PRE:!0,BLOCKQUOTE:!0,OL:!0,UL:!0,DL:!0,FIGURE:!0,DIV:!0,A:!0,EM:!0,STRONG:!0,SMALL:!0,S:!0,CITE:!0,Q:!0,DFN:!0,ABBR:!0,DATA:!0,TIME:!0,CODE:!0,VAR:!0,SAMP:!0,KBD:!0,SUB:!0,SUP:!0,I:!0,B:!0,U:!0,MARK:!0,RUBY:!0,BDI:!0,BDO:!0,SPAN:!0,BR:!0,WBR:!0,INS:!0,DEL:!0,PICTURE:!0,IMG:!0,IFRAME:!0,EMBED:!0,OBJECT:!0,VIDEO:!0,AUDIO:!0,MAP:!0,AREA:!0,math:!0,svg:!0,TABLE:!0,FORM:!0,LABEL:!0,INPUT:!0,BUTTON:!0,SELECT:!0,DATALIST:!0,TEXTAREA:!0,KEYGEN:!0,OUTPUT:!0,PROGRESS:!0,METER:!0,FIELDSET:!0,DETAILS:!0,DIALOG:!0,SCRIPT:!0,NOSCRIPT:!0,TEMPLATE:!0,CANVAS:!0},
	           // => TH
	P        : {                                                                                                                                                                            A:!0,EM:!0,STRONG:!0,SMALL:!0,S:!0,CITE:!0,Q:!0,DFN:!0,ABBR:!0,DATA:!0,TIME:!0,CODE:!0,VAR:!0,SAMP:!0,KBD:!0,SUB:!0,SUP:!0,I:!0,B:!0,U:!0,MARK:!0,RUBY:!0,BDI:!0,BDO:!0,SPAN:!0,BR:!0,WBR:!0,INS:!0,DEL:!0,PICTURE:!0,IMG:!0,IFRAME:!0,EMBED:!0,OBJECT:!0,VIDEO:!0,AUDIO:!0,MAP:!0,AREA:!0,math:!0,svg:!0,                 LABEL:!0,INPUT:!0,BUTTON:!0,SELECT:!0,DATALIST:!0,TEXTAREA:!0,KEYGEN:!0,OUTPUT:!0,PROGRESS:!0,METER:!0,                                 SCRIPT:!0,NOSCRIPT:!0,TEMPLATE:!0,CANVAS:!0},
	           // => RB, RP, RT 
    HTML     : {HEAD:!0,BODY:!0},
    HEAD     : {TITLE:!0,BASE:!0,BGSOUND:!0,LINK:!0,META:!0,STYLE:!0,SCRIPT:!0,NOSCRIPT:!0,TEMPLETE:!0},
    COLGROUP : {COL:!0},
    OPTGROUP : {OPTION:!0},
	OPTION   : {},
	TBODY    : {TR:!0},            // => THEAD, TFOOT
	TR       : {TH:!0,TD:!0},
    RBC      : {RB:!0,RP:!0,RT:!0} // => RTC
};

htmlparser.OMITTABLE_END_TAG_ELEMENTS_WITH_CHILDREN = OMITTABLE_END_TAG_ELEMENTS_WITH_CHILDREN;

OMITTABLE_END_TAG_ELEMENTS_WITH_CHILDREN.LI    = OMITTABLE_END_TAG_ELEMENTS_WITH_CHILDREN.TD    = OMITTABLE_END_TAG_ELEMENTS_WITH_CHILDREN.DD;
OMITTABLE_END_TAG_ELEMENTS_WITH_CHILDREN.TH    = OMITTABLE_END_TAG_ELEMENTS_WITH_CHILDREN.DT;
OMITTABLE_END_TAG_ELEMENTS_WITH_CHILDREN.RB    = OMITTABLE_END_TAG_ELEMENTS_WITH_CHILDREN.RP    = OMITTABLE_END_TAG_ELEMENTS_WITH_CHILDREN.RT = OMITTABLE_END_TAG_ELEMENTS_WITH_CHILDREN.P;
OMITTABLE_END_TAG_ELEMENTS_WITH_CHILDREN.TFOOT = OMITTABLE_END_TAG_ELEMENTS_WITH_CHILDREN.THEAD = OMITTABLE_END_TAG_ELEMENTS_WITH_CHILDREN.TBODY;
OMITTABLE_END_TAG_ELEMENTS_WITH_CHILDREN.RTC   = OMITTABLE_END_TAG_ELEMENTS_WITH_CHILDREN.RBC;
