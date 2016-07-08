jest
  .unmock('../listings');

import ListingsStore from '../listings';
import ListingsAction from '../../actions/listings';

describe('ListingsStore', () => {
  describe('Action storeSubredditListings', function() {
    it('sets current subreddit listings', function() {
      var result = { listing: "someListing" };

      ListingsAction.storeSubredditListings();

      expect(ListingsStore.data.listings).toEqual(result);
    });
  });
});
