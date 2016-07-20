jest.dontMock('../urlDecoder');

const UrlDecoder = require('../urlDecoder');

describe('UrlDecoder', function() {
  describe('decodeAmpersand', function() {
    it('replaces decoded ampersands with actual ampersands', function() {
      const url = 'someUrl.com?foo=bar&amp;hello=world';

      expect(UrlDecoder.decodeAmpersand(url)).toEqual('someUrl.com?foo=bar&hello=world');
    });
  });
});
