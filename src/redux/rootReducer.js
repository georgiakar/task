import { combineReducers } from "redux";
import { appReducer as app } from "./app/app.reducer";
import { solutionReducer as solution } from "./solution/solution.reducer";

export default combineReducers({
  app,
  solution
});