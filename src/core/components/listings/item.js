const React = require('react');

const UrlDecoder = require('../../utils/urlDecoder');

module.exports = React.createClass({
  displayName: 'Listing Component',

  propTypes: {
    title: React.PropTypes.string.isRequired,
    author: React.PropTypes.string.isRequired,
    url: React.PropTypes.string.isRequired,
    score: React.PropTypes.number.isRequired
  },

  render: function() {
    return (
      <tr className="listing" id={this.props.key}>
        <td className="scoreContainer">
          <p className="score">{this.props.score}</p>
        </td>
        <td className="titleContainer">
          <p className="title">
            <a href={UrlDecoder.decodeAmpersand(this.props.url)}>{this.props.title}</a>
          </p>
          <p className="author">
            <i>{this.props.author}</i>
          </p>
        </td>
      </tr>
    );
  }
});
