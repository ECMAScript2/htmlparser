// https://github.com/inikulin/parse5/blob/master/test/data/serialization/tests.json
const test = require('ava');
const parser = require('../dist/index.js');

test('Template content',
    (t) => {
        t.deepEqual(
            parser(
                '<body><template>Some <div>content</div></template></body>'
            ),
            [ 11, [ 'body', [ 'template', 'Some ', [ 'div', 'content' ] ] ] ]
        );
    }
);

test('Attributes',
    (t) => {
        t.deepEqual(
            parser(
                '<head><meta http-equiv=\"refresh\" content=\"30\"></head><body><div style=\"background-color:red; padding: 0 25px 32px;\"></body>'
            ),
            [ 11, [ 'head', [ 'meta', { 'http-equiv' : 'refresh', content : '30' } ] ], [ 'body', [ 'div', { style : 'background-color:red; padding: 0 25px 32px;' } ] ] ]
        );
    }
);

test('Attribute serialized name - XML namespace',
    (t) => {
        t.deepEqual(
            parser(
                '<svg xml:base=\"http://example.org\"></svg>'
            ),
            [ 11, [ 'svg', { 'xml:base' : 'http://example.org' } ] ]
        );
    }
);

test('Attribute serialized name - XLink namespace',
    (t) => {
        t.deepEqual(
            parser(
                '<div><svg xlink:title=\"Hey!\"></svg></div>'
            ),
            [ 11, [ 'div', [ 'svg', { 'xlink:title' : 'Hey!' } ] ] ]
        );
    }
);

test('Attribute value escaping - &amp;',
    (t) => {
        t.deepEqual(
            parser(
                '<div data-foo=\"& 42 &\"></div>'
            ),
            [ 11, [ 'div', { 'data-foo' : '& 42 &' } ] ]
        );
    }
);

test('Attribute value escaping - &nbsp;',
    (t) => {
        t.deepEqual(
            parser(
                '<div data-foo=\"\u00A0 bar\u00A0\"></div>'
            ),
            [ 11, [ 'div', { 'data-foo' : '\u00A0 bar\u00A0' } ] ]
        );
    }
);

test('Attribute value escaping - quotes',
    (t) => {
        t.deepEqual(
            parser(
                "<div data-foo=\"&quot;\" id=test1\" class='test2\"'></div>"
            ),
            [ 11, [ 'div', { 'data-foo' : '&quot;', id : 'test1"', class : 'test2"' } ] ]
        );
        t.deepEqual(
            parser(
                "<div data-foo=\"'\"></div>"
            ),
            [ 11, [ 'div', { 'data-foo' : "'" } ] ]
        );
        t.deepEqual(
            parser(
                "<div data-foo='\"'></div>"
            ),
            [ 11, [ 'div', { 'data-foo' : '"' } ] ]
        );
    }
);

test('Attribute value escaping - < and >',
    (t) => {
        t.deepEqual(
            parser(
                "<div data-foo=\"<span>\"></div>"
            ),
            [ 11, [ 'div', { 'data-foo' : '<span>' } ] ]
        );
    }
);

test('Attributes value escaping - other entities',
    (t) => {
        t.deepEqual(
            parser(
                "<div data-foo='&raquo;&phone;'>"
            ),
            [ 11, [ 'div', { 'data-foo' : '&raquo;&phone;' } ] ]
        );
    }
);

test('Void elements',
    (t) => {
        t.deepEqual(
            parser(
                "<area><base><basefont><bgsound><br><embed><hr><img><input><keygen><link><meta><param><source><track><wbr>"
            ),
            [ 11, [ 'area' ], [ 'base' ], [ 'basefont' ], [ 'bgsound' ], [ 'br' ], [ 'embed' ], [ 'hr' ], [ 'img' ], [ 'input' ], [ 'keygen' ], [ 'link' ], [ 'meta' ], [ 'param' ], [ 'source' ], [ 'track' ], [ 'wbr' ] ]
        );
    }
);

test('Void elements - <col>',
    (t) => {
        t.deepEqual(
            parser(
                "<table><col></table>"
            ),
            [ 11, [ 'table', [ 'col' ] ] ]
        );
    }
);

