const countWords = (sentence) => {

  if(sentence.length === 0) {
    return {}
  }

  const wordBase = {};

  const wordsCollection = sentence.toLowerCase().split(' ');

  wordsCollection.map( item => {
    if(wordBase.hasOwnProperty(item)) {
      wordBase[item] += 1;
    } else {
      wordBase[item] = 1;
    }
  })

  return wordBase
  // console.log(wordBase);
}

const text1 = 'one two free one OnE';
console.log(countWords(text1));