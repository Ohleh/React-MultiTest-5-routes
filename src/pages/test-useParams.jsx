// app

import { Routes, Route, Link } from 'react-router-dom';
import Home from 'path/to/pages/Home';
import About from 'path/to/pages/About';
import Products from 'path/to/pages/Products';
import NotFound from 'path/to/pages/NotFound';
import ProductDetails from 'path/to/pages/ProductDetails';

export const App = () => {
  return (
    <div>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/products">Products</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/:productId" element={<ProductDetails />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
};

// src/pages/ProductDetails.jsx

import { useParams } from 'react-router-dom';

const ProductDetails = () => {
  const { productId } = useParams();
  return <div>Now showing product with id - {productId}</div>;
};

// зразок:
// https://codesandbox.io/s/goit-textbook-lesson-9-url-params-grlik3?from-embed=&file=/src/pages/ProductDetails.jsx
