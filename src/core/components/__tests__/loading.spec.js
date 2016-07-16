jest.unmock('../loading');

import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';
import Loading from '../loading';

describe('Loading', () => {
  it('displays a loading message', () => {
    var loading = { message: 'someLoadingMessage' };

    const loadingComponent = TestUtils.renderIntoDocument(
      <Loading message={loading.message} />
    );

    const loadingNode = ReactDOM.findDOMNode(loadingComponent);

    expect(loadingNode.textContent).toContain(loading.message);
  });
});
