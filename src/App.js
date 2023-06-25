import 'bootstrap/dist/css/bootstrap.min.css';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';

import { Routes, Route, Link } from 'react-router-dom';
import Container from './Components/Container/Container';
import Navigation from './Components/Navigation/Navigation';
import BooksPage from './Pages/BooksPage/BooksPage';
import BookPage from './Pages/BookPage/BookPage';
import CreateBook from './Pages/CreateBook/CreateBook';
import EditBook from './Pages/EditBook/EditBook';
import CategoriesPage from './Pages/CategoriesPage/CategoriesPage';
import CategoryPage from './Pages/CategoryPage/CategoryPage';
import AuthorsPage from './Pages/AuthorsPage/AuthorsPage';
import AuthorPage from './Pages/AuthorPage/AuthorPage';

function App() {
  return (
    <div>
      <Navigation />
      <Routes>
        <Route path='/books' element={<BooksPage />} />
        <Route path='/books/:id' element={<BookPage />} />
        <Route path='/books/create' element={<CreateBook />} />
        <Route path='/books/edit/:id' element={<EditBook/>} />
        <Route path='/categories' element={<CategoriesPage/>} />
        <Route path='/categories/:id' element={<CategoryPage />} />
        <Route path='/authors' element={<AuthorsPage/>}/>
        <Route path='/authors/:id' element={<AuthorPage />} />
        <Route path='/' element={
          <Container>
            <h1>Home page</h1>
          </Container>} />
        <Route path='*' element={
          <Container>
            <h1>404 ERROR. Page not found</h1>
            <Link to='/'>Come back to home page...</Link>
          </Container>} />
      </Routes>

      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={true}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover={false}
        theme="colored"
      />
    </div>
  );
}

export default App;
