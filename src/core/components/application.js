const React = require('react');
const Reflux = require('reflux');

const ListingsAction = require('../actions/listings');
const ListingsContainer = require('../components/listings/index');
const ListingsStore = require('../stores/listings');
const SubredditsAction = require('../actions/subreddits');
const SubredditsContainer = require('../components/subreddits/index');
const SubredditsStore = require('../stores/subreddits');

module.exports = React.createClass({
  displayName: 'Application',

  mixins: [
    Reflux.connect(ListingsStore, 'listings'),
    Reflux.connect(SubredditsStore, 'subreddits')
  ],

  componentDidMount: function() {
    SubredditsAction.requestPopularSubreddits();
  },

  render: function() {
    var subreddits = this.state.subreddits.subreddits || [];
    var listings = this.state.listings.listings || [];

    return(
      <div>
        <SubredditsContainer subreddits={subreddits} />
        <ListingsContainer listings={listings} />
      </div>
    );
  }
});
