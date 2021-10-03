# itsthere
Simply returns true if variable does not contain null, undefined and empty strings. That's what this module does basically.

## Installation
Run the npm command below to install this node module.
```
npm i itsthere
```

## Examples

### Basic Usage
```js
const itsthere = require('itsthere')

console.log(itsthere("hello world"))    // true
console.log(itsthere())                 // false

// Null & Undefined
console.log(itsthere(null))             // false
console.log(itsthere(undefined))        // false

// Empty Strings
console.log(itsthere(""))               // false
console.log(itsthere("       "))        // false
console.log(itsthere("   a    "))       // true
```

### Array

```js
const itsthere = require('itsthere')

// An empty array
var listOfCountryCodes = []
console.log(itsthere(listOfCountryCodes)) // false

// Remains true as long there is something in the array regardless of data type
var listOfCountryCodes = ['UK', 'SG', ' ', null]
console.log(itsthere(listOfCountryCodes)) // true
```

### Object

```js
const itsthere = require('itsthere')

// An empty object
var personInfo = {}
console.log(itsthere(personInfo)) // false

// Remains true as long there is something in the object regardless of data type
var personInfo = {'name':'John', 'age':15, 'isVerified':null}
console.log(itsthere(personInfo)) // true
```

## Why use itsthere?

```js
const itsthere = require('itsthere')

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
[MIT](https://github.com/Lmao5/itsthere/blob/main/LICENSE)