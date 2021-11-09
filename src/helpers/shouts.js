const possibleChars = ['a', 'e', 'A', 'E', 'o', ' ', 'H', 'I', 'i', 'A', 'h', 'u', ' ', 'O', 'y', 'Y', 'W', 'w', 'A']

const generateShout = () => {
  const characterCount = Math.floor(Math.random() * 100 + 1)
  const max = possibleChars.length
  const shoutChunks = []
  for (let i = 0; i <= characterCount; i++) {
    const charIndex = Math.floor(Math.random() * max)
    shoutChunks.push(possibleChars[charIndex])
  }
  return shoutChunks.join('')
}

const shouts = [
  'AH',
  'AHHHHHHHHHHHHH',
  'AAAAAHHHHHHHHHHHHHHAAAAAHHHHHH',
  'FORA BOLSONARO AAAAAAAAAAHHHHH',
  'eeeeAAAaaaAAAAAAAHHHHHHHHHHHHHHHHH',
  'ah',
  'aaAAAAAaAaaHHHHHHHHHHWWWWWWWWWWwwww',
  'UAAAAaaahahaaaaawwww AAAAAaaaa AAAaAHHHHH',
  'EEeeeewwwwwwwwwwww',
  'WOOAAAAAAAaaaaAAAHHH AAAAAAHHHAHHHH OOOOAAAAHh',
  'CARAIOOOOOOOOOOO AAAAAAA',
  'OOOaaahhhhh',
  'AAAAAAHHHHHHHHHHHHHH FUUUUUUUUUUCKKKK',
  'AAaaaaAaaAAAAAAAOOOOoooOoooOOOHHHHHH',
  'UUUUuuuuuuuAAAAAAAAHHHHHHH AAuuuHHH',
  'AHHHH AHHH AHHH AHHHHHHHHHH',
  'ooooOOOOOAAAaaAAAAAAAAAHHHHHHH',
  'Hhhyyyaaaaaaaaaaaaayaaaaa aYYYAAAAAAA',
  'Yoooaoaoaaaaaa AAAAAHHH',
  'Eeaaaahhhh',
  'AHHHHHHHHHH OUUAAAAAAHHHHHH',
  'bolsonaro vai toma no cu fdp!!!!',
  generateShout(),
  'AAAAHHHHH',
  'AHHHHHHH AHHHHHHHHH AAAAAAAAAAHHHHH AAHHHH',
  '!!!!!!!!!!!!!!',
  '😱😱😱😱😱😱😱😱😱😱😱😱😱😱😱😱😱😱😱',
  '¡¡¡¡¡¡¡¡AH!!!!!!!',
  'EEEEEEEEEEEEEEEWWWWWWWWWWW',
  '🗣🗣🗣🗣🗣',
  'YIKESS!'
]

const greenShouts = [
  'Iiiiiiiiiiihhhhh cuzauummm',
  'IIIIIIIIIHHHHHHHH VAI CAÍ MANO',
  'olha a hora 👀',
  'salve salve',
  'kkkkkk kkkk kk kk kkkk',
  'eita',
  'i was gonna clean my room...',
  'it\'s 4:20 my dudes',
  'SHIiiiiiiiiit'
]

const fallbackEmojis = [
  '😱', '🦜', '🐳,', '🤙', '👀', '🥵', '😠', '🗣', '🙀', '👾', '😾', '👌', '🐣', '🍍', '🎳', '🗜', '🛠', '🩸', '🌀'
]

module.exports = {
  shouts,
  greenShouts,
  fallbackEmojis
}