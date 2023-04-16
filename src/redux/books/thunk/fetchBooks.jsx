import { loaded } from "../actions";

const fetchBooks = async (dispatch) => {
  const response = await fetch("https://book-store-json-server-pt5z.onrender.com/books");
  const books = await response.json();

  dispatch(loaded(books));
};

export default fetchBooks;
