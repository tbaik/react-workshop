import PropTypes from 'prop-types';
import React from 'react';

export default class Subreddit extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isSelected: false };
  }

  onClick() {
    this.setState({ isSelected: true });
    this.props.activate(this.props.url);
  }

  render() {
    return (
      <li onClick={this.onClick.bind(this)} className={this.state.isSelected ? 'selected' : ''}>
        {this.props.name}
      </li>
    );
  }
}

Subreddit.propTypes = {
  name: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  activate: PropTypes.func.isRequired
}
