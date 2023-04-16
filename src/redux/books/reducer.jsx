import { ADD, EDIT, LOADED, REMOVE } from "./actionTypes";
import initialState from "./initialState";

const nextTodoId = (todos) => {
  const maxId = todos.reduce((maxId, todo) => Math.max(todo.id, maxId), -1);
  return maxId + 1;
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case LOADED:
      return action.payload;

    case ADD:
      return [
        ...state,
        {
          ...action.payload,
          id: nextTodoId(state),
        },
      ];

    case EDIT:
      return state.map((el) => {
        if (el.id === action.payload.id) {
          return action.payload.books;
        }
        return el;
      });

    case REMOVE:
      return state.filter((book) => book.id !== action.payload);

    default:
      return state;
  }
};

export default reducer;
