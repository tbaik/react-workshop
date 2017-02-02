const React = require('react');
const Reflux = require('reflux');

const Listing = require('../../components/listings/item');

module.exports = React.createClass({
  displayName: 'Listings Container',

  propTypes: {
    listings: React.PropTypes.array.isRequired
  },

  renderListings: function(listings) {
    return listings.map(function(item) {
      return (
        <Listing
          key={item.data.id}
          title={item.data.title}
          author={item.data.author}
          url={item.data.url}
          score={item.data.score} />
      );
    })
  },

  render: function() {
    return(
      <table>
        <tbody>
          { this.renderListings(this.props.listings) }
        </tbody>
      </table>
    );
  }
});
