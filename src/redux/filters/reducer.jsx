import { SEARCHFILTER, STATUSCHANGE } from "./actionTypes";
import initialState from "./initialState";

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case STATUSCHANGE:
      return { status: action.payload };

    case SEARCHFILTER:
      return { search: action.payload };

    default:
      return state;
  }
};

export default reducer;
