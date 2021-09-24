# itsthere
Simply returns true if variable does not contain null, undefined and empty strings. That's what this module does basically.

## Installation
Run the npm command below to install this node module.
```
npm i itsthere
```

## Examples

```js
const itsthere = require('itsthere)

console.log(itsthere()) // false
console.log(itsthere(null)) //false
console.log(itsthere(undefined)) //false
console.log(itsthere("")) //false
console.log(itsthere("       ")) //false

```

## License
[MIT](https://opensource.org/licenses/MIT)