test('Void elements - <frame>',
    (t) => {
        t.deepEqual(
            parser(
                "<frameset><frame></frameset>"
            ),
            [ 11, [ 'frameset', [ 'frame' ] ] ]
        );
    }
);

test('Text nodes',
    (t) => {
        t.deepEqual(
            parser(
                "<title>foo</title><body>foo<div>bar</div>baz</body>"
            ),
            [ 11, [ 'title', 'foo' ], [ 'body', 'foo', [ 'div', 'bar' ], 'baz' ] ]
        );
    }
);

test('Text nodes escaping - &amp;',
    (t) => {
        t.deepEqual(
            parser(
                "<title>Mac&Cheese</title><div>&&&</div>"
            ),
            [ 11, [ 'title', 'Mac&Cheese' ], [ 'div', '&&&' ] ]
        );
    }
);

test('Text nodes escaping - &nbsp;',
    (t) => {
        t.deepEqual(
            parser(
                "<title>\u00A0foo\u00A0bar\u00A0</title><div>\u00A0baz\u00A0</div>"
            ),
            [ 11, [ 'title', '\u00A0foo\u00A0bar\u00A0' ], [ 'div', '\u00A0baz\u00A0' ] ]
        );
    }
);

test('Text nodes escaping - < and >',
    (t) => {
        t.deepEqual(
            parser(
                "<title>< foo ></title><div>> bar <</div>"
            ),
            [ 11, [ 'title', '< foo >' ], [ 'div', '> bar <' ] ]
        );
    }
);

test('Text nodes escaping - quotes',
    (t) => {
        t.deepEqual(
            parser(
                "<title>\"foo\"</title><div>\"bar\"</div>"
            ),
            [ 11, [ 'title', '"foo"' ], [ 'div', '"bar"' ] ]
        );
    }
);

test('Text nodes escaping - non-escapable tags',
    (t) => {
        t.deepEqual(
            parser(
                "<body><style>&\u00A0><</style><script>&\u00A0><</script><xmp>&\u00A0><</xmp><iframe>&\u00A0><</iframe><noembed>&\u00A0><</noembed><noframes>&\u00A0><</noframes><plaintext>&\u00A0><"
            ),
            [ 11, [ 'body', [ 'style', '&\u00A0><' ], [ 'script', '&\u00A0><' ], [ 'xmp', '&\u00A0><' ], [ 'iframe', '&\u00A0><' ], [ 'noembed', '&\u00A0><' ], [ 'noframes', '&\u00A0><' ], [ 'plaintext', '&\u00A0><' ] ] ]
        );
    }
);

test('Text nodes escaping - <noscript> with scripting enabled',
    (t) => {
        t.deepEqual(
            parser(
                "<body><noscript>& ><</noscript></body>"
            ),
            [ 11, [ 'body', [ 'noscript', '& ><' ] ] ]
        );
    }
);

test('Comment nodes',
    (t) => {
        t.deepEqual(
            parser(
                "<!-- Hey --><html><head></head><!-- &\u00A0>< --><body><!-- 42 --></body></html>"
            ),
            [ 11, [ 8, ' Hey ' ], [ 'html', [ 'head' ], [ 8, ' &\u00A0>< ' ], [ 'body', [ 8, ' 42 ' ] ] ] ]
        );
    }
);

test('CDATA section',
    (t) => {
        t.deepEqual(
            parser(
                "<![CDATA[&\u00A0><]]>"
            ),
            [ 11, [ 4, '&\u00A0><' ] ]
        );
    }
);

test('Doctype without systemId and publicId',
    (t) => {
        t.deepEqual(
            parser(
                "<!DOCTYPE html>"
            ),
            [ 9, '<!DOCTYPE html>' ]
        );
    }
);

test('Doctype with publicId',
    (t) => {
        t.deepEqual(
            parser(
                "<!DOCTYPE html PUBLIC \"-//W3C//DTD HTML 4.01//EN\">"
            ),
            [ 9, '<!DOCTYPE html PUBLIC \"-//W3C//DTD HTML 4.01//EN\">' ]
        );
    }
);

test('Doctype with systemId',
    (t) => {
        t.deepEqual(
            parser(
             // "<!DOCTYPE html SYSTEM \"http://www.w3.org/DTD/HTML4-strict.dtd\""
                "<!DOCTYPE html SYSTEM \"http://www.w3.org/DTD/HTML4-strict.dtd\">"
            ),
            [ 9, '<!DOCTYPE html SYSTEM \"http://www.w3.org/DTD/HTML4-strict.dtd\">' ]
        );
    }
);

