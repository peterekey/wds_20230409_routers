import './App.css';
import { Link, Route, Routes } from 'react-router-dom';
import { Home } from './pages/Home';
import { BookList } from './pages/BookList';

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
        <Route path="/books" element={<BookList />} />
        <Route path="/hi" element={<h1>Hi</h1>} />
      </Routes>
    </>
  );
}

export default App;
