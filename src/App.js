import './App.css';
import { Link, Route, Routes } from 'react-router-dom';
import { Home } from './pages/Home';
import { BookList } from './pages/BookList';
import { Book } from './pages/Book'
import { NewBook } from './pages/NewBook'
import { NotFound } from './pages/NotFound'
import { BookLayout } from './pages/BookLayout';

function App() {
  return (
    <>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/books">Books</Link></li>
          <li><Link to="/hi">Say hi</Link></li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/books" element={ <BookLayout/> }>
          <Route index element={<BookList />} />
          <Route path=":id" element={<Book />} />
          <Route path="new" element={<NewBook />} />
        </Route>

        <Route path="/hi" element={<h1>Hi</h1>} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
