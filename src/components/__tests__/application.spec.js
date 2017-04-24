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

      expect(client.getPopularSubreddits).toBeCalled();
    });
  });

  describe('render', () => {
    var container;

    beforeEach(() => {
      const listings = [];
      const subreddits = [];

      container = TestUtils.renderIntoDocument(<Application />);
      container.setState({
        listings: listings,
        subreddits: subreddits
      });

    });

    it('renders SubredditsContainer', () => {
      const subredditContainer = TestUtils.scryRenderedComponentsWithType(container, SubredditsContainer);

      expect(subredditContainer.length).toBe(1);
    });

    it('renders ListingsContainer', () => {
      const subredditContainer = TestUtils.scryRenderedComponentsWithType(container, ListingsContainer);

      expect(subredditContainer.length).toBe(1);
    });
  });
});
