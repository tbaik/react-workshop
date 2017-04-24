import React from 'react';
import Listing from '../../listings/item';
import ListingsContainer from '../../listings';
import TestUtils from 'react-dom/test-utils';

describe('ListingsContainer', () => {
  describe('render', () => {
    const firstListing = {
      data: {
        id: 'one',
        title: 'someTitle',
        author: 'someAuthor',
        url: 'someUrl',
        score: 100
      }
    }

    const secondListing = {
      data: {
        id: 'two',
        title: 'anotherTitle',
        author: 'anotherAuthor',
        url: 'anotherUrl',
        score: 90
      }
    }

    it('renders a Listing component and propagates its props', () => {
      const listings = [ firstListing ];

      const container = TestUtils.renderIntoDocument(<ListingsContainer listings={listings} />);

      const listingComponents = TestUtils.scryRenderedComponentsWithType(container, Listing);

      expect(listingComponents.length).toBe(1);

      const props = listingComponents[0].props;

      expect(props.title).toEqual(firstListing.data.title);
      expect(props.author).toEqual(firstListing.data.author);
      expect(props.url).toEqual(firstListing.data.url);
      expect(props.score).toEqual(firstListing.data.score);
    });

    it('can render more than one Listing', () => {
      const listings = [ firstListing, secondListing ];

      const container = TestUtils.renderIntoDocument(<ListingsContainer listings={listings} />);

      const listingComponents = TestUtils.scryRenderedComponentsWithType(container, Listing);

      expect(listingComponents.length).toBe(2);
    });
  });
});
