jest
  .mock('superagent')
  .unmock('../client');

describe('Client', () => {
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

    var client = require('../client').default;

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
          url: 'https://www.reddit.com/r/reactjs/.json'
        };
        client.makeGetRequest = jest.genMockFn();

        client.getSubredditListings('reactjs');

        expect(client.makeGetRequest).toBeCalledWith(options, client.subredditListingsCallback);
      });
    });
  });
});
