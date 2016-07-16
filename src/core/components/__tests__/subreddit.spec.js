jest.unmock('../subreddit');

import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';
import Subreddit from '../subreddit';

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
});
