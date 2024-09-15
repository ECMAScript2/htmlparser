const parser = require('./dist/index.js');

console.log( parser(
    "<title>< foo ></title><div>> bar <</div>"
) )