jest.disableAutomock();

const React = require('react');
const ReactDOM = require('react-dom');
const TestUtils = require('react-addons-test-utils');

const Listing = require('../../listings/item');
const ListingsContainer = require('../../listings');

describe('ListingsContainer', function() {
  describe('render', function() {
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

    it('renders a Listing component and propagates its props', function() {
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

    it('can render more than one Listing', function() {
      const listings = [ firstListing, secondListing ];

      const container = TestUtils.renderIntoDocument(<ListingsContainer listings={listings} />);

      const listingComponents = TestUtils.scryRenderedComponentsWithType(container, Listing);

      expect(listingComponents.length).toBe(2);
    });
  });
});
