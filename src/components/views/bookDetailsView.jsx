import { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import * as bookShelfAPI from '../services/fetch-api.js';

export default function bookDetailsView() {
  const { bookId } = useParams(); // для отримання динамічного патарметра в АРР bookId

  const [book, setBook] = useState(null);

  useEffect(() => {
    bookShelfAPI.fetchBookById(bookId).then(setBook);
  }, [bookId]);

  return (
    <>
      <PageHeading tetx={`книга ${bookId}`} />
      {book && (
        <>
          <img src={book.imgUrl} alt={book.title} />
          <h2>{book.title} </h2>
          <p> Автор:{book.autor.name} </p>
          <p> {book.descr} </p>
        </>
      )}
    </>
  );
}
