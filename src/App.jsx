import { useState } from "react";
import { Provider } from "react-redux";
import "./App.css";
import BookList from "./components/BookList";
import Form from "./components/Form";
import Header from "./components/Header";
import formContext from "./contexts/formContext";
import store from "./redux/store";

function App() {
  const [bookData, setBookData] = useState({
    name: "",
    author: "",
    thumbnail: "",
    price: "",
    rating: "",
    featured: false,
  });
  const [editId, SeteditId] = useState(null);

  return (
    <div className="App">
      <formContext.Provider
        value={{
          bookData,
          setBookData,
          editId,
          SeteditId,
        }}
      >
        <Provider store={store}>
          <Header />
          <main className="py-12 2xl:px-6">
            <div className="container grid xl:grid-cols-[auto_350px] 2xl:grid-cols-[auto_400px] gap-4 2xl:gap-8">
              <BookList />
              <Form />
            </div>
          </main>
        </Provider>
      </formContext.Provider>
    </div>
  );
}

export default App;
