jest.disableAutomock();

const ListingsStore = require('../listings');
const ListingsAction = require('../../actions/listings');
const Client = require('../../utils/client');

describe('ListingsStore', () => {
  describe('Action requestSubredditListings', () => {
    it('gets the requested subreddit listings', () => {
      var subreddit = 'someSubreddit';
      Client.getSubredditListings = jest.genMockFn();

      ListingsAction.requestSubredditListings.trigger(subreddit);

      expect(Client.getSubredditListings).toBeCalledWith(subreddit);
    });
  });

  describe('Action storeSubredditListings', () => {
    it('sets current subreddit listings', () => {
      var result = { listing: "someListing" };
      ListingsStore.trigger = jest.genMockFn();

      ListingsAction.storeSubredditListings.trigger(result);

      expect(ListingsStore.data.listings).toEqual(result);
      expect(ListingsStore.trigger).toBeCalledWith(ListingsStore.data);
    });
  });
});
