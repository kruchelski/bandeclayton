const lineHelper = require('./lines')
const Logger = require('./Logger')
const TwitterClient = require('../config/Twitter')

const getFullLine = () => {
  const fullLineIndex = Math.floor(Math.random() * fullLines.length);
  return lineHelper.fullLines[fullLineIndex]
}

const getGeneratedLine = () => {
  const greetingIndex = Math.floor(Math.random() * lineHelper.greetings.length);
	const mainIndex = Math.floor(Math.random() * lineHelper.mains.length);
  const greeting = lineHelper.greetings[greetingIndex];
  const mainLine = lineHelper.mains[mainIndex];
	const hasGreetingAndMain = Math.floor(Math.random() * 4) < 3;
	if (hasGreetingAndMain) {
		return `${greeting} ${mainLine}`;
	}
	const isMainOnly = Math.floor(Math.random() * 2) !== 0;
  return isMainOnly ? mainLine : greeting;
}

const generateTweet = (emoji = false) => {
  const isFullLine = Math.floor(Math.random() * 2) !== 0;
  let generatedTweet = isFullLine ? getFullLine() : getGeneratedLine();

  if (emoji) {
    const maxEmojiIndex = lineHelper.fallbackEmojis.length;
    const emojiIndex = Math.floor(Math.random() * maxEmojiIndex);
    generatedTweet += ` ${lineHelper.fallbackEmojis[emojiIndex]}`;
  }

  Logger.handleLog('info', 'generateTweet', `Tweet: ${generatedTweet}`);
  return generatedTweet;
}

const postTweet = async (user = '', attempts = 1) => {
  try {
    if (attempts > 5) throw new Error('Reached maximum number of attempts');
    const withEmoji = attempts > 3

    const status = `${user} ${generateTweet(withEmoji)}`.trim();
  
    const tweetResponse = await TwitterClient.post(
      'statuses/update',
      { status }
    );
    
    Logger.handleLog('info', 'postTweet', `Tweet posted! 🦜 Tweet: ${tweetResponse.text}`);
  } catch (error) {
    Logger.handleLog('error', 'postTweet', error, attempts);
    if (error && error[0] && error[0].code === 187) {
      attempts++;
      await postTweet(user, attempts);
    }
  }
}

const getMentionTweets = async () => {
  try {
    return await TwitterClient.get('statuses/mentions_timeline',
      {count: 100}
    );
  } catch (error) {
    Logger.handleLog('error', 'getMentionTweets', error, 0);
    return []
  } 
}

module.exports = {
  postTweet,
  getMentionTweets
}