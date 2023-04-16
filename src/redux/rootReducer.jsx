import { combineReducers } from "redux";
import booksReducer from "./books/reducer";
import statusReducer from "./filters/reducer";

const rootReducer = combineReducers({
  books: booksReducer,
  filters: statusReducer,
});

export default rootReducer;
