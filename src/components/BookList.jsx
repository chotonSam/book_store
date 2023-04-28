import React from "react";
import { useDispatch, useSelector } from "react-redux";
import loading from "../assets/images/load.png";

import { statusChange } from "../redux/filters/actions";
import Book from "./Book";

const BookList = () => {
  const books = useSelector((state) => state.books);
  const filters = useSelector((state) => state.filters);
  console.log(books.length);

  const { status, search } = filters;

  const dispatch = useDispatch();

  const statusHandler = (val) => {
    dispatch(statusChange(val));
  };

  const filterByStatus = (book) => {
    switch (status) {
      case "featured":
        return book.featured;

      default:
        return true;
    }
  };

  const filterBySearch = (book) => {
    const bookName = book.name.toLowerCase();
    const searchLower = search?.toLowerCase();

    if (search) {
      return bookName.includes(searchLower);
    }
    return true;
  };

  return (
    <div className="order-2 xl:-order-1">
      <div className="flex items-center justify-between mb-12">
        <h4 className="mt-2 text-xl font-bold">Book List</h4>

        <div className="flex items-center space-x-4">
          <button
            onClick={() => statusHandler("all")}
            className={`filter-btn ${status === "all" && "active-filter"}`}
            id="filterAll"
          >
            All
          </button>
          <button
            onClick={() => statusHandler("featured")}
            className={`filter-btn ${status === "featured" && "active-filter"}`}
            id="filterFeatured"
          >
            Featured
          </button>
        </div>
      </div>

      {books.length > 0 ? (
        <div className="bookContainer">
          {books

            .filter(filterByStatus)
            .filter(filterBySearch)

            .map((book) => (
              <Book key={book.id} book={book} books={books} />
            ))}
        </div>
      ) : (
        <div className="load">
          <img src={loading} alt="loading" />
        </div>
      )}
    </div>
  );
};

export default BookList;
