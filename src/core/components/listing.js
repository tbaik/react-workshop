import React from 'react';

export default class Listing extends React.Component {
  render() {
    return (
      <div>
      {this.props.title} - {this.props.score}
      </div>
    );
  }
}

Listing.propTypes = {
  title: React.PropTypes.string.isRequired,
  score: React.PropTypes.number.isRequired
};

