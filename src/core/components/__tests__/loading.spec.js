jest.unmock('../loading');

const React = require('react');
const ReactDOM = require('react-dom');
const TestUtils = require('react-addons-test-utils');

const Loading = require('../loading');

describe('Loading', function() {
  it('displays a loading message', function() {
    var loading = { message: 'someLoadingMessage' };

    const loadingComponent = TestUtils.renderIntoDocument(
      <Loading message={loading.message} />
    );

    const loadingNode = ReactDOM.findDOMNode(loadingComponent);

    expect(loadingNode.textContent).toContain(loading.message);
  });
});
