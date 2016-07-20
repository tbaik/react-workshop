jest.disableAutomock();

const React = require('react');
const ReactDOM = require('react-dom');
const TestUtils = require('react-addons-test-utils');

const Application = require('../application');
const ListingsContainer = require('../listings/container');
const SubredditsAction = require('../../actions/subreddits');
const SubredditsContainer = require('../subreddits/container');

describe('Application', function() {
  describe('componentDidMount', function() {
    it('triggers action to request popular subreddits', function() {
      SubredditsAction.requestPopularSubreddits = jest.genMockFn();

      TestUtils.renderIntoDocument(<Application />);

      expect(SubredditsAction.requestPopularSubreddits).toBeCalled();
    });
  });

  describe('render', function() {
    var container;

    beforeEach(function() {
      const listings = { listings: [] };
      const subreddits = { subreddits: [] };

      container = TestUtils.renderIntoDocument(<Application />);
      container.setState({
        listings: listings,
        subreddits: subreddits
      });

    });

    it('renders SubredditsContainer', function() {
      const subredditContainer = TestUtils.scryRenderedComponentsWithType(container, SubredditsContainer);

      expect(subredditContainer.length).toBe(1);
    });

    it('renders ListingsContainer', function() {
      const subredditContainer = TestUtils.scryRenderedComponentsWithType(container, ListingsContainer);

      expect(subredditContainer.length).toBe(1);
    });
  });
});
