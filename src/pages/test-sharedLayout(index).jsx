//src/components/App.jsx
// Imports

export const App = () => {
  return (
    <Container>
      <Header>
        <Logo>
          <span role="img" aria-label="computer icon">
            💻
          </span>{' '}
          GoMerch Store
        </Logo>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/products">Products</Link>
        </nav>
      </Header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />}>
          <Route path="mission" element={<Mission />} />
          <Route path="team" element={<Team />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
        <Route path="/products" element={<Products />} />
        <Route path="/products/:productId" element={<ProductDetails />} />
      </Routes>
    </Container>
  );
};

//src/components/SharedLayout.jsx
// Imports
import { Outlet } from 'react-router-dom';

export const SharedLayout = () => {
  return (
    <Container>
      <Header>
        <Logo>
          <span role="img" aria-label="computer icon">
            💻
          </span>{' '}
          GoMerch Store
        </Logo>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/products">Products</Link>
        </nav>
      </Header>
      <Outlet />
    </Container>
  );
};

// src/components/App.jsx
// Imports
import { SharedLayout } from 'path/to/components/SharedLayout';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />}>
          <Route path="mission" element={<Mission />} />
          <Route path="team" element={<Team />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
        <Route path="products" element={<Products />} />
        <Route path="products/:productId" element={<ProductDetails />} />
      </Route>
    </Routes>
  );
};

Хук useRef
Хук useMemo
Модуль 5 - Заняття 9 - Маршрутизація частина 1
Маршрутизація
Компонент <BrowserRouter>
Компоненти <Route> та <Routes>
Компоненти <Link> та <NavLink>
URL-параметри
Вкладені маршрути
Індексні маршрути
Модуль 5 - Заняття 10 - Маршрутизація частина 2
Модуль 6 - Заняття 11 - Основи Redux
Модуль 6 - Заняття 12 - Redux Toolkit
Додатково
Модуль 5 - Заняття 9 - Маршрутизація частина 1Індексні маршрути
Індексні маршрути

Розібравшись із вкладеними маршрутами, ми можемо розглянути прийом «shared layout», який полягає в тому, що якась загальна HTML-розмітка та стилі всього або частини сторінок програми виносяться в окремий компонент, замість того щоб дублюватися на кожній сторінці. У нашому додатку магазину це хедер з логотипом та головною навігацією, а також контейнер, що обмежує ширину контенту. сторінок.

src/components/App.jsx
// Imports

export const App = () => {
  return (
    <Container>
      <Header>
        <Logo>
          <span role="img" aria-label="computer icon">
            💻
          </span>{" "}
          GoMerch Store
        </Logo>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/products">Products</Link>
        </nav>
      </Header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />}>
          <Route path="mission" element={<Mission />} />
          <Route path="team" element={<Team />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
        <Route path="/products" element={<Products />} />
        <Route path="/products/:productId" element={<ProductDetails />} />
      </Routes>
    </Container>
  );
};

Винесемо цю розмітку та її стилі в окремий компонент <SharedLayout>. Зверніть увагу на використання та місце розташування <Outlet> - у це місце буде рендетися розмітка компонентів сторінок.

src/components/SharedLayout.jsx
// Imports
import { Outlet } from "react-router-dom";

export const SharedLayout = () => {
  return (
    <Container>
      <Header>
        <Logo>
          <span role="img" aria-label="computer icon">
            💻
          </span>{" "}
          GoMerch Store
        </Logo>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/products">Products</Link>
        </nav>
      </Header>
      <Outlet />
    </Container>
  );
};

Далі використовуємо цей компонент у <App> так щоб він рендерився на будь-який маршрут. Для цього будемо рендерувати його на /, а всі інші маршрути робимо вкладеними в нього, тому змінимо path всіх вкладених маршрутів відносно батьківського.

src/components/App.jsx
// Imports
import { SharedLayout } from "path/to/components/SharedLayout";

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route path="about" element={<About />}>
          <Route path="mission" element={<Mission />} />
          <Route path="team" element={<Team />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
        <Route path="products" element={<Products />} />
        <Route path="products/:productId" element={<ProductDetails />} />
      </Route>
    </Routes>
  );
};

У вас може виникнути справедливе питання, куди зник компонент <Home> який раніше рендерився на path="/". Проблема в тому, що зараз на /about рендериться <SharedLayout> та <About>, а на / тільки <SharedLayout>. Для того, щоб відрендерити компонент <Home> на той же маршрут, на який рендериться його батько, необхідно зробити «індексний маршрут».

src/components/App.jsx
// Imports
import { SharedLayout } from "path/to/components/SharedLayout";

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />}>
          <Route path="mission" element={<Mission />} />
          <Route path="team" element={<Team />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
        <Route path="products" element={<Products />} />
        <Route path="products/:productId" element={<ProductDetails />} />
      </Route>
    </Routes>
  );
};

//////

// Індексних маршрутів може бути скільки завгодно, все залежить від завдання. 
//Наприклад, якби у нас у додатку були сторінки панелі адміністратора, 
//на яких зовсім інші загальні компоненти інтерфейсу, 
//то структуру маршрутів можна було б спроектувати наступним чином.
<Routes>
  <Route path="/" element={<SharedLayout />}>
    <Route index element={<Home />} />
    <Route path="about" element={<About />}>
      <Route path="mission" element={<Mission />} />
      <Route path="team" element={<Team />} />
      <Route path="reviews" element={<Reviews />} />
    </Route>
    <Route path="products" element={<Products />} />
    <Route path="products/:productId" element={<ProductDetails />} />
  </Route>
  <Route path="/admin" element={<AdminLayout />}>
    <Route index element={<Dashboard />} />
    <Route path="sales" element={<Sales />} />
    <Route path="customers" element={<Customers />} />
  </Route>
</Routes>