test('Doctype with publicId and systemId',
    (t) => {
        t.deepEqual(
            parser(
             // "<!DOCTYPE html html \"-//W3C//DTD HTML 4.01//EN\" \"http://www.w3.org/TR/html4/strict.dtd\""
                "<!DOCTYPE html html \"-//W3C//DTD HTML 4.01//EN\" \"http://www.w3.org/TR/html4/strict.dtd\">"
            ),
            [ 9, '<!DOCTYPE html html \"-//W3C//DTD HTML 4.01//EN\" \"http://www.w3.org/TR/html4/strict.dtd\">' ]
        );
    }
);

test('Child nodes',
    (t) => {
        t.deepEqual(
            parser(
                "<span><a><b><c></c></b><d>e</d><f><g>h</g></f></a></span>"
            ),
            [ 11, [ 'span', [ 'a', [ 'b', [ 'c' ] ], [ 'd', 'e' ], [ 'f', [ 'g', 'h' ] ] ] ] ]
        );
    }
);

test('<pre>, <textarea>, <listing> with initial LF (see: https://github.com/whatwg/html/pull/1815)',
    (t) => {
        t.deepEqual(
            parser(
                "<pre>\n1</pre><pre>\n\n2</pre><textarea>\n3</textarea><textarea>\n\n4</textarea><listing>\n5</listing><listing>\n\n6</listing>"
            ),
            [ 11, [ 'pre', '\n1' ], [ 'pre', '\n\n2' ], [ 'textarea', '\n3' ], [ 'textarea', '\n\n4' ], [ 'listing', '\n5' ], [ 'listing', '\n\n6' ] ]
        );
    }
);

test('Mixed content (GH-333)',
    (t) => {
        t.deepEqual(
            parser(
                "<svg><span>&lt;</span></svg><style><</style><svg><script><</script></svg><script><</script>"
            ),
            [ 11, [ 'svg', [ 'span', '<' ] ], [ 'style', '<' ], [ 'svg', [ 'script', '<' ] ], [ 'script', '<' ] ]
        );
    }
);

test('<dl>',
    (t) => {
        t.deepEqual(
            parser(
                "<dl><dt>1<dd>2<dd>3</dl>"
            ),
            [ 11, [ 'dl', [ 'dt', '1' ], [ 'dd', '2' ], [ 'dd', '3' ] ] ]
        );
    }
);

test('<li>',
    (t) => {
        t.deepEqual(
            parser(
                "<ol><li>1<li>2<li>3</ol>"
            ),
            [ 11, [ 'ol', [ 'li', '1' ], [ 'li', '2' ], [ 'li', '3' ] ] ]
        );
    }
);

test('<p>',
    (t) => {
        t.deepEqual(
            parser(
                "<p>1<p>2<p>3"
            ),
            [ 11, [ 'p', '1' ], [ 'p', '2' ], [ 'p', '3' ] ]
        );
        t.deepEqual(
            parser(
                '<p>Some <div>content</div>'
            ),
            [ 11, [ 'p', 'Some ' ], [ 'div', 'content' ] ]
        );
    }
);

