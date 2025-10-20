const test = require('ava');
const parser = require('../dist/index.js');

test('<data:a/>',
    (t) => {
        t.deepEqual(
            parser(
                `<?xml version='1.0' encoding='UTF-8' ?>
<!DOCTYPE html>
<data:a/>
`
            ),
            [ 9, "<?xml version='1.0' encoding='UTF-8' ?><!DOCTYPE html>", [ 'data:a' ] ]
        );
    }
);

test('<data:a checked/>',
    (t) => {
        t.deepEqual(
            parser(
                `<?xml version='1.0' encoding='UTF-8' ?>
<!DOCTYPE html>
<data:a checked/>
`
            ),
            [ 9, "<?xml version='1.0' encoding='UTF-8' ?><!DOCTYPE html>", [ 'data:a', { checked : 'checked' } ] ]
        );
    }
);

test('RawTextElement under Namespaced Element',
    (t) => {
        t.deepEqual(
            parser(
                `<?xml version='1.0' encoding='UTF-8' ?>
<!DOCTYPE html>
<html><b:attr /><head><script>/*<![CDATA[*/ var a=1; /*]]>*/</script>`
            ),
            [ 9, "<?xml version='1.0' encoding='UTF-8' ?><!DOCTYPE html>", [ 'html', [ 'b:attr' ], [ 'head', [ 'script', '/*<![CDATA[*/ var a=1; /*]]>*/' ] ] ] ]
        );
    }
);

test('Blogger templete',
    (t) => {
        t.deepEqual(
            parser(
                `<?xml version='1.0' encoding='UTF-8' ?>
<!DOCTYPE html><html><head>&lt;style&gt; &lt;!-- /*<b:skin> */</b:skin>&lt;!-- </head> --&gt;&lt;/head&gt;<body>`
            ),
            [ 9, "<?xml version='1.0' encoding='UTF-8' ?><!DOCTYPE html>", [ 'html', [ 'head', '<style> <!-- /*', [ 'b:skin', ' */' ], '<!-- ' ], ' --></head>', [ 'body' ] ] ]
        );
    }
);


