import { Route, Routes } from 'react-router-dom';
import { AppBar } from './AppBar/AppBar';

import HomeView from './views/HomeView';
import MovieView from './views/MovieView';
import BookView from './views/BookView';
import NotFoundView from './views/NotFoundView';

export const App = () => {
  return (
    <div>
      {/* <Container> */}
      <AppBar />

      <Routes>
        <Route path="/" exact element={<HomeView />} />
        <Route path="/authors" element={<MovieView />} />
        {/* <Route path="/books/:bookId" element={<AuthorsView />} /> */}
        <Route path="/books" element={<BookView />} />
        <Route path="/books/:bookId" element={<bookDetailsView />} />
        <Route path="*" element={<NotFoundView />} />
      </Routes>
      {/* </Container> */}
    </div>
  );
};
