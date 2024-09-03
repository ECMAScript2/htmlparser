// https://github.com/inikulin/parse5/blob/master/test/data/serialization/tests.json
const test = require('ava');
const parser = require('../dist/index.js');

test('Template content',
    (t) => {
        t.deepEqual(
            parser(
                '<body><template>Some <div>content</div></template></body>'
            ),
            [ [ 'BODY', [ 'TEMPLATE', 'Some ', [ 'DIV', 'content' ] ] ] ]
        );
    }
);

test('Attributes',
    (t) => {
        t.deepEqual(
            parser(
                '<head><meta http-equiv=\"refresh\" content=\"30\"></head><body><div style=\"background-color:red; padding: 0 25px 32px;\"></body>'
            ),
            [ [ 'HEAD', [ 'META', { 'http-equiv' : 'refresh', content : '30' } ] ], [ 'BODY', [ 'DIV', { style : 'background-color:red; padding: 0 25px 32px;' } ] ] ]
        );
    }
);

test('Attribute serialized name - XML namespace',
    (t) => {
        t.deepEqual(
            parser(
                '<svg xml:base=\"http://example.org\"></svg>'
            ),
            [ [ 'SVG', { 'xml:base' : 'http://example.org' } ] ]
        );
    }
);

[
    {
        "name": "Attribute serialized name - XMLNS namespace",
        "input": "<svg xmlns=\"http://www.w3.org/1999/xhtml\" xmlns:xlink=\"http://www.w3.org/1999/xlink\"></svg",
        "expected": "<html><head></head><body><svg xmlns=\"http://www.w3.org/1999/xhtml\" xmlns:xlink=\"http://www.w3.org/1999/xlink\"></svg></body></html>"
    },
    {
        "name": "Attribute serialized name - XLink namespace",
        "input": "<svg xlink:title=\"Hey!\"></svg>",
        "expected": "<html><head></head><body><svg xlink:title=\"Hey!\"></svg></body></html>"
    },
    {
        "name": "Attribute value escaping - &amp;",
        "input": "<div data-foo=\"& 42 &\"></div>",
        "expected": "<html><head></head><body><div data-foo=\"&amp; 42 &amp;\"></div></body></html>"
    },
    {
        "name": "Attribute value escaping - &nbsp;",
        "input": "<div data-foo=\"\u00A0 bar\u00A0\"></div>",
        "expected": "<html><head></head><body><div data-foo=\"&nbsp; bar&nbsp;\"></div></body></html>"
    },
    {
        "name": "Attribute value escaping - quotes",
        "input": "<div data-foo=\"&quot;\" id=test1\" class='test2\"'></div>",
        "expected": "<html><head></head><body><div data-foo=\"&quot;\" id=\"test1&quot;\" class=\"test2&quot;\"></div></body></html>"
    },
    {
        "name": "Attribute value escaping - < and >",
        "input": "<div data-foo=\"<span>\"></div>",
        "expected": "<html><head></head><body><div data-foo=\"<span>\"></div></body></html>"
    },
    {
        "name": "Attributes value escaping - other entities",
        "input": "<div data-foo='&raquo;&phone;'>",
        "expected": "<html><head></head><body><div data-foo=\"»☎\"></div></body></html>"
    },
    {
        "name": "Void elements",
        "input": "<area><base><basefont><bgsound><br><embed><hr><img><input><keygen><link><meta><param><source><track><wbr>",
        "expected": "<html><head></head><body><area><base><basefont><bgsound><br><embed><hr><img><input><keygen><link><meta><param><source><track><wbr></body></html>"
    },
    {
        "name": "Void elements - <col>",
        "input": "<table><col></table>",
        "expected": "<html><head></head><body><table><colgroup><col></colgroup></table></body></html>"
    },
    {
        "name": "Void elements - <frame>",
        "input": "<frameset><frame></frameset>",
        "expected": "<html><head></head><frameset><frame></frameset></html>"
    },
    {
        "name": "Text nodes",
        "input": "<title>foo</title><body>foo<div>bar</div>baz</body>",
        "expected": "<html><head><title>foo</title></head><body>foo<div>bar</div>baz</body></html>"
    },
    {
        "name": "Text nodes escaping - &amp;",
        "input": "<title>Mac&Cheese</title><div>&&&</div>",
        "expected": "<html><head><title>Mac&amp;Cheese</title></head><body><div>&amp;&amp;&amp;</div></body></html>"
    },
    {
        "name": "Text nodes escaping - &nbsp;",
        "input": "<title>\u00A0foo\u00A0bar\u00A0</title><div>\u00A0baz\u00A0</div>",
        "expected": "<html><head><title>&nbsp;foo&nbsp;bar&nbsp;</title></head><body><div>&nbsp;baz&nbsp;</div></body></html>"
    },
    {
        "name": "Text nodes escaping - < and >",
        "input": "<title>< foo ></title><div>> bar <</div>",
        "expected": "<html><head><title>&lt; foo &gt;</title></head><body><div>&gt; bar &lt;</div></body></html>"
    },
    {
        "name": "Text nodes escaping - quotes",
        "input": "<title>\"foo\"</title><div>\"bar\"</div>",
        "expected": "<html><head><title>\"foo\"</title></head><body><div>\"bar\"</div></body></html>"
    },
    {
        "name": "Text nodes escaping - non-escapable tags",
        "input": "<body><style>&\u00A0><</style><script>&\u00A0><</script><xmp>&\u00A0><</xmp><iframe>&\u00A0><</iframe><noembed>&\u00A0><</noembed><noframes>&\u00A0><</noframes><plaintext>&\u00A0><",
        "expected": "<html><head></head><body><style>&\u00A0><</style><script>&\u00A0><</script><xmp>&\u00A0><</xmp><iframe>&\u00A0><</iframe><noembed>&\u00A0><</noembed><noframes>&\u00A0><</noframes><plaintext>&\u00A0><</plaintext></body></html>"
    },
    {
        "name": "Text nodes escaping - <noscript> with scripting enabled",
        "input": "<body><noscript>& ><</noscript></body>",
        "expected": "<html><head></head><body><noscript>& ><</noscript></body></html>"
    },
    {
        "name": "Text nodes escaping - <noscript> with scripting disabled (GH-332)",
        "options": { "scriptingEnabled": false },
        "input": "<body><noscript>& ><</noscript></body>",
        "expected": "<html><head></head><body><noscript>&amp; &gt;&lt;</noscript></body></html>"
    },
    {
        "name": "Comment nodes",
        "input": "<!-- Hey --><html><head></head><!-- &\u00A0>< --><body><!-- 42 --></body></html>",
        "expected": "<!-- Hey --><html><head></head><!-- &\u00A0>< --><body><!-- 42 --></body></html>"
    },
    {
        "name": "Doctype without systemId and publicId",
        "input": "<!DOCTYPE html>",
        "expected": "<!DOCTYPE html><html><head></head><body></body></html>"
    },
    {
        "name": "Doctype with publicId",
        "input": "<!DOCTYPE html PUBLIC \"-//W3C//DTD HTML 4.01//EN\">",
        "expected": "<!DOCTYPE html><html><head></head><body></body></html>"
    },
    {
        "name": "Doctype with systemId",
        "input": "<!DOCTYPE html SYSTEM \"http://www.w3.org/DTD/HTML4-strict.dtd\"",
        "expected": "<!DOCTYPE html><html><head></head><body></body></html>"
    },
    {
        "name": "Doctype with publicId and systemId",
        "input": "<!DOCTYPE html html \"-//W3C//DTD HTML 4.01//EN\" \"http://www.w3.org/TR/html4/strict.dtd\"",
        "expected": "<!DOCTYPE html><html><head></head><body></body></html>"
    },
    {
        "name": "Child nodes",
        "input": "<span><a><b><c></c></b><d>e</d><f><g>h</g></f></a></span>",
        "expected": "<html><head></head><body><span><a><b><c></c></b><d>e</d><f><g>h</g></f></a></span></body></html>"
    },
    {
        "name": "<pre>, <textarea>, <listing> with initial LF (see: https://github.com/whatwg/html/pull/1815)",
        "input": "<pre>\n1</pre><pre>\n\n2</pre><textarea>\n3</textarea><textarea>\n\n4</textarea><listing>\n5</listing><listing>\n\n6</listing>",
        "expected": "<html><head></head><body><pre>1</pre><pre>\n2</pre><textarea>3</textarea><textarea>\n4</textarea><listing>5</listing><listing>\n6</listing></body></html>"
    },
    {
        "name": "Mixed content (GH-333)",
        "input": "<svg><style>&lt;</style></svg><style>&lt;</style><svg><script>&lt;</script></svg><script>&lt;</script>",
        "expected": "<html><head></head><body><svg><style>&lt;</style></svg><style>&lt;</style><svg><script>&lt;</script></svg><script>&lt;</script></body></html>"
    }
]
