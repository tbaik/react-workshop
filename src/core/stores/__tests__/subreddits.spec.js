jest.disableAutomock();

const SubredditsStore = require('../subreddits');
const SubredditsAction = require('../../actions/subreddits');
const Client = require('../../utils/client');

describe('SubredditsStore', () => {
  describe('Action popularSubredditsRequested', () => {
    it('gets the  listings', () => {
      Client.getPopularSubreddits = jest.genMockFn();

      SubredditsAction.requestPopularSubreddits.trigger();

      expect(Client.getPopularSubreddits).toBeCalled();
    });
  });

  describe('Action storeSubreddits', () => {
    it('sets the list of subreddits and triggers the data', () => {
      var result = { subreddit: "someSubreddit" };
      SubredditsStore.trigger = jest.genMockFn();

      SubredditsAction.storeSubreddits.trigger(result);

      expect(SubredditsStore.data.subreddits).toEqual(result);
      expect(SubredditsStore.trigger).toBeCalledWith(SubredditsStore.data);
    });
  });
});
