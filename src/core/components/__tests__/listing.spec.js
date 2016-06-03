jest.unmock('../listing');

import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';
import Listing from '../listing';

describe('Listing', () => {
  it('displays the title and score of a given listing', () => {
    const listing = TestUtils.renderIntoDocument(
      <Listing title='React is super awesome!' score={12} />
    );

    const listingNode = ReactDOM.findDOMNode(listing);

    expect(listingNode.textContent).toEqual('React is super awesome! - 12');
  });
});
