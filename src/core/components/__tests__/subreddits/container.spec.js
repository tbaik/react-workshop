jest.disableAutomock();

import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';

import SubredditsContainer from '../../subreddits/container';
import Subreddit from '../../subreddits';
import Loading from '../../loading';
import SubredditsAction from '../../../actions/subreddits';

describe('SubredditsContainer', () => {
  describe('Initial state', () => {
    it('renders the Loading component', () => {
      const container = TestUtils.renderIntoDocument(<SubredditsContainer />);

      const loading = TestUtils.scryRenderedComponentsWithType(container, Loading);

      expect(loading.length).toBe(1);
    });
  });

  describe('componentDidMount', () => {
    it('triggers action to request popular subreddits', () => {
        SubredditsAction.requestPopularSubreddits = jest.genMockFn();

        TestUtils.renderIntoDocument(<SubredditsContainer />);

        expect(SubredditsAction.requestPopularSubreddits).toBeCalled();
    });
  });

  describe('After state change', () => {
    const firstSubreddit = {
      id: 'one',
      display_name: 'someName',
      url: 'someUrl'
    }

    const secondSubreddit = {
      id: 'two',
      display_name: 'anotherName',
      url: 'anotherUrl'
    }

    var container;

    beforeEach(() => {
      container = TestUtils.renderIntoDocument(<SubredditsContainer />);
    });

    it('renders a Subreddit component and propagates its state', () => {
      const subreddits = {
        subreddits: [ { data: firstSubreddit } ]
      };

      container.setState({ subreddits: subreddits });

      const subredditComponents = TestUtils.scryRenderedComponentsWithType(container, Subreddit);

      expect(subredditComponents.length).toBe(1);

      const props = subredditComponents[0].props;

      expect(props.name).toEqual(firstSubreddit.display_name);
      expect(props.url).toEqual(firstSubreddit.url);
    });

    it('can render more than one Subreddit', () => {
      const subreddits = {
        subreddits: [
          { data: firstSubreddit },
          { data: secondSubreddit },
        ]
      };

      container.setState({ subreddits: subreddits });

      const subredditComponents = TestUtils.scryRenderedComponentsWithType(container, Subreddit);

      expect(subredditComponents.length).toBe(2);
    });
  });
});
