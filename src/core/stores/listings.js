'use strict';

import Reflux from 'reflux';
import ListingsActions from '../actions/listings';

export default Reflux.createStore({
  displayName: 'Listings Store',

  data: {
    listings: {}
  },

  init: function() {
    this.listenTo(ListingsAction.storeSubredditListings, this.setListings.bind(this));
  },

  getInitialState: function() {
    return this.data;
  },

  setListings: function(listings) {
    this.data.listings = listings;
    this.trigger(this.data);
  }
});
