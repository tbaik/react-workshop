import React from 'react';
import ReactDOM from 'react-dom';
import Subreddit from '../../subreddits/item';
import TestUtils from 'react-dom/test-utils';

describe('Subreddit', () => {
  it('displays its name', () => {
    const subreddit = {
      id: 'someKey',
      name: 'someName',
      url: 'someUrl'
    };

    const subredditComponent = TestUtils.renderIntoDocument(
      <Subreddit
        activate={jest.genMockFn()}
        name={subreddit.name}
        url={subreddit.url} />
    );

    const subredditNode = ReactDOM.findDOMNode(subredditComponent);

    expect(subredditNode.textContent).toContain(subreddit.name);
  });

  describe('onClick', () => {
    it('triggers the activate function with the subreddit url', () => {
      const subreddit = {
        id: 'someKey',
        name: 'someName',
        url: 'someUrl'
      };

      const activate = jest.genMockFn();

      const subredditComponent = TestUtils.renderIntoDocument(
        <Subreddit
          activate={activate}
          name={subreddit.name}
          url={subreddit.url} />
      );

      const subredditNode = ReactDOM.findDOMNode(subredditComponent);

      TestUtils.Simulate.click(subredditNode);

      expect(activate).toBeCalledWith(subreddit.url);
    });
  });
});
