import './App.css';
import { Link, useRoutes } from 'react-router-dom';
import { Home } from './pages/Home';
import { NotFound } from './pages/NotFound'
import { BookRoutes } from './pages/BookRoutes';
import { BookList } from './pages/BookList';
import { NewBook } from './pages/NewBook';
import { Book } from './pages/Book';
import { About } from './pages/About';

function App() {
  let element = useRoutes([
    {
      path: "/",
      element: <Home />
    },
    {
      path: "books",
      element: <BookRoutes />,
      children: [
        {
          index: true,
          element: <BookList />
        },
        {
          path: ":id",
          element: <Book />
        },
        {
          path: "new",
          element: <NewBook />
        }
      ]
    },
    {
      path: 'hi',
      element: <h1>Hi</h1>
    },
    {
      path: "*",
      element: <NotFound />
    }
  ])
  return (
    <> 
      <nav>
            <ul>
            <li><Link to="/" reloadDocument>Home</Link></li>
            <li><Link to="about" element={<About />}>About</Link></li>
            <li><Link to="/books">Books</Link></li>
            <li><Link to="/hi">Say hi</Link></li>
            </ul>
        </nav>
      { element }

    </>
  );
}

export default App;
