const test = require('ava');
const parser = require('../dist/index.js');

test('</close>',
    (t) => {
        t.deepEqual(
            parser(
                '</close><p>Hello, world!'
            ),
            [ 11, '</CLOSE>', [ 'P', 'Hello, world!' ] ]
        );
    }
);
