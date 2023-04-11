import './App.css';
import { Link, Route, Routes } from 'react-router-dom';
import { Home } from './pages/Home';
import { NotFound } from './pages/NotFound'
import { BookRoutes } from './pages/BookRoutes';

function App() {
  return (
    <>
      <Routes /*location="/books"*/>
        <Route path="/books" element={<h1>Extra content</h1>} />
      </Routes>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/books">Books</Link></li>
          <li><Link to="/hi">Say hi</Link></li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="books/*" element={ <BookRoutes/> } />
        <Route path="hi" element={<h1>Hi</h1>} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
