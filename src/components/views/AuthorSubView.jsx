import { Link, useParams } from 'react-router-dom';

export default function AuthorSubView({ authors }) {
  const { authorId } = useParams();
  const author = authors.filter(author => author.id === Number(authorId));
  return (
    <>
      <h2>{author.name}</h2>

      <ul>
        {author.books.map(book => (
          <li key={book.id}>
            <Link to={`/books/${book.id}`}> {book.title} </Link>
          </li>
        ))}
      </ul>
    </>
  );
}
