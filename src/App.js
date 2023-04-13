import './App.css';
import { NavLink, Link, useRoutes } from 'react-router-dom';
import { Home } from './pages/Home';
import { NotFound } from './pages/NotFound'
import { BookRoutes } from './pages/BookRoutes';
import { BookList } from './pages/BookList';
import { NewBook } from './pages/NewBook';
import { Book } from './pages/Book';
import { About } from './pages/About';
import { MovieLayout } from './pages/MovieLayout';
import { Movie } from './pages/Movie';

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
      path: "movies",
      element: <MovieLayout />,
      children: [
        {
          index: true,
          element: <h1>MovieList</h1>
        },
        {
          path: ":id",
          element: <Movie />
        },
        {
          path: "new",
          element: <h1>New Movie</h1>
        }
      ]
    },
    {
      path: "about",
      element: <About />
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
            <li>
              <NavLink 
                to="/" 
                className={({ isActive}) => {
                  return isActive ? "activeClass" : "inActiveClass"
                }}
                style={({ isActive }) => {
                  return isActive ? { color: "red"} : {}
                }}
              >
                {({isActive}) => {
                  return isActive ? "Active Home" : "Home" 
                }}
              </NavLink>
              </li>
            <li><NavLink to="about" element={<About />}>About</NavLink></li>
            <li><NavLink to="/books">Books - remains highlighted when children selected</NavLink></li>
            <li><NavLink end to="/movies">Movies - doesn't remain highlighted when children selected</NavLink></li>
            <li><NavLink to="/hi">Say hi</NavLink></li>
            </ul>
        </nav>
      { element }

    </>
  );
}

export default App;
