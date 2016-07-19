jest.unmock('../application');

const React = require('react');
const ReactDOM = require('react-dom');
const TestUtils = require('react-addons-test-utils');

const Application = require('../application');
const ListingsContainer = require('../listings/container');
const SubredditsContainer = require('../subreddits/container');

describe('Application', function() {
  it('renders SubredditsContainer', function() {
    const container = TestUtils.renderIntoDocument(<Application />);

    const subredditContainer = TestUtils.scryRenderedComponentsWithType(container, SubredditsContainer);

    expect(subredditContainer.length).toBe(1);
  });

  it('renders ListingsContainer', function() {
    const container = TestUtils.renderIntoDocument(<Application />);

    const subredditContainer = TestUtils.scryRenderedComponentsWithType(container, ListingsContainer);

    expect(subredditContainer.length).toBe(1);
  });
});
