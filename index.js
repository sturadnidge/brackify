'use strict';
/* jshint node:true, latedef:nofunc */

module.exports = function(b, x) {

  if (!x) x = b;

  var left, right;

  switch(b) {

    case '{':
      left = '{';
      right = '}';
      break;

    case '[':
      left = '[';
      right = ']';
      break;

    case '<':
      left = '<';
      right = '>';
      break;

    default:
      left = '(';
      right = ')';
  }

  return left + x + right;

};
