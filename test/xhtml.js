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
            [ 9, "<?xml version='1.0' encoding='UTF-8' ?><!DOCTYPE html>", [ 'data:a', { checked : true } ] ]
        );
    }
);
