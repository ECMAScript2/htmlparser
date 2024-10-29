# ES2 HTML Parser

Compact JavaScript HTML parser.

1. Target and Development Environments
2. Functions and Features
3. Development and test
4. Links
5. License

## 1. Target and Development Environments

1. Works in a wide range of environments (but is slow) because it does not use `RegExp`
2. Written in Closure Script
   * About 7KB including handler

## 2. Functions and Features

HTML document fragments written by web designers generally work correctly.

1. The document tree can be constructed correctly even if the optional closing tag is omitted.
   * `caption,dd,li,td,dt,th,p,rb,rp,rt,html,head,colgroup,optgroup,option,tbody,thead,tfoot,tr,rbc,rtc`
2. Broken document fragments in conditional comments can also be parsed.
   * `<!--[if IE 8]> </div><br clear=both><div> <![endif]-->`
   * Element missing end tag
     * An “auto-closing end tag” that is not present in the document, cannot omit the end tag, and is not closed by another starting tag is identified by the `isImplicit` flag. (`onParseEndTag`)
   * Element missing start tag
     * `isMissingStartTag` flag is true (`onParseEndTag`)
3. Time Slice Execution
4. Parsing Stop
5. `<html><head><body>` is not a supplement to create a complete HTML document like [parse5](https://www.npmjs.com/package/parse5).
6. `<table><p>` and other invalid documents, the structure of the tree created from them differs from the specification.
7. XHTML is not well tested.
8. Do not remove newline characters in `<pre>, <listing>, <textarea>`.

## 3. Development and test

~~~sh
git clone https://github.com/ECMAScript2/es2-html-parser
cd es2-html-parser
npm i

gulp dist

npm run test
~~~

See [src/js/example/*.js](./src/js/example/*.js) for how to write the handler. A SAX Style API is provided.

See [test/*.js](./test/*.js) for how to use the parser.

## 4. Links

1. [Original code by Erik John Resig (ejohn.org)](http://ejohn.org/blog/pure-javascript-html-parser/) Early JavaScript HTML parser, compact code but useful in most cases
2. [pettanR / webframework / js / 02_Dom / 09_HTMLParser.js](https://github.com/pettanR/webframework/blob/38d5bab145631f33b0e9988dfb704252884b5986/js/02_dom/09_XHTMLParser.js) Based on John Resig's code, without regular expressions
3. [html.json](https://github.com/itozyun/html.json) Project using es2-html-parser

## 5. License

[ES2 HTML Parser](https://github.com/ECMAScript2/es2-html-parser) is licensed under MIT license.

(C) 2024 [itozyun](https://github.com/itozyun)([blog](//outcloud.blogspot.com/))
