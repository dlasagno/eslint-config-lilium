# eslint-config-lilium

[![Github license](https://img.shields.io/github/license/dlasagno/eslint-config-lilium.svg)](https://github.com/dlasagno/eslint-config-lilium/blob/master/LICENSE)
[![Github package.json version](https://img.shields.io/github/package-json/v/dlasagno/eslint-config-lilium.svg)](https://github.com/dlasagno/eslint-config-lilium/blob/master/package.json)

This is my personal configuration for eslint.
I designed it to write clean and readable code according to my tastes.

> **Note:** this package doesn't provide any `env`, you have to add them in your config

## Installation

In order to use this configuration in your project you have to install this as a dependency:

```shell
npm install --save-dev eslint-config-lilium
```

and then you can just add this to your `.eslintrc.*` (in this case a js file) file:

```js
module.exports = {
  extends: ['lilium']
}
```

## Package modules

This package is fully modular, this means that you can import the entire config or just the parts that you want.

```javascript
  exnteds: [
    'lilium', // Extends the entire package
    'lilium/rules/es6' // Extends only the es6 set of rules
  ]
```

To see all the available modules, you just have to take a look at code folder structure.
