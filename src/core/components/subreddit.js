const React = require('react');

import ListingsAction from '../actions/listings';

module.exports = React.createClass({
  displayName: 'Subreddit Component',

  propTypes: {
    name: React.PropTypes.string.isRequired,
    url: React.PropTypes.string.isRequired
  },

  onClick: function() {
    ListingsAction.subredditListingsRequested(this.props.url);
  },

  render: function() {
    return (
      <li onClick={this.onClick}>
        {this.props.name}
      </li>
    );
  }
});
