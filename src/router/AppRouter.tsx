
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate  } from 'react-router-dom';

import AddBook from '../componets/AddBook';
import BooksList from '../componets/BooksList';
import Header from '../componets/Header';
import useLocalStorage from '../hooks/useLocalStorage';
import EditBook from '../componets/EditBook';
import BooksContext from '../contex/BooksContext';







const AppRouter = () => {
  const [books, setBooks] = useLocalStorage({ key: 'books', initialValue: [] });
  return (
    <Router>
      <div>
        <Header />
        <div className="main-content">
          <BooksContext.Provider value={{ books, setBooks }}>
          <Routes>
            <Route path="/" element={<BooksList   />} />
            <Route path="/add" element={<AddBook   />}/>
            <Route path="/edit/:id" element={<EditBook   />}/>
            <Route
                path="*"
                element={<Navigate to="/" replace />} />
          </Routes>            
          </BooksContext.Provider>

        </div>
      </div>
    </Router>
  );
};

export default AppRouter;