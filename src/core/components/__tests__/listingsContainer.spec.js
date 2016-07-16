jest.disableAutomock();

import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';

import ListingsContainer from '../listingsContainer';
import Listing from '../listing';
import Loading from '../loading';
import ListingsAction from '../../actions/listings';

describe('ListingsContainer', () => {
  describe('Initial state', () => {
    it('renders the Loading component', () => {
      const container = TestUtils.renderIntoDocument(<ListingsContainer />);

      const loading = TestUtils.scryRenderedComponentsWithType(container, Loading);

      expect(loading.length).toBe(1);
    });
  });

  describe('componentDidMount', () => {
    it('triggers action to request subreddit listings', () => {
        ListingsAction.subredditListingsRequested = jest.genMockFn();

        TestUtils.renderIntoDocument(<ListingsContainer />);

        expect(ListingsAction.subredditListingsRequested).toBeCalledWith('reactjs');
    });
  });

  describe('After state change', () => {
    const firstListing = {
      id: 'one',
      title: 'someTitle',
      author: 'someAuthor',
      url: 'someUrl',
      score: 100
    }

    const secondListing = {
      id: 'two',
      title: 'anotherTitle',
      author: 'anotherAuthor',
      url: 'anotherUrl',
      score: 90
    }

    var container;

    beforeEach(() => {
      container = TestUtils.renderIntoDocument(<ListingsContainer />);
    });

    it('renders a Listing component and propagates its state', () => {
      const listings = {
        listings: [ { data: firstListing } ]
      };

      container.setState({ listings: listings });

      const listingComponents = TestUtils.scryRenderedComponentsWithType(container, Listing);

      expect(listingComponents.length).toBe(1);

      const props = listingComponents[0].props;

      expect(props.title).toEqual(firstListing.title);
      expect(props.author).toEqual(firstListing.author);
      expect(props.url).toEqual(firstListing.url);
      expect(props.score).toEqual(firstListing.score);
    });

    it('can render more than one Listing', () => {
      const listings = {
        listings: [
          { data: firstListing },
          { data: secondListing },
        ]
      };

      container.setState({ listings: listings });

      const listingComponents = TestUtils.scryRenderedComponentsWithType(container, Listing);

      expect(listingComponents.length).toBe(2);
    });
  });
});
