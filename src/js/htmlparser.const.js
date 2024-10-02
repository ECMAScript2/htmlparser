goog.provide( 'htmlparser.XML_ROOT_ELEMENTS' );
goog.provide( 'htmlparser.BOOLEAN_ATTRIBUTES' );
goog.provide( 'htmlparser.VOID_ELEMENTS' );
goog.provide( 'htmlparser.RAW_TEXT_ELEMENTS' );
goog.provide( 'htmlparser.OMITTABLE_END_TAG_ELEMENTS_WITH_CHILDREN' );

/**
 * 
 * @const {Object.<string, boolean>} */
htmlparser.XML_ROOT_ELEMENTS = {
	xml : true, svg : true, math : true
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
 * @see https://html.spec.whatwg.org/multipage/syntax.html#void-elements
 *   Void elements
 *     area, base, br, col, embed, hr, img, input, link, meta, source, track, wbr
 * @const {!Object.<string, boolean>} */
htmlparser.VOID_ELEMENTS = {
	AREA    : true, BASE    : true, BASEFONT : true, BR    : true, BGSOUND : true,
	COL     : true, COMMAND : true, FRAME    : true, HR    : true, IMG     : true,
	INPUT   : true, ISINDEX : true, KEYGEN   : true, LINK  : true, META    : true,
	PARAM   : true, SOURCE  : true, TRACK    : true, EMBED : true, WBR     : true,

	area    : true, base    : true, basefont : true, br    : true, bgsound : true,
	col     : true, command : true, frame    : true, hr    : true, img     : true,
	input   : true, isindex : true, keygen   : true, link  : true, meta    : true,
	param   : true, source  : true, track    : true, embed : true, wbr     : true
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
	SCRIPT : true, STYLE : true, TEXTAREA : true, TITLE : true, PLAINTEXT : true, XMP : true,
	script : true, style : true, textarea : true, title : true, plaintext : true, xmp : true
};

/** @private */
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

/**
 * @see https://html.spec.whatwg.org/multipage/syntax.html#optional-tags
 * 
 *   Elements that can omit end tag and elements they can make children of.
 * 
 *   xhtml では閉じタグを用意できないので小文字は用意しない
 * 
 * @const {Object.<string, Object.<string, boolean>>} */
htmlparser.OMITTABLE_END_TAG_ELEMENTS_WITH_CHILDREN = OMITTABLE_END_TAG_ELEMENTS_WITH_CHILDREN;

OMITTABLE_END_TAG_ELEMENTS_WITH_CHILDREN.LI    = OMITTABLE_END_TAG_ELEMENTS_WITH_CHILDREN.TD    = OMITTABLE_END_TAG_ELEMENTS_WITH_CHILDREN.DD;
OMITTABLE_END_TAG_ELEMENTS_WITH_CHILDREN.TH    = OMITTABLE_END_TAG_ELEMENTS_WITH_CHILDREN.DT;
OMITTABLE_END_TAG_ELEMENTS_WITH_CHILDREN.RB    = OMITTABLE_END_TAG_ELEMENTS_WITH_CHILDREN.RP    = OMITTABLE_END_TAG_ELEMENTS_WITH_CHILDREN.RT = OMITTABLE_END_TAG_ELEMENTS_WITH_CHILDREN.P;
OMITTABLE_END_TAG_ELEMENTS_WITH_CHILDREN.TFOOT = OMITTABLE_END_TAG_ELEMENTS_WITH_CHILDREN.THEAD = OMITTABLE_END_TAG_ELEMENTS_WITH_CHILDREN.TBODY;
OMITTABLE_END_TAG_ELEMENTS_WITH_CHILDREN.RTC   = OMITTABLE_END_TAG_ELEMENTS_WITH_CHILDREN.RBC;
