// https://github.com/inikulin/parse5/blob/master/test/data/serialization/tests.json
const test = require('ava');
const parser = require('../dist/index.js');

test('Template content',
    (t) => {
        t.deepEqual(
            parser(
                '<body><template>Some <div>content</div></template></body>'
            ),
            [ 11, [ 'BODY', [ 'TEMPLATE', 'Some ', [ 'DIV', 'content' ] ] ] ]
        );
    }
);

test('Attributes',
    (t) => {
        t.deepEqual(
            parser(
                '<head><meta http-equiv=\"refresh\" content=\"30\"></head><body><div style=\"background-color:red; padding: 0 25px 32px;\"></body>'
            ),
            [ 11, [ 'HEAD', [ 'META', { 'http-equiv' : 'refresh', content : '30' } ] ], [ 'BODY', [ 'DIV', { style : 'background-color:red; padding: 0 25px 32px;' } ] ] ]
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
            [ 11, [ 'DIV', [ 'svg', { 'xlink:title' : 'Hey!' } ] ] ]
        );
    }
);

test('Attribute value escaping - &amp;',
    (t) => {
        t.deepEqual(
            parser(
                '<div data-foo=\"& 42 &\"></div>'
            ),
            [ 11, [ 'DIV', { 'data-foo' : '& 42 &' } ] ]
        );
    }
);

test('Attribute value escaping - &nbsp;',
    (t) => {
        t.deepEqual(
            parser(
                '<div data-foo=\"\u00A0 bar\u00A0\"></div>'
            ),
            [ 11, [ 'DIV', { 'data-foo' : '\u00A0 bar\u00A0' } ] ]
        );
    }
);

test('Attribute value escaping - quotes',
    (t) => {
        t.deepEqual(
            parser(
                "<div data-foo=\"&quot;\" id=test1\" class='test2\"'></div>"
            ),
            [ 11, [ 'DIV', { 'data-foo' : '&quot;', id : 'test1"', class : 'test2"' } ] ]
        );
        t.deepEqual(
            parser(
                "<div data-foo=\"'\"></div>"
            ),
            [ 11, [ 'DIV', { 'data-foo' : "'" } ] ]
        );
        t.deepEqual(
            parser(
                "<div data-foo='\"'></div>"
            ),
            [ 11, [ 'DIV', { 'data-foo' : '"' } ] ]
        );
    }
);

test('Attribute value escaping - < and >',
    (t) => {
        t.deepEqual(
            parser(
                "<div data-foo=\"<span>\"></div>"
            ),
            [ 11, [ 'DIV', { 'data-foo' : '<span>' } ] ]
        );
    }
);

test('Attributes value escaping - other entities',
    (t) => {
        t.deepEqual(
            parser(
                "<div data-foo='&raquo;&phone;'>"
            ),
            [ 11, [ 'DIV', { 'data-foo' : '&raquo;&phone;' } ] ]
        );
    }
);

test('Void elements',
    (t) => {
        t.deepEqual(
            parser(
                "<area><base><basefont><bgsound><br><embed><hr><img><input><keygen><link><meta><param><source><track><wbr>"
            ),
            [ 11, [ 'AREA' ], [ 'BASE' ], [ 'BASEFONT' ], [ 'BGSOUND' ], [ 'BR' ], [ 'EMBED' ], [ 'HR' ], [ 'IMG' ], [ 'INPUT' ], [ 'KEYGEN' ], [ 'LINK' ], [ 'META' ], [ 'PARAM' ], [ 'SOURCE' ], [ 'TRACK' ], [ 'WBR' ] ]
        );
    }
);

test('Void elements - <col>',
    (t) => {
        t.deepEqual(
            parser(
                "<table><col></table>"
            ),
            [ 11, [ 'TABLE', [ 'COL' ] ] ]
        );
    }
);

test('Void elements - <frame>',
    (t) => {
        t.deepEqual(
            parser(
                "<frameset><frame></frameset>"
            ),
            [ 11, [ 'FRAMESET', [ 'FRAME' ] ] ]
        );
    }
);

test('Text nodes',
    (t) => {
        t.deepEqual(
            parser(
                "<title>foo</title><body>foo<div>bar</div>baz</body>"
            ),
            [ 11, [ 'TITLE', 'foo' ], [ 'BODY', 'foo', [ 'DIV', 'bar' ], 'baz' ] ]
        );
    }
);

test('Text nodes escaping - &amp;',
    (t) => {
        t.deepEqual(
            parser(
                "<title>Mac&Cheese</title><div>&&&</div>"
            ),
            [ 11, [ 'TITLE', 'Mac&Cheese' ], [ 'DIV', '&&&' ] ]
        );
    }
);

