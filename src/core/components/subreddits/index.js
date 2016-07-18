const React = require('react');

import ListingsAction from '../../actions/listings';

module.exports = React.createClass({
  displayName: 'Subreddit Component',

  propTypes: {
    name: React.PropTypes.string.isRequired,
    url: React.PropTypes.string.isRequired
  },

  getInitialState: function() {
    return { isSelected: false };
  },

  onClick: function() {
    this.setState({ isSelected: true });
    ListingsAction.subredditListingsRequested(this.props.url);
  },

  render: function() {
    return (
      <li onClick={this.onClick} className={this.state.isSelected ? 'selected' : ''}>
        {this.props.name}
      </li>
    );
  }
});
