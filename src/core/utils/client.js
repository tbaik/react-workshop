const request = require('superagent');

const ListingsAction = require('../actions/listings');
const SubredditsAction = require('../actions/subreddits');

const REDDIT_HOST = 'https://www.reddit.com';

function createSubredditListingUrl(url) {
  return REDDIT_HOST + url + '.json';
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
  },

  getPopularSubreddits: function () {
    const url = REDDIT_HOST + '/subreddits/popular.json';
    this.makeGetRequest({url: url}, this.subredditsCallback);
  },

  subredditsCallback: function(err, res) {
    if (!err && res.ok) {
      SubredditsAction.storeSubreddits(JSON.parse(res.text).data.children);
    }
  }
};