test('Text nodes escaping - &nbsp;',
    (t) => {
        t.deepEqual(
            parser(
                "<title>\u00A0foo\u00A0bar\u00A0</title><div>\u00A0baz\u00A0</div>"
            ),
            [ 11, [ 'TITLE', '\u00A0foo\u00A0bar\u00A0' ], [ 'DIV', '\u00A0baz\u00A0' ] ]
        );
    }
);

test('Text nodes escaping - < and >',
    (t) => {
        t.deepEqual(
            parser(
                "<title>< foo ></title><div>> bar <</div>"
            ),
            [ 11, [ 'TITLE', '< foo >' ], [ 'DIV', '> bar <' ] ]
        );
    }
);

test('Text nodes escaping - quotes',
    (t) => {
        t.deepEqual(
            parser(
                "<title>\"foo\"</title><div>\"bar\"</div>"
            ),
            [ 11, [ 'TITLE', '"foo"' ], [ 'DIV', '"bar"' ] ]
        );
    }
);

test('Text nodes escaping - non-escapable tags',
    (t) => {
        t.deepEqual(
            parser(
                "<body><style>&\u00A0><</style><script>&\u00A0><</script><xmp>&\u00A0><</xmp><iframe>&\u00A0><</iframe><noembed>&\u00A0><</noembed><noframes>&\u00A0><</noframes><plaintext>&\u00A0><"
            ),
            [ 11, [ 'BODY', [ 'STYLE', '&\u00A0><' ], [ 'SCRIPT', '&\u00A0><' ], [ 'XMP', '&\u00A0><' ], [ 'IFRAME', '&\u00A0><' ], [ 'NOEMBED', '&\u00A0><' ], [ 'NOFRAMES', '&\u00A0><' ], [ 'PLAINTEXT', '&\u00A0><' ] ] ]
        );
    }
);

test('Text nodes escaping - <noscript> with scripting enabled',
    (t) => {
        t.deepEqual(
            parser(
                "<body><noscript>& ><</noscript></body>"
            ),
            [ 11, [ 'BODY', [ 'NOSCRIPT', '& ><' ] ] ]
        );
    }
);

test('Comment nodes',
    (t) => {
        t.deepEqual(
            parser(
                "<!-- Hey --><html><head></head><!-- &\u00A0>< --><body><!-- 42 --></body></html>"
            ),
            [ 11, [ 8, ' Hey ' ], [ 'HTML', [ 'HEAD' ], [ 8, ' &\u00A0>< ' ], [ 'BODY', [ 8, ' 42 ' ] ] ] ]
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
            [ 11, [ 'SPAN', [ 'A', [ 'B', [ 'C' ] ], [ 'D', 'e' ], [ 'F', [ 'G', 'h' ] ] ] ] ]
        );
    }
);

test('<pre>, <textarea>, <listing> with initial LF (see: https://github.com/whatwg/html/pull/1815)',
    (t) => {
        t.deepEqual(
            parser(
                "<pre>\n1</pre><pre>\n\n2</pre><textarea>\n3</textarea><textarea>\n\n4</textarea><listing>\n5</listing><listing>\n\n6</listing>"
            ),
            [ 11, [ 'PRE', '\n1' ], [ 'PRE', '\n\n2' ], [ 'TEXTAREA', '\n3' ], [ 'TEXTAREA', '\n\n4' ], [ 'LISTING', '\n5' ], [ 'LISTING', '\n\n6' ] ]
        );
    }
);

test('Mixed content (GH-333)',
    (t) => {
        t.deepEqual(
            parser(
                "<svg><style>&lt;</style></svg><style>&lt;</style><svg><script>&lt;</script></svg><script>&lt;</script>"
            ),
            [ 11, [ 'svg', [ 'style', '<' ] ], [ 'STYLE', '<' ], [ 'svg', [ 'script', '<' ] ], [ 'SCRIPT', '<' ] ]
        );
    }
);

test('<dl>',
    (t) => {
        t.deepEqual(
            parser(
                "<dl><dt>1<dd>2<dd>3</dl>"
            ),
            [ 11, [ 'DL', [ 'DT', '1' ], [ 'DD', '2' ], [ 'DD', '3' ] ] ]
        );
    }
);

test('<li>',
    (t) => {
        t.deepEqual(
            parser(
                "<ol><li>1<li>2<li>3</ol>"
            ),
            [ 11, [ 'OL', [ 'LI', '1' ], [ 'LI', '2' ], [ 'LI', '3' ] ] ]
        );
    }
);

