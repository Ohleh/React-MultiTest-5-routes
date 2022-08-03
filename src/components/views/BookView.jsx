import { useEffect, useState } from 'react';
// import { Link, useRouteMatch } from 'react-router-dom';
import { Link, Route } from 'react-router-dom';
import * as fetchBookshelf from '../services/fetch-api.js';

const BookView = () => {
  const { url } = useRouteMatch;
  const [books, setBooks] = useState(null);

  useEffect(() => {
    fetchBookshelf.fetchBooks().then(setBooks);
  }, []);

  return (
    <>
      <h3> BookView BookView BookView</h3>
      {books && (
        <ul>
          {books.map(book => (
            <li key={book.id}>
              {/* <Link to={`${url}/${book.id}`}>{book.title}</Link> */}
              <Link to={`/books/${book.id}`}>{book.title}</Link>
            </li>
          ))}
        </ul>
      )}
    </>
  );
};

export default BookView;
