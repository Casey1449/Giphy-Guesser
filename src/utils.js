//Durstenfeld shuffle algorithm:
export const shuffle = array => {
  let arr = array.slice();
    for (let i = arr.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        let temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
    }
    return arr;
};

export const evaluateTagPositions = tags => (
  tags.map((t, i) => {
    t.isInCorrectPosition = (t.correctIndex === i);
    return t;
  })
);

export const createNewTags = correctAnswers => (
  evaluateTagPositions(
    shuffle(
      correctAnswers.map((w, i) => (
        { word: w,
          correctIndex: i,
          isInCorrectPosition: true }
        )
      )
    )
  )
);
