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
          area     : true, base    : true, col     : true, embed : true, br      : true,
          hr       : true, img     : true, input   : true, link  : true, meta    : true,
          source   : true, track   : true, wbr     : true,
          // legacy
          basefont : true, bgsound : true, command : true, frame : true, isindex : true,
          keygen   : true, param   : true, spacer  : true
      }
    : {
          area     : true, base    : true, col     : true, embed : true, br      : true,
          hr       : true, img     : true, input   : true, link  : true, meta    : true,
          source   : true, track   : true, wbr     : true
      };

/**
 * @see https://www.w3.org/TR/html401/sgml/dtd.html#head.misc
 *   Elements that cannot contain text nodes as children, excluding void elements.
 * @const {!Object.<string, boolean>} */
htmlparser.NON_TEXT_CHILD_ELEMENTS =
    htmlparser.DEFINE.USE_TRADITIONAL_TAGS
    ? {
          map      : true, datalist : true, dl    : true, ol    : true, ul    : true,
          select   : true, optgroup : true, table : true, thead : true, tfoot : true,
          tbody    : true, colgroup : true, tr    : true, // head  : true,
          // legacy
          dir      : true, frameset : true, menu  : true
      }
    : {
          map      : true, datalist : true, dl    : true, ol    : true, ul    : true,
          select   : true, optgroup : true, table : true, thead : true, tfoot : true,
          tbody    : true, colgroup : true, tr    : true // , head  : true
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
htmlparser.RAW_TEXT_ELEMENTS =
    htmlparser.DEFINE.USE_TRADITIONAL_TAGS
    ? {
          script    : true, style : true, textarea : true, title : true,
          // legacy
          plaintext : true, xmp   : true
      }
    : {
          script    : true, style : true, textarea : true, title : true
      };

/**
 * @const {!Object.<string, boolean>} */
htmlparser.ESCAPABLE_RAW_TEXT_ELEMENTS = { textarea : true, title : true };

/**
 * @see https://html.spec.whatwg.org/multipage/syntax.html#optional-tags
 * 
 *   Elements that can omit end tag and elements they can make children of.
 * 
 * @const {Object.<string, Object.<string, boolean>>} */
htmlparser.OMITTABLE_END_TAG_ELEMENTS_WITH_CHILDREN = {
    caption  : htmlparser.DEFINE.USE_TRADITIONAL_TAGS
                 ? {article:!0,section:!0,nav:!0,aside:!0,h1:!0,h2:!0,h3:!0,h4:!0,h5:!0,h6:!0,header:!0,footer:!0,address:!0,p:!0,hr:!0,pre:!0,blockquote:!0,ol:!0,ul:!0,dl:!0,figure:!0,div:!0,a:!0,em:!0,strong:!0,small:!0,s:!0,cite:!0,q:!0,dfn:!0,abbr:!0,data:!0,time:!0,code:!0,'var':!0,samp:!0,kbd:!0,sub:!0,sup:!0,i:!0,b:!0,u:!0,mark:!0,ruby:!0,bdi:!0,bdo:!0,span:!0,br:!0,wbr:!0,ins:!0,del:!0,picture:!0,img:!0,iframe:!0,embed:!0,object:!0,video:!0,audio:!0,map:!0,area:!0,math:!0,svg:!0,         form:!0,label:!0,input:!0,button:!0,select:!0,datalist:!0,textarea:!0,keygen:!0,output:!0,progress:!0,meter:!0,fieldset:!0,details:!0,dialog:!0,script:!0,noscript:!0,template:!0,canvas:!0}
                 : {article:!0,section:!0,nav:!0,aside:!0,h1:!0,h2:!0,h3:!0,h4:!0,h5:!0,h6:!0,header:!0,footer:!0,address:!0,p:!0,hr:!0,pre:!0,blockquote:!0,ol:!0,ul:!0,dl:!0,figure:!0,div:!0,a:!0,em:!0,strong:!0,small:!0,s:!0,cite:!0,q:!0,dfn:!0,abbr:!0,data:!0,time:!0,code:!0,'var':!0,samp:!0,kbd:!0,sub:!0,sup:!0,i:!0,b:!0,u:!0,mark:!0,ruby:!0,bdi:!0,bdo:!0,span:!0,br:!0,wbr:!0,ins:!0,del:!0,picture:!0,img:!0,iframe:!0,embed:!0,object:!0,video:!0,audio:!0,map:!0,area:!0,math:!0,svg:!0,         form:!0,label:!0,input:!0,button:!0,select:!0,datalist:!0,textarea:!0,          output:!0,progress:!0,meter:!0,fieldset:!0,details:!0,dialog:!0,script:!0,noscript:!0,template:!0,canvas:!0},
    dd       : htmlparser.DEFINE.USE_TRADITIONAL_TAGS
                 ? {article:!0,section:!0,nav:!0,aside:!0,h1:!0,h2:!0,h3:!0,h4:!0,h5:!0,h6:!0,header:!0,footer:!0,address:!0,p:!0,hr:!0,pre:!0,blockquote:!0,ol:!0,ul:!0,dl:!0,figure:!0,div:!0,a:!0,em:!0,strong:!0,small:!0,s:!0,cite:!0,q:!0,dfn:!0,abbr:!0,data:!0,time:!0,code:!0,'var':!0,samp:!0,kbd:!0,sub:!0,sup:!0,i:!0,b:!0,u:!0,mark:!0,ruby:!0,bdi:!0,bdo:!0,span:!0,br:!0,wbr:!0,ins:!0,del:!0,picture:!0,img:!0,iframe:!0,embed:!0,object:!0,video:!0,audio:!0,map:!0,area:!0,math:!0,svg:!0,table:!0,form:!0,label:!0,input:!0,button:!0,select:!0,datalist:!0,textarea:!0,keygen:!0,output:!0,progress:!0,meter:!0,fieldset:!0,details:!0,dialog:!0,script:!0,noscript:!0,template:!0,canvas:!0}
                 : {article:!0,section:!0,nav:!0,aside:!0,h1:!0,h2:!0,h3:!0,h4:!0,h5:!0,h6:!0,header:!0,footer:!0,address:!0,p:!0,hr:!0,pre:!0,blockquote:!0,ol:!0,ul:!0,dl:!0,figure:!0,div:!0,a:!0,em:!0,strong:!0,small:!0,s:!0,cite:!0,q:!0,dfn:!0,abbr:!0,data:!0,time:!0,code:!0,'var':!0,samp:!0,kbd:!0,sub:!0,sup:!0,i:!0,b:!0,u:!0,mark:!0,ruby:!0,bdi:!0,bdo:!0,span:!0,br:!0,wbr:!0,ins:!0,del:!0,picture:!0,img:!0,iframe:!0,embed:!0,object:!0,video:!0,audio:!0,map:!0,area:!0,math:!0,svg:!0,table:!0,form:!0,label:!0,input:!0,button:!0,select:!0,datalist:!0,textarea:!0,          output:!0,progress:!0,meter:!0,fieldset:!0,details:!0,dialog:!0,script:!0,noscript:!0,template:!0,canvas:!0},
            // => li, td
    dt       : htmlparser.DEFINE.USE_TRADITIONAL_TAGS
                 ? {                                                                                              address:!0,p:!0,hr:!0,pre:!0,blockquote:!0,ol:!0,ul:!0,dl:!0,figure:!0,div:!0,a:!0,em:!0,strong:!0,small:!0,s:!0,cite:!0,q:!0,dfn:!0,abbr:!0,data:!0,time:!0,code:!0,'var':!0,samp:!0,kbd:!0,sub:!0,sup:!0,i:!0,b:!0,u:!0,mark:!0,ruby:!0,bdi:!0,bdo:!0,span:!0,br:!0,wbr:!0,ins:!0,del:!0,picture:!0,img:!0,iframe:!0,embed:!0,object:!0,video:!0,audio:!0,map:!0,area:!0,math:!0,svg:!0,table:!0,form:!0,label:!0,input:!0,button:!0,select:!0,datalist:!0,textarea:!0,keygen:!0,output:!0,progress:!0,meter:!0,fieldset:!0,details:!0,dialog:!0,script:!0,noscript:!0,template:!0,canvas:!0}
                 : {                                                                                              address:!0,p:!0,hr:!0,pre:!0,blockquote:!0,ol:!0,ul:!0,dl:!0,figure:!0,div:!0,a:!0,em:!0,strong:!0,small:!0,s:!0,cite:!0,q:!0,dfn:!0,abbr:!0,data:!0,time:!0,code:!0,'var':!0,samp:!0,kbd:!0,sub:!0,sup:!0,i:!0,b:!0,u:!0,mark:!0,ruby:!0,bdi:!0,bdo:!0,span:!0,br:!0,wbr:!0,ins:!0,del:!0,picture:!0,img:!0,iframe:!0,embed:!0,object:!0,video:!0,audio:!0,map:!0,area:!0,math:!0,svg:!0,table:!0,form:!0,label:!0,input:!0,button:!0,select:!0,datalist:!0,textarea:!0,          output:!0,progress:!0,meter:!0,fieldset:!0,details:!0,dialog:!0,script:!0,noscript:!0,template:!0,canvas:!0},
            // => th
    p        : htmlparser.DEFINE.USE_TRADITIONAL_TAGS
                 ? {                                                                                                                                                                            a:!0,em:!0,strong:!0,small:!0,s:!0,cite:!0,q:!0,dfn:!0,abbr:!0,data:!0,time:!0,code:!0,'var':!0,samp:!0,kbd:!0,sub:!0,sup:!0,i:!0,b:!0,u:!0,mark:!0,ruby:!0,bdi:!0,bdo:!0,span:!0,br:!0,wbr:!0,ins:!0,del:!0,picture:!0,img:!0,iframe:!0,embed:!0,object:!0,video:!0,audio:!0,map:!0,area:!0,math:!0,svg:!0,                 label:!0,input:!0,button:!0,select:!0,datalist:!0,textarea:!0,keygen:!0,output:!0,progress:!0,meter:!0,                                 script:!0,noscript:!0,template:!0,canvas:!0}
                 : {                                                                                                                                                                            a:!0,em:!0,strong:!0,small:!0,s:!0,cite:!0,q:!0,dfn:!0,abbr:!0,data:!0,time:!0,code:!0,'var':!0,samp:!0,kbd:!0,sub:!0,sup:!0,i:!0,b:!0,u:!0,mark:!0,ruby:!0,bdi:!0,bdo:!0,span:!0,br:!0,wbr:!0,ins:!0,del:!0,picture:!0,img:!0,iframe:!0,embed:!0,object:!0,video:!0,audio:!0,map:!0,area:!0,math:!0,svg:!0,                 label:!0,input:!0,button:!0,select:!0,datalist:!0,textarea:!0,          output:!0,progress:!0,meter:!0,                                 script:!0,noscript:!0,template:!0,canvas:!0},
            // => rb, rp, rt 
    html     : htmlparser.DEFINE.USE_TRADITIONAL_TAGS
                 ? {head:!0,body:!0,frameset:!0}
                 : {head:!0,body:!0},
    head     : htmlparser.DEFINE.USE_TRADITIONAL_TAGS
                 ? {title:!0,base:!0,link:!0,meta:!0,style:!0,script:!0,noscript:!0,template:!0,bgsound:!0,isindex:!0}
                 : {title:!0,base:!0,link:!0,meta:!0,style:!0,script:!0,noscript:!0,template:!0},
    colgroup : {col:!0},
    optgroup : {option:!0},
    option   : {},
    tbody    : {tr:!0}, // => thead, tfoot
    tr       : {th:!0,td:!0}
};
/** @const */
htmlparser.OMITTABLE_END_TAG_ELEMENTS_WITH_CHILDREN.li = htmlparser.OMITTABLE_END_TAG_ELEMENTS_WITH_CHILDREN.td = htmlparser.OMITTABLE_END_TAG_ELEMENTS_WITH_CHILDREN.dd;
/** @const */
htmlparser.OMITTABLE_END_TAG_ELEMENTS_WITH_CHILDREN.th = htmlparser.OMITTABLE_END_TAG_ELEMENTS_WITH_CHILDREN.dt;
/** @const */
htmlparser.OMITTABLE_END_TAG_ELEMENTS_WITH_CHILDREN.rp = htmlparser.OMITTABLE_END_TAG_ELEMENTS_WITH_CHILDREN.rt = htmlparser.OMITTABLE_END_TAG_ELEMENTS_WITH_CHILDREN.p;

if( htmlparser.DEFINE.USE_TRADITIONAL_TAGS ){
    /** @const */
    htmlparser.OMITTABLE_END_TAG_ELEMENTS_WITH_CHILDREN.rb = htmlparser.OMITTABLE_END_TAG_ELEMENTS_WITH_CHILDREN.rp;
    /** @const */
    htmlparser.OMITTABLE_END_TAG_ELEMENTS_WITH_CHILDREN.rtc = htmlparser.OMITTABLE_END_TAG_ELEMENTS_WITH_CHILDREN.rbc = {rb:!0,rp:!0,rt:!0};
};

/** @const */
htmlparser.OMITTABLE_END_TAG_ELEMENTS_WITH_CHILDREN.tfoot = htmlparser.OMITTABLE_END_TAG_ELEMENTS_WITH_CHILDREN.thead = htmlparser.OMITTABLE_END_TAG_ELEMENTS_WITH_CHILDREN.tbody;
