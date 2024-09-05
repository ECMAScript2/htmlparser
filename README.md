# ES2 HTML Parser

仕様に合致した HTML 文書断片について、正しく動作する事を狙った、コンパクトな HTML パーサー(ハンドラー込みで 7KB 程度)．

省略可能な閉じタグ(`caption,dd,li,td,dt,p,rb,rp,rt,html,head,colgroup,optgroup,option,tbody,thead,tfoot,tr,rbc,rtc`)を省略した場合でも、正しく文書ツリーを構築できる．

条件付きコメント内などに現れる不完全な HTML 文書断片のパースができる．

他のパーサー(ex:[parse5](https://www.npmjs.com/package/parse5))のように、`<html><head><body>` を補って完全な HTML 文書にすることはしない．

1. Closure Script で書かれている
2. `RegExp` 不使用なので、広範な環境で動作する(ただし遅い)
4. `<table><p>` などの不正な文書から作られるツリーの構造が仕様と異なる
4. `pre,listing,textarea` の先頭の改行文字を削除しない
5. XHTML のサポートは不十分
6. 条件付きコメント内の、壊れた文書フラグメントもパースできる `<!--[if IE 8]> </div><br clear=both> <![endif]-->` 閉じタグだけ, 開始タグだけ
7. `<html><head><body>` を補って完全な HTML 文書にすることはしない
8. 文書中に存在せず、閉じタグを省略できず、他の開始タグによって閉じられてもいない「自動で閉じた閉じタグ」は `missingEndTag` フラグで判明する
9. `noStartTag` フラグは開始タグが無い場合に立つ．

## Links

1. [Original code by Erik John Resig (ejohn.org)](http://ejohn.org/blog/pure-javascript-html-parser/) 初期の JavaScript 製 HTML パーサー、コンパクトなコードながら大抵のケースで実用に供する
2. [pettanR / webframework / js / 02_Dom / 09_HTMLParser.js](https://github.com/pettanR/webframework/blob/38d5bab145631f33b0e9988dfb704252884b5986/js/02_dom/09_XHTMLParser.js) John Resig のコードを元に正規表現を不使用にしたもの

## License

[ES2 HTML Parser](https://github.com/ECMAScript2/es2-html-parser) is licensed under MIT license.

(C) 2024 [itozyun](https://github.com/itozyun)([blog](//outcloud.blogspot.com/))