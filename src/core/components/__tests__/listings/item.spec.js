jest.unmock('../../listings/item');

const React = require('react');
const ReactDOM = require('react-dom');
const TestUtils = require('react-addons-test-utils');

const Listing = require('../../listings/item');

describe('Listing', () => {
  it('displays the title, author, and score of a given listing', () => {
    var listing = {
      id: 'someKey',
      title: 'someTitle',
      author: 'someone',
      url: 'someUrl',
      score: 10
    };

    const listingComponent = TestUtils.renderIntoDocument(
      <table>
        <tbody>
          <Listing
            title={listing.title}
            author={listing.author}
            url={listing.url}
            score={listing.score} />
        </tbody>
      </table>
    );

    const listingNode = ReactDOM.findDOMNode(listingComponent);

    expect(listingNode.textContent).toContain(listing.title);
    expect(listingNode.textContent).toContain(listing.author);
    expect(listingNode.textContent).toContain(listing.score);
  });
});
