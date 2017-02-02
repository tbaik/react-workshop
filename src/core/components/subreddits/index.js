const React = require('react');
const Reflux = require('reflux');

const Subreddit = require('../../components/subreddits/item');

module.exports = React.createClass({
  displayName: 'Subreddits Container',

  propTypes: {
    subreddits: React.PropTypes.array.isRequired
  },

  renderSubreddits: function(subreddits) {
    return subreddits.map(function(item) {
      return (
        <Subreddit
          key={item.data.id}
          name={item.data.display_name}
          url={item.data.url} />
      );
    });
  },

  render: function() {
    return(
      <div className="navigation">
        <div className="header">Navigation</div>
        <ul>
          { this.renderSubreddits(this.props.subreddits) }
        </ul>
      </div>
    );
  }
});
