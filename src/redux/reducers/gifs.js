const gifs = (state = {}, action) => {
  switch (action.type) {
    case "GIFS_LOAD_REQUEST":
      return {
        loading: true,
        loaded: false
      };
    case "GIFS_LOAD_SUCCESS":
      return {
        loading: false,
        loaded: true,
        results: action.result
      };
    case "GIFS_LOAD_FAILURE":
      return {
        loading: false,
        loaded: false,
        error: action.error
      };
    default:
      return state;
  }
};

export default gifs;
