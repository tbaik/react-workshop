jest.disableAutomock();

const React = require('react');
const ReactDOM = require('react-dom');
const TestUtils = require('react-addons-test-utils');

const Loading = require('../../loading');
const Subreddit = require('../../subreddits');
const SubredditsAction = require('../../../actions/subreddits');
const SubredditsContainer = require('../../subreddits/container');

describe('SubredditsContainer', function() {
  describe('Initial state', function() {
    it('renders the Loading component', function() {
      const container = TestUtils.renderIntoDocument(<SubredditsContainer />);

      const loading = TestUtils.scryRenderedComponentsWithType(container, Loading);

      expect(loading.length).toBe(1);
    });
  });

  describe('componentDidMount', function() {
    it('triggers action to request popular subreddits', function() {
        SubredditsAction.requestPopularSubreddits = jest.genMockFn();

        TestUtils.renderIntoDocument(<SubredditsContainer />);

        expect(SubredditsAction.requestPopularSubreddits).toBeCalled();
    });
  });

  describe('After state change', function() {
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

    beforeEach(function() {
      container = TestUtils.renderIntoDocument(<SubredditsContainer />);
    });

    it('renders a Subreddit component and propagates its state', function() {
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

    it('can render more than one Subreddit', function() {
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
