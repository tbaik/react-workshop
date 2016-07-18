jest.disableAutomock();

import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';

import Subreddit from '../../subreddits';
import ListingsAction from '../../../actions/listings';

describe('Subreddit', () => {
  it('displays its name', () => {
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

  describe('onClick', () => {
    it('triggers the ListingsAction requestSubredditListings', () => {
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