test('<p>',
    (t) => {
        t.deepEqual(
            parser(
                "<p>1<p>2<p>3"
            ),
            [ 11, [ 'P', '1' ], [ 'P', '2' ], [ 'P', '3' ] ]
        );
        t.deepEqual(
            parser(
                '<p>Some <div>content</div>'
            ),
            [ 11, [ 'P', 'Some ' ], [ 'DIV', 'content' ] ]
        );
    }
);

test('<ruby>',
    (t) => {
        t.deepEqual(
            parser(
                "<ruby>漢<rp>(<rt>kan<rp>)</rp>字<rp>(<rt>ji<rp>)</ruby>"
            ),
            [ 11, [ 'RUBY', '漢', [ 'RP', '(' ], [ 'RT', 'kan' ], [ 'RP', ')' ], '字', [ 'RP', '(' ], [ 'RT', 'ji' ], [ 'RP', ')' ] ] ]
        );
        t.deepEqual(
            parser(
                "<ruby><rb>漢<rp>(<rt>kan<rp>)<rb>字<rp>(<rt>ji<rp>)</ruby>"
            ),
            [ 11, [ 'RUBY', [ 'RB', '漢' ], [ 'RP', '(' ], [ 'RT', 'kan' ], [ 'RP', ')' ], [ 'RB', '字' ], [ 'RP', '(' ], [ 'RT', 'ji' ], [ 'RP', ')' ] ] ]
        );
        t.deepEqual(
            parser(
                "<ruby><rbc><rb>馬<rp>(<rt>mǎ<rp>)<rb>來<rp>(<rt>lái<rp>)<rb>西<rp>(<rt>xī<rp>)<rb>亞<rp>(<rt>yà<rp>)<rtc><rp>(<rt>Malaysia<rp>)</ruby>"
            ),
            [ 11, [ 'RUBY',
                      [ 'RBC', [ 'RB', '馬' ], [ 'RP', '(' ], [ 'RT', 'mǎ' ], [ 'RP', ')' ], 
                               [ 'RB', '來' ], [ 'RP', '(' ], [ 'RT', 'lái' ], [ 'RP', ')' ], 
                               [ 'RB', '西' ], [ 'RP', '(' ], [ 'RT', 'xī'  ], [ 'RP', ')' ], 
                               [ 'RB', '亞' ], [ 'RP', '(' ], [ 'RT', 'yà'  ], [ 'RP', ')' ]
                      ],
                      [ 'RTC', [ 'RP', '(' ], [ 'RT', 'Malaysia' ], [ 'RP', ')' ] ]
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
            [ 11, [ 'TABLE', [ 'TR', [ 'TH', '1' ], [ 'TD', '2' ], [ 'TD', '3' ], [ 'TH', '4' ] ] ] ]
        );
        t.deepEqual(
            parser(
                "<table><caption>aaa<tr><th>1<td>2<td>3<th>4</table>"
            ),
            [ 11, [ 'TABLE', [ 'CAPTION', 'aaa' ], [ 'TR', [ 'TH', '1' ], [ 'TD', '2' ], [ 'TD', '3' ], [ 'TH', '4' ] ] ] ]
        );
        t.deepEqual(
            parser(
                "<table><thead><tr><th>1<td>2<td>3<th>4<tbody><tr><th>1<td>2<td>3<th>4<tr></table>"
            ),
            [ 11, [ 'TABLE', [ 'THEAD', [ 'TR', [ 'TH', '1' ], [ 'TD', '2' ], [ 'TD', '3' ], [ 'TH', '4' ] ] ], [ 'TBODY', [ 'TR', [ 'TH', '1' ], [ 'TD', '2' ], [ 'TD', '3' ], [ 'TH', '4' ] ], [ 'TR' ] ] ] ]
        );
    }
);

test('<html ⚡ amp>',
    (t) => {
        t.deepEqual(
            parser(
                '<html ⚡ amp>'
            ),
            [ 11, [ 'HTML', { '⚡' : true, amp : true } ] ]
        );
    }
);

test('/>',
    (t) => {
        t.deepEqual(
            parser(
                '<a href=//example.com/>example.com</a>'
            ),
            [ 11, [ 'A', { 'href' : '//example.com/' }, 'example.com' ] ]
        );
    }
);

test('quotes',
    (t) => {
        t.deepEqual(
            parser(
                "<div data-foo='\\\"'></div>"
            ),
            [ 11, [ 'DIV', { 'data-foo' : '"' } ] ]
        );
    }
);
