export default function clientMiddleware() {
  return ({ dispatch, getState }) => next => action => {
    if (typeof action === "function") {
      return action(dispatch, getState);
    }

    const { promise, type, ...rest } = action;

    if (!promise) {
      return next(action);
    }
    const REQUEST = `${type}_REQUEST`;
    const SUCCESS = `${type}_SUCCESS`;
    const FAILURE = `${type}_FAILURE`;

    next({ ...rest, type: REQUEST });

    return promise.then(
      result => next({ ...rest, result, type: SUCCESS }),
      error => next({ ...rest, error, type: FAILURE })
    );
  };
}
