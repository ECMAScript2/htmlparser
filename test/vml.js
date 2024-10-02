const test = require('ava');
const parser = require('../dist/index.js');

test('VML',
    (t) => {
        t.deepEqual(
            parser(
                `<html xmlns:v="urn:schemas-microsoft-com:vml"><head><style>v:*{behavior:url(#default#VML)}</style><body><v:line from="0,100" to="300,100" strokecolor="black" />`
            ),
            [ 11, [ 'HTML', { 'xmlns:v' : 'urn:schemas-microsoft-com:vml' },
                [ 'HEAD', [ 'STYLE', 'v:*{behavior:url(#default#VML)}' ] ],
                [ 'BODY', [ 'v:line', { from: '0,100', to: '300,100', strokecolor: 'black' } ] ]
            ] ]
        );
    }
);

test('VML - Subelements',
    (t) => {
        t.deepEqual(
            parser(
                `<v:rect style="width:30; height:30;"><v:fill type="gradient" color="red" color2="white" /></v:rect>`
            ),
            [ 11, [ 'v:rect', { style : 'width:30; height:30;' },
                [ 'v:fill', { type: 'gradient', color: 'red', color2: 'white' } ]
            ] ]
        );
    }
);

test('VML - textbox',
    (t) => {
        t.deepEqual(
            parser(
                `<v:roundrect style="width:90; height:27;" fillcolor="#ffcccc"><v:textbox><a href="xxx.htm">Click me!!</a></v:textbox></v:roundrect>`
            ),
            [ 11, [ 'v:roundrect', { style : 'width:90; height:27;', fillcolor: '#ffcccc' },
                [ 'v:textbox', [ 'a', { href: 'xxx.htm' }, 'Click me!!' ] ]
            ] ]
        );
    }
);