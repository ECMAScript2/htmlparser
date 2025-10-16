goog.provide( 'htmlparser.XML_ROOT_ELEMENTS' );
goog.provide( 'htmlparser.BOOLEAN_ATTRIBUTES' );
goog.provide( 'htmlparser.VOID_ELEMENTS' );
goog.provide( 'htmlparser.NON_TEXT_CHILD_ELEMENTS' );
goog.provide( 'htmlparser.RAW_TEXT_ELEMENTS' );
goog.provide( 'htmlparser.ESCAPABLE_RAW_TEXT_ELEMENTS' );
goog.provide( 'htmlparser.OMITTABLE_END_TAG_ELEMENTS_WITH_CHILDREN' );

goog.require( 'htmlparser.DEFINE' );

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
    async      : true, autofocus : true, checked   : true, compact  : true, declare  : true,
    defer      : true, disabled  : true, draggable : true, hidden   : true, ismap    : true,
    loop       : true, multiple  : true, nohref    : true, noresize : true, noshade  : true,
    novalidate : true, nowrap    : true, readonly  : true, required : true, reversed : true,
    scoped     : true, selected  : true
};

/**
 * @see https://html.spec.whatwg.org/multipage/syntax.html#void-elements
 *   Void elements
 *     area, base, br, col, embed, hr, img, input, link, meta, source, track, wbr
 * @const {!Object.<string, boolean>} */
htmlparser.VOID_ELEMENTS =
    htmlparser.DEFINE.USE_TRADITIONAL_TAGS
    ? {
          AREA     : true, BASE    : true, COL     : true, EMBED : true, BR      : true,
          HR       : true, IMG     : true, INPUT   : true, LINK  : true, META    : true,
          SOURCE   : true, TRACK   : true, WBR     : true,
          // legacy
          BASEFONT : true, BGSOUND : true, COMMAND : true, FRAME : true, ISINDEX : true,
          KEYGEN   : true, PARAM   : true, SPACER  : true
      }
    : {
          AREA     : true, BASE    : true, COL     : true, EMBED : true, BR      : true,
          HR       : true, IMG     : true, INPUT   : true, LINK  : true, META    : true,
          SOURCE   : true, TRACK   : true, WBR     : true
      };

/**
 * @see https://www.w3.org/TR/html401/sgml/dtd.html#head.misc
 *   Elements that cannot contain text nodes as children, excluding void elements.
 * @const {!Object.<string, boolean>} */
htmlparser.NON_TEXT_CHILD_ELEMENTS =
    htmlparser.DEFINE.USE_TRADITIONAL_TAGS
    ? {
          MAP      : true, DATALIST : true, DL    : true, OL    : true, UL    : true,
          SELECT   : true, OPTGROUP : true, TABLE : true, THEAD : true, TFOOT : true,
          TBODY    : true, COLGROUP : true, TR    : true, // HEAD  : true,
          // legacy
          DIR      : true, FRAMESET : true, MENU  : true
      }
    : {
          MAP      : true, DATALIST : true, DL    : true, OL    : true, UL    : true,
          SELECT   : true, OPTGROUP : true, TABLE : true, THEAD : true, TFOOT : true,
          TBODY    : true, COLGROUP : true, TR    : true // , HEAD  : true
      };

/**
 * @see https://html.spec.whatwg.org/multipage/syntax.html#raw-text-elements
 *   Raw text elements
 *     script, style
 * 
 * @see https://html.spec.whatwg.org/multipage/syntax.html#escapable-raw-text-elements
 *   Escapable raw text elements
 *     textarea, title, listing
 * 
 * @const {!Object.<string, boolean>} */
htmlparser.RAW_TEXT_ELEMENTS =
    htmlparser.DEFINE.USE_TRADITIONAL_TAGS
    ? {
          SCRIPT  : true, STYLE     : true, TEXTAREA : true, TITLE : true,
          // legacy
          LISTING : true, PLAINTEXT : true, XMP      : true
      }
    : {
          SCRIPT  : true, STYLE     : true, TEXTAREA : true, TITLE : true
      };

/**
 * @const {!Object.<string, boolean>} */
htmlparser.ESCAPABLE_RAW_TEXT_ELEMENTS =
    htmlparser.DEFINE.USE_TRADITIONAL_TAGS
    ? {
          TEXTAREA : true, TITLE : true, LISTING : true
      }
    : {
          TEXTAREA : true, TITLE : true
      };

/**
 * @see https://html.spec.whatwg.org/multipage/syntax.html#optional-tags
 * 
 *   Elements that can omit end tag and elements they can make children of.
 * 
 * @const {Object.<string, Object.<string, boolean>>} */
