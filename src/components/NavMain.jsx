import { NavLink } from "react-router-dom";

function NavMain(){
    return(
        <nav className="nav-main">
            <NavLink to="./" >Home</NavLink>
            <NavLink to="/new">News</NavLink>
            <NavLink to="/popular">Popular</NavLink>
            <NavLink to="/trending">Trending</NavLink>
            <NavLink to="/categories">Categories</NavLink>
        </nav>
    )
}

export default NavMain;