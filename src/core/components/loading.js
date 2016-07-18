const React = require('react');

module.exports = React.createClass({
  displayName: 'Loading Component',

  propTypes: {
    message: React.PropTypes.string.isRequired
  },

  render: function() {
    return (
      <p className="title">{this.props.message}</p>
    );
  }
});
