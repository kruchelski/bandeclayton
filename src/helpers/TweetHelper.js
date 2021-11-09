const shoutHelper = require('./shouts')
const Logger = require('./Logger')
const TwitterClient = require('../config/Twitter')

let attempts = 0

const isGreenTime = (date) => {
  const hour = date.getHours()
  const minutes = date.getMinutes()
  if (hour === 19 && minutes === 20) return true
  return false
}

const getShoutType = (date) => {
  const shoutsType = isGreenTime(date) ? shoutHelper.greenShouts : shoutHelper.shouts
  return shoutsType
}

const generateShout = (emoji = false) => {
  const shoutList = getShoutType(new Date())
  const max = shoutList.length
  const shoutIndex = Math.floor(Math.random() * max)
  let generatedShout = shoutList[shoutIndex]
  if (emoji) {
    const maxEmojiIndex = shoutHelper.fallbackEmojis.length
    const emojiIndex = Math.floor(Math.random() * maxEmojiIndex)
    generatedShout += ` ${shoutHelper.fallbackEmojis[emojiIndex]}`
  }
  Logger.handleLog('info', 'generateShout', `Shout: ${generatedShout}`)
  return generatedShout
}

const postTweet = async (user = '') => {
  try {
    attempts++
    if (attempts > 5) throw new Error('Reached maximum number of attempts')
    let withEmoji = false
    if (attempts > 3) {
      withEmoji = true
    }

    const status = `${user} ${generateShout(withEmoji)}`.trim()
  
    const tweetResponse = await TwitterClient.post(
      'statuses/update',
      { status }
    )
    
    Logger.handleLog('info', 'postTweet', 'Tweet posted! 🦜')
    Logger.handleLog('info', 'postTweet', tweetResponse.text)
  } catch (error) {
    Logger.handleLog('error', 'postTweet', error, attempts)
    if (error && error[0] && error[0].code === 187) {
      await postTweet(user)
    }
  }
}

const getMentionTweets = async () => {
  try {
    return await TwitterClient.get('statuses/mentions_timeline',
      {count: 100}
    )
  } catch (error) {
    Logger.handleLog('error', 'getMentionTweets', error, attempts)
    return []
  } 
}

module.exports = {
  postTweet,
  getMentionTweets
}