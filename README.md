# itsthere
Simply returns true if variable does not contain null, undefined and empty strings. That's what this module does basically.

## Installation
Run the npm command below to install this node module.
```
npm i itsthere
```

## Examples

```js
const itsthere = require('itsthere')

console.log(itsthere()) // false
console.log(itsthere(null)) //false
console.log(itsthere(undefined)) //false
console.log(itsthere("")) //false
console.log(itsthere("       ")) //false

const randomHash = "0424974c68530290458c8d58674e2637f65abc127057957d7b3acbd24c208f93"

// Typical checking for null and undefined and empty strings
if (randomHash !== null || randomHash !== undefined || randomHash !== "") {
    console.log("accepted") // accepted
}
else{
    console.log("reject")
}

// A much shorter and easier alternative compared to the above
if (itsthere(randomHash)) {
    console.log("accepted") // accepted
}
else{
    console.log("reject")
}

```

## License
[MIT](https://opensource.org/licenses/MIT)