htmlparser.OMITTABLE_END_TAG_ELEMENTS_WITH_CHILDREN = {
    CAPTION  : htmlparser.DEFINE.USE_TRADITIONAL_TAGS
                 ? {ARTICLE:!0,SECTION:!0,NAV:!0,ASIDE:!0,H1:!0,H2:!0,H3:!0,H4:!0,H5:!0,H6:!0,HEADER:!0,FOOTER:!0,ADDRESS:!0,P:!0,HR:!0,PRE:!0,BLOCKQUOTE:!0,OL:!0,UL:!0,DL:!0,FIGURE:!0,DIV:!0,A:!0,EM:!0,STRONG:!0,SMALL:!0,S:!0,CITE:!0,Q:!0,DFN:!0,ABBR:!0,DATA:!0,TIME:!0,CODE:!0,VAR:!0,SAMP:!0,KBD:!0,SUB:!0,SUP:!0,I:!0,B:!0,U:!0,MARK:!0,RUBY:!0,BDI:!0,BDO:!0,SPAN:!0,BR:!0,WBR:!0,INS:!0,DEL:!0,PICTURE:!0,IMG:!0,IFRAME:!0,EMBED:!0,OBJECT:!0,VIDEO:!0,AUDIO:!0,MAP:!0,AREA:!0,math:!0,svg:!0,         FORM:!0,LABEL:!0,INPUT:!0,BUTTON:!0,SELECT:!0,DATALIST:!0,TEXTAREA:!0,KEYGEN:!0,OUTPUT:!0,PROGRESS:!0,METER:!0,FIELDSET:!0,DETAILS:!0,DIALOG:!0,SCRIPT:!0,NOSCRIPT:!0,TEMPLATE:!0,CANVAS:!0}
                 : {ARTICLE:!0,SECTION:!0,NAV:!0,ASIDE:!0,H1:!0,H2:!0,H3:!0,H4:!0,H5:!0,H6:!0,HEADER:!0,FOOTER:!0,ADDRESS:!0,P:!0,HR:!0,PRE:!0,BLOCKQUOTE:!0,OL:!0,UL:!0,DL:!0,FIGURE:!0,DIV:!0,A:!0,EM:!0,STRONG:!0,SMALL:!0,S:!0,CITE:!0,Q:!0,DFN:!0,ABBR:!0,DATA:!0,TIME:!0,CODE:!0,VAR:!0,SAMP:!0,KBD:!0,SUB:!0,SUP:!0,I:!0,B:!0,U:!0,MARK:!0,RUBY:!0,BDI:!0,BDO:!0,SPAN:!0,BR:!0,WBR:!0,INS:!0,DEL:!0,PICTURE:!0,IMG:!0,IFRAME:!0,EMBED:!0,OBJECT:!0,VIDEO:!0,AUDIO:!0,MAP:!0,AREA:!0,math:!0,svg:!0,         FORM:!0,LABEL:!0,INPUT:!0,BUTTON:!0,SELECT:!0,DATALIST:!0,TEXTAREA:!0,          OUTPUT:!0,PROGRESS:!0,METER:!0,FIELDSET:!0,DETAILS:!0,DIALOG:!0,SCRIPT:!0,NOSCRIPT:!0,TEMPLATE:!0,CANVAS:!0},
    DD       : htmlparser.DEFINE.USE_TRADITIONAL_TAGS
                 ? {ARTICLE:!0,SECTION:!0,NAV:!0,ASIDE:!0,H1:!0,H2:!0,H3:!0,H4:!0,H5:!0,H6:!0,HEADER:!0,FOOTER:!0,ADDRESS:!0,P:!0,HR:!0,PRE:!0,BLOCKQUOTE:!0,OL:!0,UL:!0,DL:!0,FIGURE:!0,DIV:!0,A:!0,EM:!0,STRONG:!0,SMALL:!0,S:!0,CITE:!0,Q:!0,DFN:!0,ABBR:!0,DATA:!0,TIME:!0,CODE:!0,VAR:!0,SAMP:!0,KBD:!0,SUB:!0,SUP:!0,I:!0,B:!0,U:!0,MARK:!0,RUBY:!0,BDI:!0,BDO:!0,SPAN:!0,BR:!0,WBR:!0,INS:!0,DEL:!0,PICTURE:!0,IMG:!0,IFRAME:!0,EMBED:!0,OBJECT:!0,VIDEO:!0,AUDIO:!0,MAP:!0,AREA:!0,math:!0,svg:!0,TABLE:!0,FORM:!0,LABEL:!0,INPUT:!0,BUTTON:!0,SELECT:!0,DATALIST:!0,TEXTAREA:!0,KEYGEN:!0,OUTPUT:!0,PROGRESS:!0,METER:!0,FIELDSET:!0,DETAILS:!0,DIALOG:!0,SCRIPT:!0,NOSCRIPT:!0,TEMPLATE:!0,CANVAS:!0}
                 : {ARTICLE:!0,SECTION:!0,NAV:!0,ASIDE:!0,H1:!0,H2:!0,H3:!0,H4:!0,H5:!0,H6:!0,HEADER:!0,FOOTER:!0,ADDRESS:!0,P:!0,HR:!0,PRE:!0,BLOCKQUOTE:!0,OL:!0,UL:!0,DL:!0,FIGURE:!0,DIV:!0,A:!0,EM:!0,STRONG:!0,SMALL:!0,S:!0,CITE:!0,Q:!0,DFN:!0,ABBR:!0,DATA:!0,TIME:!0,CODE:!0,VAR:!0,SAMP:!0,KBD:!0,SUB:!0,SUP:!0,I:!0,B:!0,U:!0,MARK:!0,RUBY:!0,BDI:!0,BDO:!0,SPAN:!0,BR:!0,WBR:!0,INS:!0,DEL:!0,PICTURE:!0,IMG:!0,IFRAME:!0,EMBED:!0,OBJECT:!0,VIDEO:!0,AUDIO:!0,MAP:!0,AREA:!0,math:!0,svg:!0,TABLE:!0,FORM:!0,LABEL:!0,INPUT:!0,BUTTON:!0,SELECT:!0,DATALIST:!0,TEXTAREA:!0,          OUTPUT:!0,PROGRESS:!0,METER:!0,FIELDSET:!0,DETAILS:!0,DIALOG:!0,SCRIPT:!0,NOSCRIPT:!0,TEMPLATE:!0,CANVAS:!0},
            // => LI, TD
    DT       : htmlparser.DEFINE.USE_TRADITIONAL_TAGS
                 ? {                                                                                              ADDRESS:!0,P:!0,HR:!0,PRE:!0,BLOCKQUOTE:!0,OL:!0,UL:!0,DL:!0,FIGURE:!0,DIV:!0,A:!0,EM:!0,STRONG:!0,SMALL:!0,S:!0,CITE:!0,Q:!0,DFN:!0,ABBR:!0,DATA:!0,TIME:!0,CODE:!0,VAR:!0,SAMP:!0,KBD:!0,SUB:!0,SUP:!0,I:!0,B:!0,U:!0,MARK:!0,RUBY:!0,BDI:!0,BDO:!0,SPAN:!0,BR:!0,WBR:!0,INS:!0,DEL:!0,PICTURE:!0,IMG:!0,IFRAME:!0,EMBED:!0,OBJECT:!0,VIDEO:!0,AUDIO:!0,MAP:!0,AREA:!0,math:!0,svg:!0,TABLE:!0,FORM:!0,LABEL:!0,INPUT:!0,BUTTON:!0,SELECT:!0,DATALIST:!0,TEXTAREA:!0,KEYGEN:!0,OUTPUT:!0,PROGRESS:!0,METER:!0,FIELDSET:!0,DETAILS:!0,DIALOG:!0,SCRIPT:!0,NOSCRIPT:!0,TEMPLATE:!0,CANVAS:!0}
                 : {                                                                                              ADDRESS:!0,P:!0,HR:!0,PRE:!0,BLOCKQUOTE:!0,OL:!0,UL:!0,DL:!0,FIGURE:!0,DIV:!0,A:!0,EM:!0,STRONG:!0,SMALL:!0,S:!0,CITE:!0,Q:!0,DFN:!0,ABBR:!0,DATA:!0,TIME:!0,CODE:!0,VAR:!0,SAMP:!0,KBD:!0,SUB:!0,SUP:!0,I:!0,B:!0,U:!0,MARK:!0,RUBY:!0,BDI:!0,BDO:!0,SPAN:!0,BR:!0,WBR:!0,INS:!0,DEL:!0,PICTURE:!0,IMG:!0,IFRAME:!0,EMBED:!0,OBJECT:!0,VIDEO:!0,AUDIO:!0,MAP:!0,AREA:!0,math:!0,svg:!0,TABLE:!0,FORM:!0,LABEL:!0,INPUT:!0,BUTTON:!0,SELECT:!0,DATALIST:!0,TEXTAREA:!0,          OUTPUT:!0,PROGRESS:!0,METER:!0,FIELDSET:!0,DETAILS:!0,DIALOG:!0,SCRIPT:!0,NOSCRIPT:!0,TEMPLATE:!0,CANVAS:!0},
            // => TH
    P        : htmlparser.DEFINE.USE_TRADITIONAL_TAGS
                 ? {                                                                                                                                                                            A:!0,EM:!0,STRONG:!0,SMALL:!0,S:!0,CITE:!0,Q:!0,DFN:!0,ABBR:!0,DATA:!0,TIME:!0,CODE:!0,VAR:!0,SAMP:!0,KBD:!0,SUB:!0,SUP:!0,I:!0,B:!0,U:!0,MARK:!0,RUBY:!0,BDI:!0,BDO:!0,SPAN:!0,BR:!0,WBR:!0,INS:!0,DEL:!0,PICTURE:!0,IMG:!0,IFRAME:!0,EMBED:!0,OBJECT:!0,VIDEO:!0,AUDIO:!0,MAP:!0,AREA:!0,math:!0,svg:!0,                 LABEL:!0,INPUT:!0,BUTTON:!0,SELECT:!0,DATALIST:!0,TEXTAREA:!0,KEYGEN:!0,OUTPUT:!0,PROGRESS:!0,METER:!0,                                 SCRIPT:!0,NOSCRIPT:!0,TEMPLATE:!0,CANVAS:!0}
                 : {                                                                                                                                                                            A:!0,EM:!0,STRONG:!0,SMALL:!0,S:!0,CITE:!0,Q:!0,DFN:!0,ABBR:!0,DATA:!0,TIME:!0,CODE:!0,VAR:!0,SAMP:!0,KBD:!0,SUB:!0,SUP:!0,I:!0,B:!0,U:!0,MARK:!0,RUBY:!0,BDI:!0,BDO:!0,SPAN:!0,BR:!0,WBR:!0,INS:!0,DEL:!0,PICTURE:!0,IMG:!0,IFRAME:!0,EMBED:!0,OBJECT:!0,VIDEO:!0,AUDIO:!0,MAP:!0,AREA:!0,math:!0,svg:!0,                 LABEL:!0,INPUT:!0,BUTTON:!0,SELECT:!0,DATALIST:!0,TEXTAREA:!0,          OUTPUT:!0,PROGRESS:!0,METER:!0,                                 SCRIPT:!0,NOSCRIPT:!0,TEMPLATE:!0,CANVAS:!0},
            // => RB, RP, RT 
    HTML     : htmlparser.DEFINE.USE_TRADITIONAL_TAGS
                 ? {HEAD:!0,BODY:!0,FRAMESET:!0}
                 : {HEAD:!0,BODY:!0},
    HEAD     : htmlparser.DEFINE.USE_TRADITIONAL_TAGS
                 ? {TITLE:!0,BASE:!0,LINK:!0,META:!0,STYLE:!0,SCRIPT:!0,NOSCRIPT:!0,TEMPLATE:!0,BGSOUND:!0,ISINDEX:!0}
                 : {TITLE:!0,BASE:!0,LINK:!0,META:!0,STYLE:!0,SCRIPT:!0,NOSCRIPT:!0,TEMPLATE:!0},
    COLGROUP : {COL:!0},
    OPTGROUP : {OPTION:!0},
    OPTION   : {},
    TBODY    : {TR:!0}, // => THEAD, TFOOT
    TR       : {TH:!0,TD:!0}
};
/** @const */
htmlparser.OMITTABLE_END_TAG_ELEMENTS_WITH_CHILDREN.LI = htmlparser.OMITTABLE_END_TAG_ELEMENTS_WITH_CHILDREN.TD = htmlparser.OMITTABLE_END_TAG_ELEMENTS_WITH_CHILDREN.DD;
/** @const */
htmlparser.OMITTABLE_END_TAG_ELEMENTS_WITH_CHILDREN.TH = htmlparser.OMITTABLE_END_TAG_ELEMENTS_WITH_CHILDREN.DT;
/** @const */
htmlparser.OMITTABLE_END_TAG_ELEMENTS_WITH_CHILDREN.RP = htmlparser.OMITTABLE_END_TAG_ELEMENTS_WITH_CHILDREN.RT = htmlparser.OMITTABLE_END_TAG_ELEMENTS_WITH_CHILDREN.P;

if( htmlparser.DEFINE.USE_TRADITIONAL_TAGS ){
    /** @const */
    htmlparser.OMITTABLE_END_TAG_ELEMENTS_WITH_CHILDREN.RB = htmlparser.OMITTABLE_END_TAG_ELEMENTS_WITH_CHILDREN.RP;
    /** @const */
    htmlparser.OMITTABLE_END_TAG_ELEMENTS_WITH_CHILDREN.RTC = htmlparser.OMITTABLE_END_TAG_ELEMENTS_WITH_CHILDREN.RBC = {RB:!0,RP:!0,RT:!0};
};

/** @const */
htmlparser.OMITTABLE_END_TAG_ELEMENTS_WITH_CHILDREN.TFOOT = htmlparser.OMITTABLE_END_TAG_ELEMENTS_WITH_CHILDREN.THEAD = htmlparser.OMITTABLE_END_TAG_ELEMENTS_WITH_CHILDREN.TBODY;
