const request = require('superagent');
const ListingsAction = require('../actions/listings');

function createSubredditListingUrl(name) {
  return 'https://www.reddit.com/r/' + name + '/.json';
}

module.exports = {
  makeGetRequest: function (options, callback) {
    request
      .get(options.url)
      .end(callback);
  },

  getSubredditListings: function (name) {
    const url = createSubredditListingUrl(name);
    this.makeGetRequest({url: url}, this.subredditListingsCallback);
  },

  subredditListingsCallback: function (err, res) {
    if (!err && res.ok) {
      ListingsAction.storeSubredditListings(JSON.parse(res.text).data.children);
    }
  }
};
