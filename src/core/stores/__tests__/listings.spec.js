jest.disableAutomock();

const ListingsStore = require('../listings');
const ListingsAction = require('../../actions/listings');
const Client = require('../../utils/client');

describe('ListingsStore', function() {
  describe('Action requestSubredditListings', function() {
    it('gets the requested subreddit listings', function() {
      var subreddit = 'someSubreddit';
      Client.getSubredditListings = jest.genMockFn();

      ListingsAction.requestSubredditListings.trigger(subreddit);

      expect(Client.getSubredditListings).toBeCalledWith(subreddit);
    });
  });

  describe('Action storeSubredditListings', function() {
    it('sets current subreddit listings', function() {
      var result = { listing: "someListing" };
      ListingsStore.trigger = jest.genMockFn();

      ListingsAction.storeSubredditListings.trigger(result);

      expect(ListingsStore.data.listings).toEqual(result);
      expect(ListingsStore.trigger).toBeCalledWith(ListingsStore.data);
    });
  });
});
