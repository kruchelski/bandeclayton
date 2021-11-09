'use strict';

const TweetHelper = require('../helpers/TweetHelper')
const Logger = require('../helpers/Logger')

const filterRecentTweets = (mentions) => {
  try {
    const date = new Date()
    date.setSeconds(0)
    const toDateInMs = date.valueOf()
    date.setMinutes(date.getMinutes() - 1)
    const fromDateInMs = date.valueOf()
    const filteredMentions = mentions.filter(mention => {
      const createDate = new Date(mention.created_at)
      const createDateMs = createDate.valueOf()
      if (createDateMs >= fromDateInMs && createDateMs < toDateInMs) {
        return mention
      }
    })
    return filteredMentions
  } catch (error) {
    Logger.handleLog('error', 'filterRecentTweets', error)
    return []
  }
}

module.exports.handler = async (event, context) => {
  const mentions = await TweetHelper.getMentionTweets()
  const recentMentions = filterRecentTweets(mentions)
  const promises = recentMentions.map(mention => TweetHelper.postTweet(`@${mention.user.screen_name}`))
  await Promise.all(promises)
}
