jest.disableAutomock();

const React = require('react');
const ReactDOM = require('react-dom');
const TestUtils = require('react-addons-test-utils');

const ListingsAction = require('../../../actions/listings');
const Subreddit = require('../../subreddits/item');

describe('Subreddit', function() {
  it('displays its name', function() {
    const subreddit = {
      id: 'someKey',
      name: 'someName',
      url: 'someUrl'
    };

    const subredditComponent = TestUtils.renderIntoDocument(
      <Subreddit
        name={subreddit.name}
        url={subreddit.url} />
    );

    const subredditNode = ReactDOM.findDOMNode(subredditComponent);

    expect(subredditNode.textContent).toContain(subreddit.name);
  });

  describe('onClick', function() {
    it('triggers the ListingsAction requestSubredditListings', function() {
      const subreddit = {
        id: 'someKey',
        name: 'someName',
        url: 'someUrl'
      };

      const subredditComponent = TestUtils.renderIntoDocument(
        <Subreddit
          name={subreddit.name}
          url={subreddit.url} />
      );

      const subredditNode = ReactDOM.findDOMNode(subredditComponent);

      ListingsAction.requestSubredditListings = jest.genMockFn();

      TestUtils.Simulate.click(subredditNode);

      expect(ListingsAction.requestSubredditListings).toBeCalledWith(subreddit.url);
    });
  });
});
