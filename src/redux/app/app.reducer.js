import * as appTypes from "./app.types";

const initialState = {
  loader: false,
};

export const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case appTypes.DISABLE_LOADER:
      return {
        ...state,
        loader: false,
      };
    case appTypes.ENABLE_LOADER:
      return {
        ...state,
        loader: true,
      };
    default:
      return state;
  }
};
