jest.disableAutomock();

const React = require('react');
const ReactDOM = require('react-dom');
const TestUtils = require('react-addons-test-utils');

const Subreddit = require('../../subreddits/item');
const SubredditsContainer = require('../../subreddits');

describe('SubredditsContainer', function() {
  describe('render', function() {
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

    it('renders a Subreddit component and propagates its props', function() {
      const subreddits = [ firstSubreddit ];

      const container = TestUtils.renderIntoDocument(<SubredditsContainer subreddits={subreddits} />);

      const subredditComponents = TestUtils.scryRenderedComponentsWithType(container, Subreddit);

      expect(subredditComponents.length).toBe(1);

      const props = subredditComponents[0].props;

      expect(props.name).toEqual(firstSubreddit.data.display_name);
      expect(props.url).toEqual(firstSubreddit.data.url);
    });

    it('can render more than one Subreddit', function() {
      const subreddits = [ firstSubreddit, secondSubreddit ];

      const container = TestUtils.renderIntoDocument(<SubredditsContainer subreddits={subreddits} />);

      const subredditComponents = TestUtils.scryRenderedComponentsWithType(container, Subreddit);

      expect(subredditComponents.length).toBe(2);
    });
  });
});
