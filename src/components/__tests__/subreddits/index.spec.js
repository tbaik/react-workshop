import React from 'react';
import Subreddit from '../../subreddits/item';
import SubredditsContainer from '../../subreddits';
import TestUtils from 'react-dom/test-utils';

describe('SubredditsContainer', () => {
  describe('render', () => {
    const firstSubreddit = {
      data: {
        id: 'one',
        display_name: 'someName',
        url: 'someUrl'
      }
    }

    const secondSubreddit = {
      data: {
        id: 'two',
        display_name: 'anotherName',
        url: 'anotherUrl'
      }
    }

    it('renders a Subreddit component and propagates its props', () => {
      const subreddits = [ firstSubreddit ];

      const container = TestUtils.renderIntoDocument(<SubredditsContainer subreddits={subreddits} activeSubreddit={jest.genMockFn()} />);

      const subredditComponents = TestUtils.scryRenderedComponentsWithType(container, Subreddit);

      expect(subredditComponents.length).toBe(1);

      const props = subredditComponents[0].props;

      expect(props.name).toEqual(firstSubreddit.data.display_name);
      expect(props.url).toEqual(firstSubreddit.data.url);
    });

    it('can render more than one Subreddit', () => {
      const subreddits = [ firstSubreddit, secondSubreddit ];

      const container = TestUtils.renderIntoDocument(<SubredditsContainer subreddits={subreddits} activeSubreddit={jest.genMockFn()} />);

      const subredditComponents = TestUtils.scryRenderedComponentsWithType(container, Subreddit);

      expect(subredditComponents.length).toBe(2);
    });
  });
});
