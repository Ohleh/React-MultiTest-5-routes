// import { Routes, Route, NavLink } from 'react-router-dom';

const componentStyledNavlink = styled(NavLink)`
  color: black;

  &.active {
    color: orange;
  }
`;

export const app = () => {
  return (
    <div>
      {/* <nav> //Link - це нави без стилів
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/products">Products</Link>
      </nav> */}
      <nav>
        <componentStyledNavlink to="/">home</componentStyledNavlink>
        <componentStyledNavlink to="/about">About</componentStyledNavlink>
        <componentStyledNavlink to="/products">Products</componentStyledNavlink>
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
