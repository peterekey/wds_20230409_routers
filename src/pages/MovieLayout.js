import { Outlet, NavLink } from 'react-router-dom';

export function MovieLayout () {
    return (
        <>
            <h1>Movies</h1>
            <NavLink to="/movies/1">Movie 1</NavLink><br />
            <NavLink to="/movies/2">Movie 2</NavLink><br />
            <NavLink to="/movies/new">New movie</NavLink>
            <Outlet />
        </>
    )
}