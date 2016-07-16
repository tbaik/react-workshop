const React = require('react');
const Reflux = require('reflux');

const ListingsStore = require('../stores/listings');
const ListingsAction = require('../actions/listings');
const Listing = require('../components/listing');
const Loading = require('../components/loading');

module.exports = React.createClass({
  displayName: 'Listings Container',

  mixins: [ Reflux.connect(ListingsStore, 'listings') ],

  componentDidMount: function() {
    ListingsAction.subredditListingsRequested('reactjs');
  },

  render: function() {
    var listings = this.state.listings.listings;

    if (listings === undefined) {
      return <Loading message={"Loading!"} />;
    } else {
      return(
        <table>
          <tbody>
          {
            listings.map(function(item) {
              return (
                <Listing
                  key={item.data.id}
                  title={item.data.title}
                  author={item.data.author}
                  url={item.data.url}
                  score={item.data.score} />
              );
            })
          }
          </tbody>
        </table>
      );
    }
  }
});
