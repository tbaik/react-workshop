jest.disableAutomock();

import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';

import Subreddit from '../subreddit';
import ListingsAction from '../../actions/listings';

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
    it('triggers the ListingsAction subredditListingsRequested', () => {
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

    ListingsAction.subredditListingsRequested = jest.genMockFn();

    TestUtils.Simulate.click(subredditNode);

    expect(ListingsAction.subredditListingsRequested).toBeCalledWith(subreddit.url);
    });
  });
});
