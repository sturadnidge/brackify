'use strict';
/* jshint node:true, mocha:true, latedef:nofunc */

var should = require('chai').should(),
    brackify = require('../index.js');

describe('#brackify', function() {

  it('converts 8 to (8)', function() {
    brackify(8).should.equal('(8)');
  });

  it('converts x to (x)', function() {
    brackify(function(){}, 'x').should.equal('(x)');
  });

  it('converts x to (x)', function() {
    brackify('x').should.equal('(x)');
  });

  it('converts x to (x)', function() {
    brackify('b', 'x').should.equal('(x)');
  });

  it('converts x to {x}', function() {
    brackify('{', 'x').should.equal('{x}');
  });

  it('converts x to [x]', function() {
    brackify('[', 'x').should.equal('[x]');
  });

  it('converts x to <x>', function() {
    brackify('<', 'x').should.equal('<x>');
  });

});
