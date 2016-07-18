'use strict';

const Reflux = require('reflux');
const ListingsAction = require('../actions/listings');
const Client = require('../utils/client');

module.exports = Reflux.createStore({
  displayName: 'Listings Store',

  data: {},

  init: function() {
    this.listenTo(ListingsAction.subredditListingsRequested, this.getListings);
    this.listenTo(ListingsAction.storeSubredditListings, this.setListings);
  },

  getInitialState: function() {
    return this.data;
  },

  getListings: function(subreddit) {
    Client.getSubredditListings(subreddit);
  },

  setListings: function(listings) {
    this.data.listings = listings;
    this.trigger(this.data);
  }
});
