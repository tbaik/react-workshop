jest
  .mock('superagent')
  .dontMock('reflux')
  .dontMock('../client');

const ListingsAction = require('../../actions/listings');
const SubredditsAction = require('../../actions/subreddits');

describe('Client', function() {
  describe('superagent requests', function() {
    var request = {
      get: jest.genMockFunction().mockImplementation(function() {
        return this;
      }),
      end: jest.genMockFunction().mockImplementation(function(callback) {
        callback();
      })
    };
    jest.setMock('superagent', request);

    var client = require('../client');

    var callback = jest.genMockFunction();

    describe('makeGetRequest', function() {
      it('makes a GET request with superagent', function() {
        var options = {
          url: '/'
        };

        client.makeGetRequest(options, callback);

        expect(request.get).toBeCalledWith(options.url);
        expect(request.end).toBeCalledWith(callback);
      });
    });

    describe('getSubredditListings', function() {
      it('calls makeGetRequest with a url for a specific subreddit listing', function() {
        var options = {
          url: 'https://www.reddit.com/r/reactjs.json'
        };
        client.makeGetRequest = jest.genMockFn();

        client.getSubredditListings('/r/reactjs');

        expect(client.makeGetRequest).toBeCalledWith(options, client.subredditListingsCallback);
      });
    });

    describe('subredditListingsCallback', function() {
      it('calls the storeSubredditListings action with the listings data', function() {
        var response = {
          text: '{"data": {"children": ["listing1"]}}',
          ok: true
        };
        ListingsAction.storeSubredditListings = jest.genMockFn();

        client.subredditListingsCallback(null, response);

        expect(ListingsAction.storeSubredditListings).toBeCalledWith(["listing1"]);
      });
    });

    describe('getPopularSubreddits', function() {
      it('calls makeGetRequest with a url to retrieve the current popular subreddits', function() {
        var options = {
          url: 'https://www.reddit.com/subreddits/popular.json'
        };

        client.makeGetRequest = jest.genMockFn();

        client.getPopularSubreddits();

        expect(client.makeGetRequest).toBeCalledWith(options, client.subredditsCallback);
      });
    });

    describe('subredditsCallback', function() {
      it('calls the storeSubreddits action with the subreddits data', function() {
        var response = {
          text: '{"data": {"children": ["subreddit1"]}}',
          ok: true
        };

        SubredditsAction.storeSubreddits = jest.genMockFn();

        client.subredditsCallback(null, response);

        expect(SubredditsAction.storeSubreddits).toBeCalledWith(["subreddit1"]);
      });
    });
  });
});
