# Schema parser
Schema are all around the web, and contain useful information about the content of a webpage.

This parser is the equivalent of the https://validator.schema.org/, while it won't fetch via the url for you.
It will give you the same result as the validator.

## limitation
For now it only works with JSON-LD in html for now, this is still work in progress


## example

```js
import {parseSchema} from "schema_org_parseur"

console.log(parseSchema(html))
// [ {schema1}, {schema2}, ...]


```
