import _ from 'lodash';
import Book from "./boock";
import React, { useContext } from 'react';
import BooksContext from '../contex/BooksContext';


const BooksList:React.FC = () => {
  const { books, setBooks } = useContext(BooksContext);
  const handleRemoveBook = (id:string) => {
    setBooks(books.filter((book:any) => book.id !== id));
  };
    return (
      <>
      <div className="book-list">
        {!_.isEmpty(books) ? (
          books.map((book:any) => (
            <Book key={book.id} {...book} handleRemoveBook={handleRemoveBook} />
          ))
        ) : (
          <p className="message">No books available. Please add some books.</p>
        )}
      </div>      
      </>

    ) 
  };
  
  export default BooksList;