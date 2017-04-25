import PropTypes from 'prop-types';
import React from 'react';
import Subreddit from './item';

export default class SubredditsContainer extends React.Component {
  renderSubreddits(subreddits) {
    return subreddits.map(item => {
      return (
        <Subreddit
          activate={this.props.setActiveSubreddit}
          key={item.data.id}
          name={item.data.display_name}
          url={item.data.url} />
      );
    });
  }

  render() {
    return(
      <div className="navigation">
        <div className="header">Navigation</div>
        <ul>
          { this.renderSubreddits(this.props.subreddits) }
        </ul>
      </div>
    );
  }
}

SubredditsContainer.propTypes = {
  subreddits: PropTypes.array.isRequired,
  setActiveSubreddit: PropTypes.func.isRequired
}
