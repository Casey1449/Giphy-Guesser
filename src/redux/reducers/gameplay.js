const gameplayConfig = {
  isActive: true,
  lastRound: 3,
  currentRound: 0,
  answersSubmitted: false
};

const gameplay = (state = gameplayConfig, action) => {
  switch (action.type) {
    case "SUBMIT":
      const isGameOver = state.currentRound === state.lastRound;
      return {
        ...state,
        isActive: !isGameOver,
        answersSubmitted: true
      };
    case "START_NEXT_ROUND":
      return {
        ...state,
        currentRound: state.currentRound + 1,
        answersSubmitted: false
      };
    case "START_NEW_GAME":
      return {
        ...gameplayConfig
      };

    default:
      return state;
  }
};

export default gameplay;
