import React from 'react';
import ListingsContainer from './listings';
import SubredditsContainer from './subreddits';
import { getPopularSubreddits, getListings } from '../utils/client';

export default class Application extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeSubreddit: '',
      subreddits: [],
      listings: []
    };
  }

  componentDidMount() {
    getPopularSubreddits((err, res) => {
      this.setState({ subreddits: JSON.parse(res.text).data.children });
    });
  }

  setActiveSubreddit(subreddit) {
    getListings(subreddit, (err, res) => {
      this.setState({ listings: JSON.parse(res.text).data.children });
    });
  }

  render() {
    return(
      <div>
        <SubredditsContainer
          subreddits={this.state.subreddits}
          setActiveSubreddit={this.setActiveSubreddit.bind(this)} />
        <ListingsContainer listings={this.state.listings} />
      </div>
    );
  }
}
