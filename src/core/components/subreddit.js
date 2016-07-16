const React = require('react');

module.exports = React.createClass({
  displayName: 'Subreddit Component',

  propTypes: {
    name: React.PropTypes.string.isRequired,
    url: React.PropTypes.string.isRequired
  },

  render: function() {
    return (
      <li>
        {this.props.name}
      </li>
    );
  }
});
