import PropTypes from 'prop-types';
import React from 'react';
import { decode } from '../../utils/urlDecoder';

export default class Listing extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <tr className="listing">
        <td className="scoreContainer">
          <p className="score">1234</p>
        </td>
        <td className="titleContainer">
          <p className="title">
            <a href={decode(this.props.url)}>{this.props.title}</a>
          </p>
          <p className="author">
            <i>{this.props.author}</i>
          </p>
        </td>
      </tr>
    );
  }
}

Listing.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired
}
