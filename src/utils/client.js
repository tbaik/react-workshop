import request from 'superagent';

const REDDIT_HOST = 'https://www.reddit.com';

function getPopularSubreddits(callback) {
  request.get(`${REDDIT_HOST}/subreddits/popular.json`).end(callback);
}

function getListings(subreddit, callback) {
  request.get(`${REDDIT_HOST}${subreddit}.json`).end(callback);
}

export { getPopularSubreddits, getListings }
