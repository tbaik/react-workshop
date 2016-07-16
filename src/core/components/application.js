const React = require('react');

const SubredditsContainer = require('../components/subredditsContainer');
const ListingsContainer = require('../components/listingsContainer');

module.exports = React.createClass({
  displayName: 'Application',

  render: function() {
    return(
      <div>
        <SubredditsContainer />
        <ListingsContainer />
      </div>
    );
  }
});
