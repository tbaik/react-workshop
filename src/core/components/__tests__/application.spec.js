jest.unmock('../application');

import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';

import Application from '../application';
import SubredditsContainer from '../subredditsContainer';
import ListingsContainer from '../listingsContainer';

describe('Application', () => {
  it('renders SubredditsContainer', () => {
    const container = TestUtils.renderIntoDocument(<Application />);

    const subredditContainer = TestUtils.scryRenderedComponentsWithType(container, SubredditsContainer);

    expect(subredditContainer.length).toBe(1);
  });

  it('renders ListingsContainer', () => {
    const container = TestUtils.renderIntoDocument(<Application />);

    const subredditContainer = TestUtils.scryRenderedComponentsWithType(container, ListingsContainer);

    expect(subredditContainer.length).toBe(1);
  });
});
