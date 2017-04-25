import React from 'react';
import ReactDOM from 'react-dom';
import Application from '../application';
import ListingsContainer from '../listings';
import SubredditsContainer from '../subreddits';
import TestUtils from 'react-dom/test-utils';
import * as client from '../../utils/client';

describe('Application', () => {
  describe('componentDidMount', () => {
    it('triggers action to request popular subreddits', () => {
      client.getPopularSubreddits = jest.genMockFn();

      TestUtils.renderIntoDocument(<Application />);

      expect(client.getPopularSubreddits).toBeCalledWith(expect.any(Function));
    });
  });

  describe('render', () => {
    var container;
    const listings = [];
    const subreddits = [];

    beforeEach(() => {
      container = TestUtils.renderIntoDocument(<Application />);
      container.setState({
        listings: listings,
        subreddits: subreddits
      });
    });

    it('renders SubredditsContainer', () => {
      const subredditContainer = TestUtils.findRenderedComponentWithType(container, SubredditsContainer);

      expect(subredditContainer.props.subreddits).toBe(subreddits);
    });

    it('setActiveSubreddit calls getListings', () => {
      client.getListings = jest.genMockFn();

      const subredditContainer = TestUtils.findRenderedComponentWithType(container, SubredditsContainer);

      subredditContainer.props.setActiveSubreddit('some subreddit');

      expect(client.getListings).toBeCalledWith('some subreddit', expect.any(Function));
    });

    it('renders ListingsContainer', () => {
      const listingsContainer = TestUtils.findRenderedComponentWithType(container, ListingsContainer);

      expect(listingsContainer.props.listings).toBe(listings);
    });
  });
});
