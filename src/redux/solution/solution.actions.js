import * as solutionTypes from "./solution.types";
import { getTermsByPageSize } from "../../utils/services";
import { enableLoader, disableLoader } from "../app/app.actions";

export const saveTerms = (data) => ({
  type: solutionTypes.SAVE_TERMS,
  payload: data,
});

export const savePageInfo = (data) => ({
  type: solutionTypes.SAVE_PAGE_INFO,
  payload: data,
});

export const fetchTerms = (page, size) => async (dispatch) => {
  dispatch(enableLoader());
  try {
    const response = await getTermsByPageSize(page, size);
    const terms = response.data?._embedded?.terms? response.data._embedded.terms: []
    dispatch(saveTerms(terms));      
    dispatch(savePageInfo(response.data.page));
  } catch (err) {
    console.log(err);
  } finally {
    dispatch(disableLoader());
  }
};
