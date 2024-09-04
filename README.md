# ES2 HTML Parser

1. Closure Script で書かれている
2. `RegExp` 不使用なので、広範な環境で動作する(ただし遅い)
3. HTML4 が対象のコードなので、最新の HTML パーサー実装から機能を取り込む必要がありそう
4. `<table><p>` などの不正な文書から作られるツリーの構造が仕様と異なる
5. XHTML のサポートは不十分
6. 条件付きコメント内の、壊れた文書フラグメントもパースできる `<!--[if IE 8]><br clear=both></div><![endif]-->`

---

1. [Original code by Erik John Resig (ejohn.org)](http://ejohn.org/blog/pure-javascript-html-parser/) 初期の JavaScript 製 HTML パーサー、コンパクトなコードながら大抵のケースで実用に供する
2. [pettanR / webframework / js / 02_Dom / 09_HTMLParser.js](https://github.com/pettanR/webframework/blob/38d5bab145631f33b0e9988dfb704252884b5986/js/02_dom/09_XHTMLParser.js) John Resig のコードを元に正規表現を不使用にしたもの