test('<ruby>',
    (t) => {
        t.deepEqual(
            parser(
                "<ruby>漢<rp>(<rt>kan<rp>)</rp>字<rp>(<rt>ji<rp>)</ruby>"
            ),
            [ 11, [ 'ruby', '漢', [ 'rp', '(' ], [ 'rt', 'kan' ], [ 'rp', ')' ], '字', [ 'rp', '(' ], [ 'rt', 'ji' ], [ 'rp', ')' ] ] ]
        );
        t.deepEqual(
            parser(
                "<ruby><rb>漢<rp>(<rt>kan<rp>)<rb>字<rp>(<rt>ji<rp>)</ruby>"
            ),
            [ 11, [ 'ruby', [ 'rb', '漢' ], [ 'rp', '(' ], [ 'rt', 'kan' ], [ 'rp', ')' ], [ 'rb', '字' ], [ 'rp', '(' ], [ 'rt', 'ji' ], [ 'rp', ')' ] ] ]
        );
        t.deepEqual(
            parser(
                "<ruby><rbc><rb>馬<rp>(<rt>mǎ<rp>)<rb>來<rp>(<rt>lái<rp>)<rb>西<rp>(<rt>xī<rp>)<rb>亞<rp>(<rt>yà<rp>)<rtc><rp>(<rt>Malaysia<rp>)</ruby>"
            ),
            [ 11, [ 'ruby',
                      [ 'rbc', [ 'rb', '馬' ], [ 'rp', '(' ], [ 'rt', 'mǎ' ], [ 'rp', ')' ], 
                               [ 'rb', '來' ], [ 'rp', '(' ], [ 'rt', 'lái' ], [ 'rp', ')' ], 
                               [ 'rb', '西' ], [ 'rp', '(' ], [ 'rt', 'xī'  ], [ 'rp', ')' ], 
                               [ 'rb', '亞' ], [ 'rp', '(' ], [ 'rt', 'yà'  ], [ 'rp', ')' ]
                      ],
                      [ 'rtc', [ 'rp', '(' ], [ 'rt', 'Malaysia' ], [ 'rp', ')' ] ]
                  ]
            ]
        );
    }
);

test('<table>',
    (t) => {
        t.deepEqual(
            parser(
                "<table><tr><th>1<td>2<td>3<th>4</table>"
            ),
            [ 11, [ 'table', [ 'tr', [ 'th', '1' ], [ 'td', '2' ], [ 'td', '3' ], [ 'th', '4' ] ] ] ]
        );
        t.deepEqual(
            parser(
                "<table><caption>aaa<tr><th>1<td>2<td>3<th>4</table>"
            ),
            [ 11, [ 'table', [ 'caption', 'aaa' ], [ 'tr', [ 'th', '1' ], [ 'td', '2' ], [ 'td', '3' ], [ 'th', '4' ] ] ] ]
        );
        t.deepEqual(
            parser(
                "<table><thead><tr><th>1<td>2<td>3<th>4<tbody><tr><th>1<td>2<td>3<th>4<tr></table>"
            ),
            [ 11, [ 'table', [ 'thead', [ 'tr', [ 'th', '1' ], [ 'td', '2' ], [ 'td', '3' ], [ 'th', '4' ] ] ], [ 'tbody', [ 'tr', [ 'th', '1' ], [ 'td', '2' ], [ 'td', '3' ], [ 'th', '4' ] ], [ 'tr' ] ] ] ]
        );
    }
);

test('<html ⚡ amp>',
    (t) => {
        t.deepEqual(
            parser(
                '<html ⚡ amp>'
            ),
            [ 11, [ 'html', { '⚡' : true, amp : true } ] ]
        );
    }
);

test('/>',
    (t) => {
        t.deepEqual(
            parser(
                '<a href=//example.com/>example.com</a>'
            ),
            [ 11, [ 'a', { 'href' : '//example.com/' }, 'example.com' ] ]
        );
    }
);

test('quotes',
    (t) => {
        t.deepEqual(
            parser(
                "<div data-foo='\\\"'></div>"
            ),
            [ 11, [ 'div', { 'data-foo' : '"' } ] ]
        );
        t.deepEqual(
            parser(
                "<div data-foo='&quot;&apos;'></div>"
            ),
            [ 11, [ 'div', { 'data-foo' : '&quot;&apos;' } ] ]
        );
        t.deepEqual(
            parser(
                "<div data-foo=''></div>"
            ),
            [ 11, [ 'div', { 'data-foo' : '' } ] ]
        );
    }
);

test('0',
    (t) => {
        t.deepEqual(
            parser(
                '<a>0</a>'
            ),
            [ 11, [ 'a', '0' ] ]
        );
    }
);

test('#1 RAW_TEXT_ELEMENTS can contain PROCESSING_INSTRUCTION',
    (t) => {
        t.deepEqual(
            parser(
                "<script>var time=<?now?>;</script>"
            ),
            [ 11, [ 'script', 'var time=', [ 7, 'now' ], ';' ] ]
        );
    }
);

test('json',
    (t) => {
        t.deepEqual(
            parser(
                "<script>{ a:\"</span>\" }</script>"
            ),
            [ 11, [ 'script', '{ a:"</span>" }' ] ]
        );
    }
);