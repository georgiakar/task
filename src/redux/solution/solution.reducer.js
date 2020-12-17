import * as solutionTypes from "./solution.types";

const initialState = {
  terms: [],
  page: {},
};

export const solutionReducer = (state = initialState, action) => {
  switch (action.type) {
    case solutionTypes.SAVE_TERMS:
      return {
        ...state,
        terms: action.payload,
      };
    case solutionTypes.SAVE_PAGE_INFO:
      return {
        ...state,
        page: action.payload,
      };
    default:
      return state;
  }
};
