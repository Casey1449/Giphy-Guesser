export const submitAnswers = () => {
  return {
    type: 'SUBMIT_ANSWERS'
  };
};

export const updateScore = score => {
  return {
    type: 'UPDATE_SCORE',
    currentRoundScore: score
  };
};

export const startNextRound = (newWords, newTags) => {
  return {
    type: 'START_NEXT_ROUND',
    newWords,
    newTags
  };
};

export const updateTags = (oldIndex, newIndex) => {
  return {
    type: 'UPDATE_TAGS',
    oldIndex,
    newIndex
  };
};
