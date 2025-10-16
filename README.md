# ES2 HTML Parser

Compact JavaScript HTML parser.

1. Target and Development Environments
2. Demo
2. Functions and Features
3. Development and test
4. Links
5. License

## 1. Target and Development Environments

1. Works in a wide range of environments (but is slow) because it does not use `RegExp`
2. Written in Closure Script
   * About 7KB including handler

## 2. Demo

[Blogger Templete Cleaner](https://ecmascript2.github.io/htmlparser/)

## 3. Functions and Features

HTML document fragments written by web designers generally work correctly.

1. The document tree can be constructed correctly even if the optional closing tag is omitted.
   * `caption,dd,li,td,dt,th,p,rb,rp,rt,html,head,colgroup,optgroup,option,tbody,thead,tfoot,tr,rbc,rtc`
2. Broken document fragments in conditional comments can also be parsed.
   * `<!--[if IE 8]> </div><br clear=both><div> <![endif]-->`
     * Retrieve and parse the comment text [@see](https://github.com/itozyun/html.json/blob/a8b395e34676e0594fd9421f13bfe674997e544c/src/js/html2json/html2json.js#L240)
   * Element missing end tag
     * An“auto-closing end tag”that is not present in the document, cannot omit the end tag, and is not closed by another starting tag is identified by the `isInvalidEndTagOmission` flag. (`onParseEndTag`)
   * Element missing start tag
     * `isMissingStartTag` flag is true (`onParseEndTag`)
3. `<html><head><body>` is not a supplement to create a complete HTML document like [parse5](https://www.npmjs.com/package/parse5).
4. ⚠️ `<table><p>` and other invalid documents, the structure of the tree created from them differs from the specification.
5. ⚠️ Do not remove newline characters in `<script>, <style>, <textarea>, <title>, <plaintext>, <xmp>, <listing>`.
6. [RawTextElements](https://github.com/ECMAScript2/htmlparser/blob/8051886c29c94b23a2fa9ac2fc528c712349c5e9/src/js/htmlparser.const.js#L55)(`<script>, <style>, <textarea>, <title>, <plaintext>, <xmp>, <listing>`) can contain ProcessingInstruction. ([#1](https://github.com/ECMAScript2/htmlparser/issues/1))
7. ⚠️ Pause parsing is not tested.
8. XHTML
9. ⚠️ In a complete document, the `<body>` tag must not be omitted.

## 4. Development and test

~~~sh
git clone https://github.com/ECMAScript2/es2-html-parser
cd es2-html-parser
npm i

gulp dist

npm run test
~~~

See [src/js/example/*.js](./src/js/example/) for how to write the handler. A SAX Style API is provided.

See [test/*.js](./test/) for how to use the parser.

## 5. Links

1. [Original code by Erik John Resig (ejohn.org)](http://ejohn.org/blog/pure-javascript-html-parser/) Early JavaScript HTML parser, compact code but useful in most cases
2. [pettanR / webframework / js / 02_Dom / 09_HTMLParser.js](https://github.com/pettanR/webframework/blob/38d5bab145631f33b0e9988dfb704252884b5986/js/02_dom/09_XHTMLParser.js) Based on John Resig's code, without regular expressions
3. [html.json](https://github.com/itozyun/html.json) Project using es2-html-parser
4. [クラウド番外地 / 7KB 弱の JavaScript 製 HTML パーサーを書いた](https://outcloud.blogspot.com/2024/12/7kb-html-parser.html)

## 6. License

[ES2 HTML Parser](https://github.com/ECMAScript2/es2-html-parser) is licensed under MIT license.

(C) 2024-2025 [itozyun](https://github.com/itozyun)([blog](//outcloud.blogspot.com/))
