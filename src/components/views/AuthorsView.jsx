import { useEffect } from 'react';
import { NavLink, useRouteMatch } from 'react-router-dom';
import * as bookShelfAPI from '../services/fetch-api.js';

export default function AuthorthView() {
  //   const match = useRouteMatch();
  const { url, path } = useRouteMatch();
  const [authors, setAuthorth] = useState(null);

  useEffect(() => {
    bookShelfAPI.fetchAuthors().then(setAuthorth);
  }, []);

  return (
    <>
      <PaheHeading text="Атори" />
      {authors && (
        <ul>
          {authors.map(author => (
            <li key={author.id}>
              <NavLink to={`${url}/${author.id}`}>{author.name}</NavLink>
            </li>
          ))}
        </ul>
      )}
      <hr />
      {/* вкладений маршрут:  на одній сторінці рендериться різна інфа. 
          Для вкладениї марштурів свойсво path, а для вкладеної навігації url*/}
      <Route
        path={`/${path}/:authorId`}
        element={<AuthorSubView authors={authors} />}
        //   тут рендер за умовою
      ></Route>
    </>
  );
}
