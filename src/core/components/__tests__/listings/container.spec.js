jest.disableAutomock();

const React = require('react');
const ReactDOM = require('react-dom');
const TestUtils = require('react-addons-test-utils');

const Listing = require('../../listings');
const ListingsAction = require('../../../actions/listings');
const ListingsContainer = require('../../listings/container');
const Loading = require('../../loading');

describe('ListingsContainer', function() {
  describe('Initial state', function() {
    it('renders the Loading component', function() {
      const container = TestUtils.renderIntoDocument(<ListingsContainer />);

      const loading = TestUtils.scryRenderedComponentsWithType(container, Loading);

      expect(loading.length).toBe(1);
    });
  });

  describe('After state change', function() {
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

    beforeEach(function() {
      container = TestUtils.renderIntoDocument(<ListingsContainer />);
    });

    it('renders a Listing component and propagates its state', function() {
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

    it('can render more than one Listing', function() {
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
