const parser = require('./dist/index.js');

console.log( parser(
                `<?xml version='1.0' encoding='UTF-8' ?>
<!DOCTYPE html>
<html>
<b:attr />
<head>
<script>/*<![CDATA[*/ var a=1; /*]]>*/</script>
`
) )