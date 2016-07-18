const React = require('react');

const SubredditsContainer = require('../components/subreddits/container');
const ListingsContainer = require('../components/listings/container');

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
