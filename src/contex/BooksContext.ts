import {createContext} from 'react';

interface BooksContextProps {
    books: string[];
    setBooks: Function
  }



const BooksContext = createContext<BooksContextProps>({
    books: [],
  setBooks: () => {},
});

export default BooksContext;