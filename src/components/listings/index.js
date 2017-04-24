import PropTypes from 'prop-types';
import React from 'react';
import Listing from './item';

export default class ListingsContainer extends React.Component {
  constructor(props) {
    super(props);
  }

  renderListings(listings) {
    return listings.map(listing => {
      return (
        <Listing
          key={listing.data.id}
          title={listing.data.title}
          author={listing.data.author}
          url={listing.data.url} />
      );
    });
  }

  render() {
    return(
      <table>
        <tbody>
          { this.renderListings(this.props.listings) }
        </tbody>
      </table>
    );
  }
}

ListingsContainer.propTypes = {
  listings: PropTypes.array.isRequired
}
