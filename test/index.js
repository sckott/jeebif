var should = require('chai').should(),
    jeebif = require('../index'),
    search = jeebif.search;

describe('#search', function() {
  it('search works correctly;', function() {
    search('Helianthus').should.be.a('string');
  });
});
