brackify
=========

A small library that wraps things in brackets.

## Installation

  `npm install brackify`

## Usage

  var brackify = require('brackify');

  var brackified = brackify('thing'); // Output should be `(thing)`

  var brackified = brackify('{', 'thing'); // Output should be `{thing}`

  var brackified = brackify('[', 'thing'); // Output should be `[thing]`

  var brackified = brackify('<', 'thing'); // Output should be `<thing>`

## Tests

  `npm test`

## Contributing

Take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code. Thanks.
