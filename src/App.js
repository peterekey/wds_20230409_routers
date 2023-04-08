import './App.css';
import { Route, Routes } from 'react-router-dom';
import { Home } from './pages/Home';
import { BookList } from './pages/BookList';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/books" element={<BookList />} />
        <Route path="/hi" element={<h1>Hi</h1>} />
      </Routes>
    </>
  );
}

export default App;
