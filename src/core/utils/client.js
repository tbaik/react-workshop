import request from 'superagent';

function createSubredditListingUrl(name) {
  return 'https://www.reddit.com/r/' + name + '/.json';
}

var client = {
  makeGetRequest: function (options, callback) {
    request
      .get(options.url)
      .end(callback);
  },

  getSubredditListings: function (name) {
    const url = createSubredditListingUrl(name);
    this.makeGetRequest({url: url}, this.subredditListingsCallback);
  },

  subredditListingsCallback: function () {
  }
};

export default client;
