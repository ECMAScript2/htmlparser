# ES2 HTML Parser

1. Closure Script で書かれている
1. `RegExp` 不使用なので、広範な環境で動作する(ただし遅い)
2. HTML4 が対象のコードなので、最新の HTML パーサー実装から機能を取り込む必要がありそう
3. `<table><p>` などの不正な文書から作られるツリーの構造が仕様と異なる

---

1. [Original code by Erik John Resig (ejohn.org)](http://ejohn.org/blog/pure-javascript-html-parser/)
2. [pettanR / webframework / js / 02_Dom / 09_HTMLParser.js](https://github.com/pettanR/webframework/blob/38d5bab145631f33b0e9988dfb704252884b5986/js/02_dom/09_XHTMLParser.js)
