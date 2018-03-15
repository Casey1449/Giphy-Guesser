const auth = (
  state = {
    loading: false,
    loaded: true,
    user: null
  },
  action
) => {
  switch (action.type) {
    case "LOG_IN_REQUEST":
      return {
        loading: true,
        loaded: false
      };
    case "LOG_IN_SUCCESS":
      return {
        loading: false,
        loaded: true,
        user: action.result.user
      };
    case "LOG_IN_FAILURE":
      return {
        loading: false,
        loaded: false,
        error: action.error
      };
    case "LOG_OUT_REQUEST":
      return {
        loading: true,
        loaded: false
      };
    case "LOG_OUT_SUCCESS":
      return {
        loading: false,
        loaded: true,
        user: null
      };
    case "LOG_OUT_FAILURE":
      return {
        loading: false,
        loaded: false,
        error: action.error
      };
    default:
      return state;
  }
};

export default auth;
