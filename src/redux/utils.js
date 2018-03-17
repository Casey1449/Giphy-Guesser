// 'tagsArr' here is the initial value that can be provided as a second argument to 'reduce':
const pipe = (...functions) => tagsArr =>
  functions.reduce((value, func) => func(value), tagsArr);

const makeTagObjects = wordsArr =>
  wordsArr.map((w, i) => ({
    word: w,
    correctIndex: i,
    isInCorrectPosition: true
  }));

//Durstenfeld shuffle algorithm:
const shuffleTags = array => {
  let arr = array.slice();
  for (let i = arr.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
  }
  return arr;
};

export const evaluateTagPositions = tagsArr =>
  tagsArr.map((t, i) => ({ ...t, isInCorrectPosition: t.correctIndex === i }));

export const createNewTags = pipe(
  makeTagObjects,
  shuffleTags,
  evaluateTagPositions
);
