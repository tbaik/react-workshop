import { decode } from '../urlDecoder';

describe('UrlDecoder', () => {
  describe('decode', () => {
    it('replaces decoded ampersands with actual ampersands', () => {
      const url = 'someUrl.com?foo=bar&amp;hello=world';

      expect(decode(url)).toEqual('someUrl.com?foo=bar&hello=world');
    });
  });
});
