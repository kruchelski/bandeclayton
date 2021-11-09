'use strict';

const TweetHelper = require('../helpers/TweetHelper')

module.exports.handler = async (event, context) => {
  await TweetHelper.postTweet()
}
