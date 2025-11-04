const test = require('ava');
const parser = require('../dist/index.js');

test('</close>',
    (t) => {
        t.deepEqual(
            parser(
                '</close><p>Hello, world!'
            ),
            [ 11, '</close>', [ 'p', 'Hello, world!' ] ]
        );
    }
);

test('</void element>',
    (t) => {
        t.deepEqual(
            parser(
                '</img><p>Hello, world!'
            ),
            [ 11, [ 'p', 'Hello, world!' ] ]
        );
    }
);
